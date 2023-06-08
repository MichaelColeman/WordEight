import { Hepta_Slab } from "next/font/google";

const heptaSlab = Hepta_Slab({ subsets: ["latin"] });

export default function Header() {
  return (
    <header className="mb-4 flex h-10 items-center justify-center border-b-2">
      <h1 className={`text-lg font-semibold text-amber-400 md:text-2xl ${heptaSlab.className}`}>AARDVARK</h1>
    </header>
  );
}
