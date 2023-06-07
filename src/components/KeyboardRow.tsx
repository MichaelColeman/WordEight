import KeyboardKey from "./KeyboardKey";

type KeyboardRowProps = {
  rowLetters: string[];
  usedKeys: usedKeys;
};

const KeyboardRow = ({ rowLetters, usedKeys }: KeyboardRowProps) => {
  return (
    <>
      <div className={`flex flex-nowrap`}>
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
