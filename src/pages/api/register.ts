import { prisma } from "@/db";
import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  try {
    switch (req.method) {
      case "POST":
        console.log(req.body);
        await prisma.user.create({
          data: {
            vorname: req.body.vorname,
            nachname: req.body.nachname,
            email: req.body.email,
            password: req.body.password,
            matrikel: parseInt(req.body.matrikel)
          }
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
    console.error(err);
    res.status(500).json({
      message: "Internal Server Error",
    });
    return;
  }
}

export default handler;