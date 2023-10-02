import KeyboardKey from "./KeyboardKey";

type KeyboardRowProps = {
  rowLetters: string[];
  usedKeys: usedKeys;
};

const KeyboardRow = ({ rowLetters, usedKeys }: KeyboardRowProps) => {
  return (
    <>
      <div className="mb-[3px] flex h-[40px] flex-nowrap gap-[3px]">
        {rowLetters.map((letter) => {
          let result = "";
          if (usedKeys[letter]) {
            result = usedKeys[letter];
          }
          return <KeyboardKey data={letter} result={result} key={letter} />;
        })}
      </div>
    </>
  );
};

export default KeyboardRow;
