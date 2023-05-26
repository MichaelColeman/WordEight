import { useState, useEffect } from "react";
import Image from "next/image";
import { Inter, Hepta_Slab } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const heptaSlab = Hepta_Slab({ subsets: ["latin"] });

export default function Home() {
  const [solution, setSolution] = useState<string>("yo");

  useEffect(() => {
    fetch("/api/Solution")
      .then((res) => res.json())
      .then((data) => {
        setSolution(data.solution);
        console.log(`logging solution: ${data.solution}`);
      })
      .catch((err) => {
        console.log(`err: ${err.message}`);
      });
  }, []);

  return (
    <>
      <header className="h-16 border-2 text-white">
        <h1
          className={`font-semi-bold text-2xl text-white ${heptaSlab.className} border-gray-500`}
        >
          AARDVARK
        </h1>
      </header>
      <main className={`${inter.className}`}>yo</main>
    </>
  );
}
