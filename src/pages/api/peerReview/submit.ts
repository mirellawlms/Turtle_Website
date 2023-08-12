import { prisma } from "@/db";
import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  // const session = await getServerSession(req, res, authOptions)
  // const user = await prisma.user.findFirst({ email: session.user.email });
  const user = { id: "f52118c1-3813-4b46-a995-c51d8404a599" };

  try {
    switch (req.method) {
      //Ich weise jemanden  meinen Pseudocode für die PeerReview zu
      case "POST":
        const reviewer = await prisma.user.findFirst({
          //select * from user where id not user.id
          where: {
            PeerReview: {
              none: {},
            },
            NOT: {
              id: user.id,
            },
          },
        });
        if (!reviewer) {
          res.status(404).json({
            error: "kein Reviewer mehr frei!",
          });
          return;
        }
        await prisma.peerReview.create({
          data: {
            taskId: "id_algo_1_2",
            taskUserid: user.id,
            reviewerid: reviewer.id,
          },
        });
        res.status(200).json({});
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
