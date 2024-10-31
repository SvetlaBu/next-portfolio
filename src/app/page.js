import Image from "next/image";
import bg from "../../public/background/home-background.png";
import audio from "../../public/background/home-background.png
import RenderModelWitch from "@/components/RenderModelWitch";
import audio from "../../public/audio/birds39-forest-20772.mp3";
import model from "../../public/models/witch-transformed.glb";
import Witch from "@/components/models/witch";
import Navigation from "@/components/navigation";

import dynamic from "next/dynamic";
const Wizard = dynamic(() => import("@/components/models/witch"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-50"
      />

      <div className="w-full h-screen">
        <Navigation />
        <RenderModelWitch>
          <Witch />
        </RenderModelWitch>
      </div>
    </main>
  );
}
