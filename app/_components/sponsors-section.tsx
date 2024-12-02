import React from "react";
import Image from "next/image";

type SponsorProps = {
  name: string;
  logo: string;
};

const sponsors: SponsorProps[] = [
  { name: "TechCorp", logo: "/placeholder.svg?height=150&width=150" },
  { name: "DataSystems Inc.", logo: "/placeholder.svg?height=150&width=150" },
  { name: "AI Frontiers", logo: "/placeholder.svg?height=150&width=150" },
  { name: "CloudNet Solutions", logo: "/placeholder.svg?height=150&width=150" },
  {
    name: "Quantum Innovations",
    logo: "/placeholder.svg?height=150&width=150",
  },
  { name: "CyberShield", logo: "/placeholder.svg?height=150&width=150" },
];

export default function SponsorsAndPartnersSection() {
  return (
    <section
      id="sponsors"
      className="py-16 bg-gradient-to-b from-white to-muted"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Our Sponsors and Partners
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="flex justify-center">
              <Image
                src={sponsor.logo}
                alt={`${sponsor.name} logo`}
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
