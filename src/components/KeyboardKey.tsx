type KeyboardKeyProps = {
  data: string;
  result: string;
};

const KeyboardKey = ({ data, result }: KeyboardKeyProps) => {
  const handleGameKeyboardInput = (data: string) => {
    console.log(data);
    const keyboardEvent: KeyboardEvent = new KeyboardEvent("keyup", { key: data });
    window.dispatchEvent(keyboardEvent);
  };

  return (
    <button
      onClick={() => handleGameKeyboardInput(data)}
      className={`${result} flex-grow rounded bg-gray-500 font-bold uppercase text-white`}
      key={data}
    >
      {data}
    </button>
  );
};

export default KeyboardKey;
