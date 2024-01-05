import React, { useEffect, useState } from "react";
import GameBoard from "./GameBoard";
import Keyboard from "./Keyboard";
import useGameLogic from "@/hooks/useGameLogic";
import Modal from "./EndGameModal";
import { Roboto_Mono } from "next/font/google";
import { Helmet } from "react-helmet";

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  //display: 'swap',
  variable: "--font-roboto-mono",
});

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
    <>
      <Helmet>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" sizes="32x32"></link>
        <link rel="icon" href="/icon.svg" type="image/svg+xml"></link>
        <link rel="apple-touch-icon" href="/icon-180px.png"></link>
      </Helmet>
      <div className={`${roboto_mono.variable}`}>
        <GameBoard currentGuess={currentGuess} formattedGuesses={formattedGuesses} turn={turn} />
        <Keyboard usedKeys={usedKeys} />
        {showEndGameModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution} />}
      </div>
    </>
  );
};

export default Aardvark;
