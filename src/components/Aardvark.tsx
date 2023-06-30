import React, { useEffect, useState } from "react";
import GameBoard from "./GameBoard";
import Keyboard from "./Keyboard";
import useGameLogic from "@/hooks/useGameLogic";
import Modal from "./EndGameModal";

type Props = {
  solution: string;
};

const Aardvark = ({ solution }: Props) => {
  const { currentGuess, handleKeyboardInput, usedKeys, isCorrect, formattedGuesses, turn } = useGameLogic({ solution });
  const [showEndGameModal, setShowEndGameModal] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyboardInput);
    if (isCorrect) {
      setTimeout(() => setShowEndGameModal(true), 2500);
      console.log("you've won!");
      window.removeEventListener("keyup", handleKeyboardInput);
    }
    console.log(turn);
    if (turn > 7) {
      setTimeout(() => setShowEndGameModal(true), 2500);
      console.log("out of turns!");
      window.removeEventListener("keyup", handleKeyboardInput);
    }

    return () => window.removeEventListener("keyup", handleKeyboardInput);
  }, [handleKeyboardInput, isCorrect, turn]);

  return (
    <div>
      <GameBoard currentGuess={currentGuess} formattedGuesses={formattedGuesses} turn={turn} />
      <Keyboard usedKeys={usedKeys} />
      {showEndGameModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution} />}
    </div>
  );
};

export default Aardvark;
