export {};

declare global {
    type formattedLetter = {
        key: string;
        result: string;
        animationDelay: string;
    };

    type formattedGuess = Array<formattedLetter>;

    type formattedGuesses = Array<formattedGuess>;

    interface solutionProps {
        solution: string;
    }

    type solutionArray = (string | null)[];
}
