type KeyboardKey = {
  data: string;
};

const KeyboardKey = ({ data }: KeyboardKey): JSX.Element => {
  return <button className={`flex-grow rounded bg-gray-500 font-bold uppercase text-white`}>{data}</button>;
};

export default KeyboardKey;
