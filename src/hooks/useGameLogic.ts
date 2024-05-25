import { useState } from "react";

type Props = {
  solution: string;
};

export default function useGameLogic({ solution }: Props) {
  const [turn, setTurn] = useState<number>(0);
  const [currentGuess, setCurrentGuess] = useState<string>("");
  const [formattedGuesses, setFormattedGuesses] = useState<formattedGuesses>([
    ...Array(6).fill([
      { key: "", result: "" },
      { key: "", result: "" },
      { key: "", result: "" },
      { key: "", result: "" },
      { key: "", result: "" },
      { key: "", result: "" },
    ]),
  ]); //array of an array of letter objects [[{stuff},{stuff}],[{stuff},{stuff}]]
  const [guessHistory, setGuessHistory] = useState<string[]>([]); //array of strings
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [usedKeys, setUsedKeys] = useState<usedKeys>({});

  //returns true if guess is a correctly spelled word
  const validateGuess = (): boolean => {
    //validate currentGuess via api or spell checker, or create a spellchecker in the validate route
    return true;
  };

  //format guess into an array of letter objects
  //[{letter: "a", result: "correct" | "close" | "absent", animationDelay: 0.3s }]
  const formatGuess = () => {
    //console.log("formatting guess:", currentGuess);

    let solutionArray: solutionArray = [...solution];

    let formattedGuess: formattedGuess = [...currentGuess].map((letter, i) => {
      const animationDelay = (0.2 * (i + 1)).toFixed(1) + "s";
      return { key: letter, result: "absent", animationDelay: animationDelay };
    });

    //first pass finds all correct letters and marks them as correct
    formattedGuess.forEach((letter, i) => {
      if (solutionArray[i] === letter.key) {
        letter.result = "correct";
        solutionArray[i] = null;
      }
    });

    //second pass finds remaining letters and marks them as close
    formattedGuess.forEach((letter, i) => {
      if (solutionArray.includes(letter.key) && letter.result !== "correct") {
        formattedGuess[i].result = "close";
        solutionArray[solutionArray.indexOf(letter.key)] = null;
      }
    });
    return formattedGuess;
  };

  const handleKeyboardInput = ({ key }: KeyboardEvent) => {
    if (key === "Backspace" || key === "Back") {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1);
      });
      return;
    }

    if (key.toLowerCase() === "enter") {
      //return if turns are more than 8 (indicating that the game is over)
      if (turn > solution.length) {
        //console.log("turn > solution.length");
        return;
      }

      //return if the current guess isnt 8 letters long
      if (currentGuess.length !== solution.length) {
        console.log("word is not 8 characters long");
        return;
      }

      //return if word is in the list of guessHistory
      if (guessHistory.includes(currentGuess)) {
        console.log("you have already guessed this word");
        return;
      }

      //if guess passes validation, commit guess
      if (validateGuess()) {
        commitGuess();
      }
      return;
    }

    if (currentGuess.length < solution.length && isLetter(key)) {
      setCurrentGuess((prev) => {
        return prev + key;
      });
    }
  };

  const isLetter = (input: string): boolean => {
    return /^[a-zA-Z]{1}$/.test(input);
  };

  const commitGuess = () => {
    if (currentGuess === solution) {
      // GAME OVER DUDE
      setIsCorrect(true);
      console.log("you won");
    }

    const formattedGuess = formatGuess();
    setFormattedGuesses((previousGuesses) => {
      let newGuesses = [...previousGuesses];
      newGuesses[turn] = formattedGuess;
      return newGuesses;
    });

    setGuessHistory((prev) => {
      // console.log(guessHistory);
      return [...prev, currentGuess];
    });

    setUsedKeys((prev) => {
      let newKeys = { ...prev };

      formattedGuess.forEach((letter) => {
        const currentColor = newKeys[letter.key];

        if (letter.result === "correct") {
          newKeys[letter.key] = "correct";
          return;
        }

        if (letter.result === "close" && currentColor !== "correct") {
          newKeys[letter.key] = "close";
          return;
        }

        if (letter.result === "absent" && currentColor !== "correct" && currentColor != "close") {
          newKeys[letter.key] = "absent";
          return;
        }
      });

      return newKeys;
    });
    //reset current guess to empty
    setCurrentGuess("");

    //increment turn
    setTurn((prev) => prev + 1);
  };

  return {
    turn,
    currentGuess,
    guessHistory,
    formattedGuesses,
    isCorrect,
    usedKeys,
    handleKeyboardInput,
  };
}
