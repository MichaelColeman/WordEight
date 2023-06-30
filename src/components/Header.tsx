import { useState } from "react";
import { Roboto_Slab } from "next/font/google";
import { Bodoni_Moda } from "next/font/google";
import Image from "next/image";
import helpcircle from "@/images/helpcircle.svg";
import PlayGuideModal from "@/components/PlayGuideModal";

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  fallback: ['system-ui', 'arial']
});

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  fallback: ['system-ui', 'arial']
})

export default function Header() {
  const [showModal, setShowModal] = useState(true);

  const handleButtonClick = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <header className="flex h-24 w-full md:w-4/5 mx-auto mb-6 justify-center border-b px-10">
        <div className="flex-auto basis-2/6"></div>
        <div className="flex-auto basis-2/6 self-center">
          <h1 className={bodoniModa.className + " " + `text-center text-xl font-semibold text-yellow-300 md:text-2xl`}>
            Word Eight
          </h1>
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
