import { useState, useEffect } from "react";
import Header from "../components/Header";
import Aardvark from "@/components/Aardvark";

export default function Home() {
  const [solution, setSolution] = useState<string>("yo");
  return (
    <>
      <Header />
      <Aardvark solution={solution} />
    </>
  );
}
