import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import CardComponent from "./components/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-3">
      <Navbar />
      <Hero />
    </main>
  );
}
