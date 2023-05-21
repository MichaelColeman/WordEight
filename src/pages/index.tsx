import Image from 'next/image'
import { Inter, Hepta_Slab } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const heptaSlab = Hepta_Slab({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <header className="h-16 border-b-2 flex items-center justify-center">
        <h1 className={`text-2xl font-semibold text-white ${heptaSlab.className}`}>AARDVARK</h1>
      </header>
      <main className={`${inter.className}`}>yo</main>
    </>
  )
}
