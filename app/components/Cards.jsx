"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function Cards() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    (<div className="w-full h-full py-20">
      <h2
        className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Keep your Device Secure
      </h2>
      <Carousel items={cards} />
    </div>)
  );
}

const DummyContent = () => {
  return (<>
    {[...new Array(1)].map((_, index) => {
      return (
        (<div
          key={"dummy-content" + index}
          className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
          <p
            className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
              The first rule of Apple club is that you boast about Apple club.
            </span>{" "}
            Keep a journal, quickly jot down a grocery list, and take amazing
            class notes. Want to convert those notes to text? No problem.
            Langotiya jeetu ka mara hua yaar is ready to capture every
            thought.
          </p>
          <Image
            src="https://assets.aceternity.com/macbook.png"
            alt="Macbook mockup from Aceternity UI"
            height="500"
            width="500"
            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain" />
        </div>)
      );
    })}
  </>);
};

const data = [
  {
    category: "File Scanner",
    title: "Advance Malware Scanner with AI.",
    src:"https://i.postimg.cc/kM6Jkvty/matrix-5361690-1920.png",
    content: <DummyContent />,
  },
  {
    category: "URL Scanner",
    title: "Malicious Website Scanner.",
    src: "https://i.postimg.cc/g2YK0DRC/magnifying-glass-with-scan-search-concept-state-art-electronic-technology-background-167862-7155.jpg",
    content: <DummyContent />,
  },
  {
    category: "Journal",
    title: "Know more about the technology.",
    src: "https://i.postimg.cc/KcDkYyNY/Wavy-Bus-33-Single-12.jpg",
    content: <DummyContent />,
  },

];
