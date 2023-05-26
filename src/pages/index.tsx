import { useState, useEffect } from "react";
import Image from "next/image";
import { Inter, Hepta_Slab } from "next/font/google";
import Header from "@/components/Header";
import Aardvark from "@/components/Aardvark";

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
      <Header />
      <Aardvark solution={solution} />
    </>
  );
}
