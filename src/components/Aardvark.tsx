import React from "react";
import Board from "./Board";
import Keyboard from "./Keyboard";

interface solutionProps {
  solution: string;
};

const Aardvark: React.FunctionComponent<solutionProps> = ({ solution }) => {
  return <div className="text-2xl text-green-500">{solution}</div>;
};

export default Aardvark;
