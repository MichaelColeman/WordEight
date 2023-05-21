import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <header className="h-16 border-2 text-white">
        <h1 className="text-white">AARDVARK</h1>
      </header>
      <main className={`${inter.className}`}>yo</main>
    </>
  )
}
