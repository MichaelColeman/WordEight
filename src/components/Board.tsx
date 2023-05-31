import React from "react";
import Row from "@/components/Row";
import styles from "./Board.module.css";

type BoardProps = {
    currentGuess: string;
    formattedGuesses: formattedGuesses;
    turn: number;
};

const Board = ({ currentGuess, formattedGuesses, turn }: BoardProps) => {
    console.table(formattedGuesses);
    return (
        <div className={styles.board}>
            {formattedGuesses.map((formattedGuess, i) => {
                if (turn === i) {
                    return <Row key={i} formattedGuess={formattedGuess} currentGuess={currentGuess} />;
                }
                return <Row formattedGuess={formattedGuess} key={i} />;
            })}
        </div>
    );
};

export default Board;
