import { useState } from "react";
import Image from "next/image";
import helpcircle from "@/images/helpcircle.svg";
import PlayGuideModal from "@/components/PlayGuideModal";
import logo from "@/images/logo.png";

export default function Header() {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <header className="mx-auto flex w-full max-w-[512px] justify-center px-10 pb-2 pt-[10%]">
        <div className="max-h-1 flex-auto basis-2/6"></div>
        <div className="flex flex-auto basis-2/6 justify-center self-center">
          <Image src={logo} alt="word eight logo" width={75} />
        </div>
        <div className="flex flex-auto basis-2/6 justify-end md:items-start">
          <div className="flex">
            <button onClick={handleButtonClick}>
              <Image
                src={helpcircle}
                height={40}
                width={40}
                alt="how to play"
                className="rounded-full hover:bg-slate-500"
              />
            </button>
          </div>
        </div>
      </header>
      {showModal && <PlayGuideModal handleButtonClick={handleButtonClick} />}
    </>
  );
}
