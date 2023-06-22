type props = {
  isCorrect: boolean;
  turn: number;
  solution: string;
};

const EndGameModal = ({ isCorrect, turn, solution }: props) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex h-[200px] w-[75vw] items-center justify-center rounded-lg bg-slate-700 bg-opacity-95 md:w-[400px]">
        {isCorrect && (
          <div className="flex flex-col items-center gap-2 ">
            <h1 className=" text-3xl font-bold uppercase tracking-wider text-green-500">You Win</h1>
            <div className=" w-[90%] border-b border-emerald-300"></div>
            <p className="text-base">You have won in {turn} guesses!</p>
            <p className="solution text-lg tracking-widest text-emerald-300 ">{solution.toUpperCase()}</p>
          </div>
        )}

        {!isCorrect && (
          <div className="flex flex-col items-center gap-2 ">
            <h1 className=" text-3xl font-bold uppercase tracking-wider text-rose-500">sorry!</h1>
            <div className=" w-[90%] border-b border-rose-300"></div>
            <p className="text-base">You have used up all of your guesses!</p>
            <p className="solution text-lg tracking-widest text-rose-300 ">{solution.toUpperCase()}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EndGameModal;
{
  /* <p className="solution text-base text-gray-300">You have used up all of your guesses!</p> */
}
{
  /* <p>Check back tomorrow for a new word, or refresh the page to try again!</p> */
}
