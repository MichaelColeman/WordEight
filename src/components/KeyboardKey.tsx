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
        className={`${result} flex-grow rounded bg-neutral-700 font-semibold shadow-[inset_0px_0px_4px_0px_rgba(100,100,100,0.5)]`}
        key={data}
      >
        {data}
      </button>
    );
  }

  return (
    <button
      onClick={() => handleClick(data)}
      className={`${result} flex-grow rounded bg-neutral-700 font-semibold uppercase shadow-[inset_0px_0px_4px_0px_rgba(100,100,100,0.5)]`}
      key={data}
    >
      {data}
    </button>
  );
};

export default KeyboardKey;
