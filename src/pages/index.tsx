import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <header>
        <h2 className="text-color-correct">Header</h2>
      </header>
      <main className={`${inter.className}`}>yo</main>
    </>
  )
}
