import { Dispatch, SetStateAction, MouseEvent } from "react";
import roundedCloseButton from "@/images/Material-icons-round-cancel.svg";
import modalExampleOne from "@/images/modal-example-1.png";
import modalExampleTwo from "@/images/modal-example-2.png";
import modalExampleThree from "@/images/modal-example-3.png";
import Image from "next/image";

type props = {
  handleButtonClick: () => void;
};

const PlayGuideModal = ({ handleButtonClick }: props) => {
  return (
    <div
      onClick={handleButtonClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 text-white"
    >
      <div className=" my-5 w-5/6 overflow-hidden rounded-lg bg-neutral-900 pl-6 pr-6 md:w-4/6 md:pl-10 lg:w-1/2 xl:w-2/6">
        <div className="flex justify-between pt-6">
          <h1 className="text-4xl font-bold">How To Play</h1>
          <Image
            onClick={handleButtonClick}
            src={roundedCloseButton}
            height={40}
            width={40}
            alt="close how to play modal"
          />
        </div>
        <h2 className="pb-1 text-xl font-thin">Guess the word in 6 tries</h2>
        <div className="mb-10 h-1 w-3/4 rounded-sm bg-green-700"></div>
        <ul className="list-disc pb-10 pl-5 lg:text-xl">
          <li className="pb-2">Each guess must be a valid 8 letter word.</li>
          <li>The color of the tiles will change to show how close your guess is to the answer!</li>
        </ul>
        <p className="pb-4 text-xl font-bold">Examples</p>
        <Image className="pb-2" src={modalExampleOne} alt="the word mountain with the letter t highlighted green" />
        <p className="pb-8">
          <b>T</b> is in the correct spot!
        </p>
        <Image className="pb-2" src={modalExampleTwo} alt="the word backpack with the letter b highlighted yellow" />
        <p className="pb-8">
          <b>B</b> is in the answer but in a different spot.
        </p>
        <Image
          className="pb-2"
          src={modalExampleThree}
          alt="the word addition with the letter t highlighted dark grey"
        />
        <p className="pb-8">
          <b>T</b> is not in the answer at all.
        </p>
      </div>
    </div>
  );
};

export default PlayGuideModal;
