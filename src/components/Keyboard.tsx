import KeyboardRow from "./KeyboardRow";

//keyboard keys
const keyboardKeys: keyboardKeys = {
  row1: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  row2: ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  row3: ["back", "z", "x", "c", "v", "b", "n", "m", "enter"],
};

const Keyboard = (): JSX.Element => {
  return (
    <div className="center mx-auto mt-3 max-w-lg flex-col text-blue-300">
      <KeyboardRow rowLetters={keyboardKeys.row1} />
      <KeyboardRow rowLetters={keyboardKeys.row2} />
      <KeyboardRow rowLetters={keyboardKeys.row3} />
    </div>
  );
};

export default Keyboard;
