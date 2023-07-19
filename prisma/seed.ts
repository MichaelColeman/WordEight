import fs from "fs";
import csv from "csv-parser";

type row = {
  word: string;
  liveDate: Date;
};

async function seed() {
  try {
    const data: row[] = [];
    fs.createReadStream("prisma/wordeightmasterlist.csv")
      .pipe(csv(["word", "liveDate"]))
      .on("data", (row: row) => data.push(row))
      .on("end", async () => {
        for (const row of data) {
          console.log(row);
        }
      });
    console.log("Data console logged successfully");
  } catch (error) {
    console.log("Error seeding data", error);
  } finally {
    // await prisma.$disconnect();
  }
}

seed();
