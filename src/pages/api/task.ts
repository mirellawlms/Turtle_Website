import { prisma } from "@/db";
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const session = await getServerSession(req, res, authOptions);
  console.log(session);
  if (!session || !session.user) {
    res.status(401).json({
      message: "Unauthorized",
    });
    return;
  }
  const user = await prisma.user.findFirst({
    where: { email: session.user.email as string},
  });

  if (!user) {
    res.status(401).json({
      message: "Unauthorized",
    });
    return;
  }

  try {
    switch (req.method) {
      case "GET":
        const task = await prisma.task.findMany({
          where: { userid: user.id },

        });
        res.status(200).json({
          task,
        });
        return;
      case "POST":
        await prisma.task.upsert({
          create: {
            id: req.body.id,
            code: req.body.code,
            userid: user.id,
            isReviewed: false,
            complete: req.body.complete,
          },
          update: {
            code: req.body.code,
            userid: user.id,
            complete: req.body.complete,
          },
          where: {
            id_userid: {
              id: req.body.id,
              userid: user.id,
            },
          },
        });
        res.status(200).json({
          success: "success",
        });
        return;
      default:
        res.setHeader("Allow", ["GET", "POST", "PUT"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
        return;
    }
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
    });
    return;
  }
}

export default handler;
