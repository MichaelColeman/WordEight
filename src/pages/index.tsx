import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Aardvark from "@/components/Aardvark";

export default function Home() {
  const [solution, setSolution] = useState<string>("loading...");

  useEffect(() => {
    fetch("/api/Solution")
      .then((res) => res.json())
      .then((data) => {
        setSolution(data.solution);
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
