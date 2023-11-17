import Image from 'next/image'
import ProgressBar from './components/ProgressBar'

export const metadata = {
  title: {
    template: '%s Bruh',
    default: 'Bruh',
  },
}

export default function Home() {
  return (
    <main className="flex justify-center">
      <div>
        <h1 className="pt-6 pb-4 font-bold text-3xl text-center">IT-guru.cz robot skills</h1>
        <ProgressBar percentage={20}>Logical thinking</ProgressBar>
        <ProgressBar percentage={20}>Logical thinking</ProgressBar>
        <ProgressBar percentage={20}>Logical thinking</ProgressBar>
        <ProgressBar percentage={20}>Logical thinking</ProgressBar>
      </div>
    </main>
  )
}
