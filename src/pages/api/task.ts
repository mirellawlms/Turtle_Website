import { prisma } from "@/db";
import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  // const session = await getServerSession(req, res, authOptions)
  // const user = await prisma.user.findFirst({ email: session.user.email });
  const user = { id: "f52118c1-3813-4b46-a995-c51d8404a599" };

  try {
    switch (req.method) {
      case "GET":
        const task = await prisma.task.findMany()
        res.status(200).json({
          task
        });
        return;
      case "POST":
        await prisma.task.upsert({
            create:{id:req.body.id,code:req.body.code,userid:user.id, isReviewed:false , complete:req.body.complete},
            update:{code:req.body.code,userid:user.id, complete:req.body.complete},
            where:{id:req.body.id}
        })
        res.status(200).json({
            success : "success"
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