export {};

declare global {
  type formattedLetter = {
    key: string;
    result: "correct" | "close" | "absent";
    animationDelay: string;
  };
  type formattedGuess = Array<formattedLetter>;
  type formattedGuesses = Array<formattedGuess>;

  type solutionArray = (string | null)[];

  type keyboardKeys = {
    row1: string[];
    row2: string[];
    row3: string[];
  };

  type usedKeys = {
    [key: string]: string;
  };
}
