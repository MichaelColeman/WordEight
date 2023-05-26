import { Hepta_Slab } from "next/font/google";

const heptaSlab = Hepta_Slab({ subsets: ["latin"] });

export default function Header() {
  return (
    <header className="flex h-16 items-center justify-center border-b-2">
      <h1
        className={`text-2xl font-semibold text-amber-300 ${heptaSlab.className}`}
      >
        AARDVARK
      </h1>
    </header>
  );
}
