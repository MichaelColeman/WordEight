import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method != "GET") {
      res.status(405).json({ error: "Method not allowed" });
      return;
    }
    const today = new Date();
    today.setUTCHours(0, 0, 0, 0);
    console.log("today: ", today.toISOString());

    const solution = await prisma.word.findFirst({
      where: {
        liveDate: {
          gte: today,
        },
      },
    });

    if (!solution) {
      res.status(404).json({ error: "No solution found" });
      return;
    }
    console.log("solution: ", solution);
    res.status(200).json({ solution: solution.word });
  } catch (error) {
    console.log("error: ", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
