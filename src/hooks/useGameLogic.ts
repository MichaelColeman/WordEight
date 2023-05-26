import { useState } from "react";

export default function useGameLogic({ solution }: { solution: string }) {
  const [turn, setTurn] = useState<number>(0);
  const [currentGuess, setCurrentGuess] = useState<string>("");
  const [formattedGuesses, setFormattedGuesses] = useState<string[]>([]); //array of letter objects
  const [guessHistory, setGuessHistory] = useState<string[]>([]); //array of strings
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  //returns true if guess is a correctly spelled word
  const validateGuess = (guess: string): boolean => {
    return true;
  };

  //format guess into an array of letter objects
  //[{letter: "a", color: "green", animationDelayMS: 500 }]
  const formatGuess = (guess: string) => {};

  //add new guess to guesses state
  //if the guess is correct, update isCorrect state to true
  //if guess is incorrect, increment turn number state
  const addGuess = (guess: string) => {};

  //handle keyup event and track current guess
  // if the user presses enter, add the guess to the guesses state (after validation)
  const handleKeyboardInput = ({ key }: KeyboardEvent) => {
    if (isLetter(key) && currentGuess.length < solution.length) {
      setCurrentGuess((prev) => {
        return prev + key;
      });
      console.log("currentGuess:", currentGuess);
    } else {
      console.log("fail bud");
    }
  };

  const isLetter = (input: string): boolean => {
    return /^[a-zA-Z]{1}$/.test(input);
  };

  return { turn, currentGuess, guessHistory, isCorrect, handleKeyboardInput };
}
