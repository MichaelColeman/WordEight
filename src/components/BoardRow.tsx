import React from "react";

type BoardRowProps = {
  formattedGuess: formattedGuess;
  currentGuess?: string;
};

const BoardRow = ({ formattedGuess, currentGuess }: BoardRowProps) => {
  if (formattedGuess[0].result) {
    return (
      <div className={`flex justify-center gap-1`}>
        {formattedGuess.map((letter, i) => {
          return (
            <div className={`tile ${letter.result}`} style={{ animationDelay: `${letter.animationDelay}` }} key={i}>
              <span>{letter.key}</span>
            </div>
          );
        })}
      </div>
    );
  }

  if (currentGuess) {
    let letterArray = currentGuess.split("");
    while (letterArray.length < 8) {
      letterArray.push("");
    }
    return (
      <div className={`flex justify-center gap-1`}>
        {letterArray.map((letter, i) => {
          if (letter) {
            return (
              <div className={`tile filled`} key={i}>
                <span>{letter}</span>
              </div>
            );
          } else {
            return (
              <div className={`tile`} key={i}>
                <span>{letter}</span>
              </div>
            );
          }
        })}
      </div>
    );
  }

  return (
    <div className={`flex justify-center gap-1`}>
      <div className={`tile`}>
        <span className={"text"}></span>
      </div>
      <div className={`tile`}>
        <span className={"text"}></span>
      </div>
      <div className={`tile`}>
        <span className={"text"}></span>
      </div>
      <div className={`tile`}>
        <span className={"text"}></span>
      </div>
      <div className={`tile`}>
        <span className={"text"}></span>
      </div>
      <div className={`tile`}>
        <span className={"text"}></span>
      </div>
      <div className={`tile`}>
        <span className={"text"}></span>
      </div>
      <div className={`tile`}>
        <span className={"text"}></span>
      </div>
    </div>
  );
};

export default BoardRow;
