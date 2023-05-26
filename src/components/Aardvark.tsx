import React, { useEffect } from "react";
import Board from "./Board";
import Keyboard from "./Keyboard";
import useGameLogic from "@/hooks/useGameLogic";

interface solutionProps {
  solution: string;
}

const Aardvark: React.FunctionComponent<solutionProps> = ({ solution }) => {
  const { currentGuess, handleKeyboardInput } = useGameLogic({ solution });

  useEffect(() => {
    window.addEventListener("keyup", handleKeyboardInput);

    return () => window.removeEventListener("keyup", handleKeyboardInput);
  }, [handleKeyboardInput]);

  return (
    <>
      <div className="text-2xl text-green-500">{solution}</div>
      <div className="text-xl text-blue-500">{currentGuess}</div>
    </>
  );
};

export default Aardvark;
