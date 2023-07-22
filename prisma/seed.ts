import fs from "fs";
import csv from "csv-parser";
import { PrismaClient } from "@prisma/client";

type row = {
  word: string;
  liveDate: Date;
};

const prisma = new PrismaClient();

async function seed() {
  try {
    const rows: row[] = [];
    fs.createReadStream("prisma/wordeightmasterlist.csv")
      .pipe(csv(["word", "liveDate"]))
      .on("data", (row: row) => rows.push(row))
      .on("end", async () => {
        const createMany = await prisma.word.createMany({
          data: rows,
          skipDuplicates: true,
        });
        console.log("Seeded data", createMany);
      });
  } catch (error) {
    console.log("Error seeding data", error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
