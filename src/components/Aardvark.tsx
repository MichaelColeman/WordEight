import React, { useEffect } from "react";
import Board from "./Board";
import Keyboard from "./Keyboard";
import useGameLogic from "@/hooks/useGameLogic";

const Aardvark: React.FunctionComponent<solutionProps> = ({ solution }) => {
    const { currentGuess, handleKeyboardInput, formattedGuesses, turn } = useGameLogic({ solution });

    useEffect(() => {
        window.addEventListener("keyup", handleKeyboardInput);

        return () => window.removeEventListener("keyup", handleKeyboardInput);
    }, [handleKeyboardInput]);

    return (
        <>
            <Board currentGuess={currentGuess} formattedGuesses={formattedGuesses} turn={turn} />
            <div className="text-xl text-blue-500">{currentGuess}</div>
        </>
    );
};

export default Aardvark;
