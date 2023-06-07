import React, { useEffect } from "react";
import GameBoard from "./GameBoard";
import Keyboard from "./Keyboard";
import useGameLogic from "@/hooks/useGameLogic";

const Aardvark = ({ solution }: solutionProps) => {
  const { currentGuess, handleKeyboardInput, usedKeys, formattedGuesses, turn } = useGameLogic({ solution });

  useEffect(() => {
    window.addEventListener("keyup", handleKeyboardInput);
    return () => window.removeEventListener("keyup", handleKeyboardInput);
  }, [handleKeyboardInput]);

  return (
    <>
      <GameBoard currentGuess={currentGuess} formattedGuesses={formattedGuesses} turn={turn} />
      <Keyboard usedKeys={usedKeys} />
    </>
  );
};

export default Aardvark;
