type KeyboardKeyProps = {
  data: string;
  result: string;
};

const KeyboardKey = ({ data, result }: KeyboardKeyProps) => {
  const handleClick = (data: string) => {
    console.log(data);
    const keyboardEvent: KeyboardEvent = new KeyboardEvent("keyup", { key: data });
    window.dispatchEvent(keyboardEvent);
  };

  if (data.toLowerCase() === "enter" || data.toLowerCase() === "back") {
    return (
      <button
        onClick={() => handleClick(data)}
        className={`${result} flex-grow rounded bg-amber-300 font-bold uppercase text-slate-950`}
        key={data}
      >
        {data}
      </button>
    );
  }

  return (
    <button
      onClick={() => handleClick(data)}
      className={`${result} flex-grow rounded bg-gray-600 font-bold uppercase text-white`}
      key={data}
    >
      {data}
    </button>
  );
};

export default KeyboardKey;
