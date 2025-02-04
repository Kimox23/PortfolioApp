import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex-flex-col">
      <Navbar />
      <Hero />
    </div>
  );
}
