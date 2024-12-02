"use client";

import React, { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoPlay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const HighlightCard: React.FC<{
  title: string;
  description: string;
  imageUrl: string;
}> = ({ title, description, imageUrl }) => (
  <div className="relative w-full">
    <div className="aspect-[16/9] relative">
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover rounded-lg"
      />
    </div>
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
      <h3 className="text-2xl font-semibold mb-2 text-white">{title}</h3>
      <p className="hidden md:block text-white/80">{description}</p>
    </div>
  </div>
);

export default function HighlightsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [AutoPlay()]);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const highlights = [
    {
      title: "Hackathon",
      description:
        "Our flagship 48-hour coding event where students build innovative projects.",
      imageUrl: "/placeholder.svg?height=720&width=1280",
    },
    {
      title: "Tech Talk",
      description:
        "Monthly sessions featuring industry experts sharing insights on cutting-edge technologies.",
      imageUrl: "/placeholder.svg?height=720&width=1280",
    },
    {
      title: "Open Source Contributions",
      description:
        "Collaborative efforts to contribute to major open source projects in the tech community.",
      imageUrl: "/placeholder.svg?height=720&width=1280",
    },
    {
      title: "AI Workshop",
      description:
        "Hands-on workshop exploring the latest in artificial intelligence and machine learning.",
      imageUrl: "/placeholder.svg?height=720&width=1280",
    },
    {
      title: "Coding Competitions",
      description:
        "Regular coding challenges to sharpen problem-solving skills and algorithmic thinking.",
      imageUrl: "/placeholder.svg?height=720&width=1280",
    },
  ];

  return (
    <section id="highlights" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Univac Highlights
        </h2>
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {highlights.map((highlight, index) => (
                <div className="flex-[0_0_100%]" key={index}>
                  <HighlightCard {...highlight} />
                </div>
              ))}
            </div>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10"
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10"
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
