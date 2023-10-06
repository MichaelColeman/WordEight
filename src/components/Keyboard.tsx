import KeyboardRow from "./KeyboardRow";

type keyboardProps = {
  usedKeys: usedKeys;
};

const keyboardKeys: keyboardKeys = {
  row1: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  row2: ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  row3: ["Enter", "z", "x", "c", "v", "b", "n", "m", "Back"],
};

const Keyboard = ({ usedKeys }: keyboardProps) => {
  return (
    <div className="center opacity-0.75 md:max-w-[700px] mx-auto max-w-[95vw] flex-col font-mono">
      <KeyboardRow usedKeys={usedKeys} rowLetters={keyboardKeys.row1} />
      <KeyboardRow usedKeys={usedKeys} rowLetters={keyboardKeys.row2} />
      <KeyboardRow usedKeys={usedKeys} rowLetters={keyboardKeys.row3} />
    </div>
  );
};

export default Keyboard;
