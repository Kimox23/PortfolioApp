import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";
import abacus from "/app/assets/image/abacus.jpg";
import astrolabe from "/app/assets/image/astrolabe.jpg";

export function PreModernComputing() {
  return (
    <BentoGrid className="max-w-7xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 0 || i === 1 ? "md:col-span-3" : ""}
        />
      ))}
    </BentoGrid>
  );
}

const SecondData = () => (
  <div>
    <h3>Significance</h3>
    <p>
      The astrolabe, created by the Greeks around 150 BC and enhanced by Islamic
      scholars, is a significant instrument in astronomy and navigation. It
      marked a major advancement in understanding celestial mechanics and
      predicting the positions of stars and planets. Its role was crucial in
      navigation and maritime exploration during the Middle Ages and the
      Renaissance, significantly contributing to the Age of Discovery.
    </p>
    <h3>Application</h3>
    <p>
      The astrolabe was used to address various astronomical and navigational
      challenges. It could determine the time of day, measure the altitude of
      celestial bodies, and aid in locating stars and planets. Navigators used
      it to plot courses and navigate by the stars, making it indispensable for
      sea travel. Astronomers also utilized the astrolabe for observations and
      calculations that advanced scientific knowledge of the cosmos.
    </p>
  </div>
);
const FirstData = () => (
  <div>
    <h3>Significance</h3>
    <p>
      The abacus, one of the oldest computing tools, dates back to around 2300
      BC in ancient civilizations like Sumeria. It was pivotal in the
      development of mathematics and commerce, serving as a foundational tool
      for numerical systems and accounting. Its simplicity and practicality made
      it widely used across cultures, including in China, Greece, and Rome.
    </p>
    <h3>Application</h3>
    <p>
      The abacus, one the oldest computing tools, dates back to around 2300 BC
      in ancient civilizations like Sumeria. It was pivotal in the development
      of mathematics and commerce, serving as a foundational tool for numerical
      systems and accounting. Its simplicity and practicality made it widely
      used across cultures, including in China, Greece, and Rome.
    </p>
  </div>
);

const items = [
  {
    title: "Abacus",
    description: <FirstData />,
    header: <Image src={abacus} alt="Abacus" height={100} width={100} />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Astrolabe",
    description: <SecondData />,
    header: <Image src={astrolabe} alt="Astrolabe" height={100} width={100} />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
];
