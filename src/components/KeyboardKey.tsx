type KeyboardKeyProps = {
  data: string;
  result: string;
};

const KeyboardKey = ({ data, result }: KeyboardKeyProps) => {
  return <button className={`${result} flex-grow rounded bg-gray-500 font-bold uppercase text-white`}>{data}</button>;
};

export default KeyboardKey;
