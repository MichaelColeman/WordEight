import { useState, useEffect } from "react";
import Header from "../components/Header";
import Aardvark from "@/components/Aardvark";

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
