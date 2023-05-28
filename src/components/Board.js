import React from "react";
import Row from "@/components/Row";
import styles from "./Board.module.css";

export default function Board({ currentGuess, formattedGuesses, turn }) {
  console.log(formattedGuesses);
  return (
    <div className={styles.board}>
      {formattedGuesses.map((guess, i) => {
        return <Row guess={guess} key={i} />;
      })}
    </div>
  );
}
