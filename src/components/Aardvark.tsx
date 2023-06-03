import React, { useEffect } from "react";
import Board from "./GameBoard";
import Keyboard from "./Keyboard";
import useGameLogic from "@/hooks/useGameLogic";

const Aardvark = ({ solution }: solutionProps) => {
  const { currentGuess, handleKeyboardInput, formattedGuesses, turn } = useGameLogic({ solution });

  useEffect(() => {
    window.addEventListener("keyup", handleKeyboardInput);
    return () => window.removeEventListener("keyup", handleKeyboardInput);
  }, [handleKeyboardInput]);

  return (
    <>
      <Board currentGuess={currentGuess} formattedGuesses={formattedGuesses} turn={turn} />
      <Keyboard />
    </>
  );
};

export default Aardvark;
