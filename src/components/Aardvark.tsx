import React, { useEffect } from "react";
import GameBoard from "./GameBoard";
import Keyboard from "./Keyboard";
import useGameLogic from "@/hooks/useGameLogic";

const Aardvark = ({ solution }: solutionProps) => {
  const { currentGuess, handleKeyboardInput, usedKeys, isCorrect, formattedGuesses, turn } = useGameLogic({ solution });

  useEffect(() => {
    window.addEventListener("keyup", handleKeyboardInput);
    if (isCorrect) {
      console.log("you've won!");
      window.removeEventListener("keyup", handleKeyboardInput);
    }

    if (turn > 8) {
      console.log("out of turns!");
      window.removeEventListener("keyup", handleKeyboardInput);
    }

    return () => window.removeEventListener("keyup", handleKeyboardInput);
  }, [handleKeyboardInput, isCorrect, turn]);

  return (
    <>
      <GameBoard currentGuess={currentGuess} formattedGuesses={formattedGuesses} turn={turn} />
      <Keyboard usedKeys={usedKeys} />
    </>
  );
};

export default Aardvark;
