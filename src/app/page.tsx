import Image from "next/image";
import ProgressBar from "./components/ProgressBar";

export const metadata = {
  title: {
    default: "IT-guru Robot",
  },
};

export default function Home() {
  return (
    <main className="flex justify-center">
      <div>
        <h1 className="pt-6 pb-4 font-bold text-3xl text-center">
          IT-guru.cz robot skills
        </h1>
        <ProgressBar percentage={94}>Veřejný průzkum o AI</ProgressBar>
        <ProgressBar percentage={100}>Rozpoznávání značek</ProgressBar>
        <ProgressBar percentage={25}>Logické myšlení</ProgressBar>
        <ProgressBar percentage={53}>Jazykové dovednosti</ProgressBar>
      </div>
    </main>
  );
}
