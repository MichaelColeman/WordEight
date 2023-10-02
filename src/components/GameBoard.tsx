import BoardRow from "@/components/BoardRow";
import { Open_Sans } from "next/font/google";

const open_sans = Open_Sans({
  subsets: ["latin"],
  //display: 'swap',
  variable: "--font-open-sans",
});

type GameBoardProps = {
  currentGuess: string;
  formattedGuesses: formattedGuesses;
  turn: number;
};

const GameBoard = ({ currentGuess, formattedGuesses, turn }: GameBoardProps) => {
  console.table(formattedGuesses);
  return (
    <div className={`mb-3 flex flex-col gap-[3px] ${open_sans.variable} font-sans font-light`}>
      {formattedGuesses.map((formattedGuess, i) => {
        if (turn === i) {
          return <BoardRow key={i} formattedGuess={formattedGuess} currentGuess={currentGuess} />;
        }
        return <BoardRow formattedGuess={formattedGuess} key={i} />;
      })}
    </div>
  );
};

export default GameBoard;
