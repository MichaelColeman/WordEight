import React from "react";
import Board from "./Board";
import Keyboard from "./Keyboard";

type solutionProps = {
  solution: string;
};

const Aardvark: React.FunctionComponent<solutionProps> = ({ solution }) => {
  return <div className="text-2xl text-green-500">{solution}</div>;
};

export default Aardvark;
