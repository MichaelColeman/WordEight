import KeyboardKey from "./KeyboardKey";

type KeyboardRowProps = {
  rowLetters: string[];
};

const KeyboardRow = ({ rowLetters }: KeyboardRowProps): JSX.Element => {
  return (
    <>
      <div className={`flex flex-nowrap`}>
        {rowLetters.map((letter) => {
          return <KeyboardKey data={letter} key={letter} />;
        })}
      </div>
    </>
  );
};

export default KeyboardRow;
