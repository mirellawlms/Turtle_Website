import { prisma } from "@/db";
import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  // const session = await getServerSession(req, res, authOptions)
  // const user = await prisma.user.findFirst({ email: session.user.email });
  const user = { id: "f52118c1-3813-4b46-a995-c51d8404a599" };

  try {
    switch (req.method) {
      //PSEUDOCODE von jemand anderem / MEIN KOMMENTAR dazu
      //Ich bekomme Pseudocode von Komilitonen
      case "GET":
        const peerReview = await prisma.peerReview.findFirst({
          where: {
            reviewerid: user.id,
          },
          include: {
            Task: true,
          },
        });
        res.status(200).json({
          peerReview,
        });
        return;
      //Ich gebe Kommentar für Pseudocode von Komilitonen
      case "POST":
        await prisma.peerReview.update({
          where: {
            reviewerid_taskId_taskUserid: {
              reviewerid: user.id,
              taskId: "id_algo_1_2",
              taskUserid: req.body.userid,
            },
          },
          data: {
            comment: req.body.comment,
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
    console.log(err);
    res.status(500).json({
      message: "Internal Server Error",
    });
    return;
  }
}

export default handler;
