import { useState } from "react";
import { Hepta_Slab } from "next/font/google";
import Image from "next/image";
import helpcircle from "@/images/helpcircle.svg";
import PlayGuideModal from "@/components/PlayGuideModal";

const heptaSlab = Hepta_Slab({ subsets: ["latin"] });

export default function Header() {
  const [showModal, setShowModal] = useState(true);

  const handleButtonClick = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <header className="flex h-24 w-full justify-center border-b px-10">
        <div className="flex-auto basis-2/6"></div>
        <div className="flex-auto basis-2/6 self-center">
          <h1 className="text-center text-2xl font-semibold text-amber-400 md:text-2xl">AARDVARK</h1>
        </div>
        <div className="flex flex-auto basis-2/6 justify-end">
          <div className="flex">
            <button onClick={handleButtonClick}>
              <Image
                src={helpcircle}
                height={48}
                width={48}
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
