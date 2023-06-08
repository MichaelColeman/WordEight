type props = {
  isCorrect: boolean;
  turn: number;
  solution: string;
};

const EndGameModal = ({ isCorrect, turn, solution }: props) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
      <div className="flex h-[200px] w-[75vw] items-center justify-center rounded-lg bg-green-700 bg-opacity-80 md:w-[400px]">
        {isCorrect && (
          <div className="flex flex-col items-center gap-2 ">
            <h1 className="text-3xl uppercase text-green-200">You Win</h1>
            <p className="solution text-lg text-gray-300 underline ">The word was {solution}</p>
            <p className="text-lg">You have won in {turn} Guesses!</p>
          </div>
        )}

        {!isCorrect && (
          <div className=" flex flex-col items-center gap-2">
            <h1 className="text-lg text-blue-500 ">Oh No..</h1>
            <p className="solution text-base text-gray-300">You have used up all of your guesses!</p>
            <p>Check back tomorrow for a new word, or refresh the page to try again!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EndGameModal;
