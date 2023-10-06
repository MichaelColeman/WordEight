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
      <header className="m-4 mx-auto flex h-24 w-full max-w-3xl justify-center px-10 md:w-3/5">
        <div className="flex-auto basis-2/6"></div>
        <div className="flex flex-auto basis-2/6 justify-center self-center">
          <Image src={logo} alt="word eight logo" width={125} />
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
