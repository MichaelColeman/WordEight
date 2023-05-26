import Image from 'next/image'
import { Inter, Hepta_Slab } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const heptaSlab = Hepta_Slab({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <header className="h-16 border-2 text-white">
        <h1 className={`font-semi-bold text-2xl text-white ${heptaSlab.className} border-gray-500`}>AARDVARK</h1>
      </header>
      <main className={`${inter.className}`}>yo</main>
    </>
  )
}
