import KeyboardRow from "./KeyboardRow";

type keyboardProps = {
  usedKeys: usedKeys;
};

const keyboardKeys: keyboardKeys = {
  row1: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  row2: ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  row3: ["enter", "z", "x", "c", "v", "b", "n", "m", "back"],
};

const Keyboard = ({ usedKeys }: keyboardProps) => {
  return (
    <div className="center mx-auto mt-3 max-w-lg flex-col text-blue-300">
      <KeyboardRow usedKeys={usedKeys} rowLetters={keyboardKeys.row1} />
      <KeyboardRow usedKeys={usedKeys} rowLetters={keyboardKeys.row2} />
      <KeyboardRow usedKeys={usedKeys} rowLetters={keyboardKeys.row3} />
    </div>
  );
};

export default Keyboard;
