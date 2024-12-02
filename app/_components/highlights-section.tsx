"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import Slider from "react-slick";

// You'll need to add these styles in your main CSS file or import them here
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const HighlightCard: React.FC<{
  title: string;
  description?: string;
  imageUrl: string;
}> = ({ title, description, imageUrl }) => (
  <Card className="mx-2">
    <CardContent className="p-0">
      <img
        src={imageUrl}
        alt={title}
        className="h-[450px] w-full object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        {/* <p className="text-muted-foreground">{description}</p> */}
      </div>
    </CardContent>
  </Card>
);

const PrevArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <Button
    variant="outline"
    size="icon"
    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10"
    onClick={onClick}
  >
    <ChevronLeft className="h-4 w-4" />
  </Button>
);

const NextArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <Button
    variant="outline"
    size="icon"
    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10"
    onClick={onClick}
  >
    <ChevronRight className="h-4 w-4" />
  </Button>
);

const HighlightsSection: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const highlights = [
    {
      title: "Lorem lllokoo",
      description:
        "Our flagship 48-hour coding event where students build innovative projects.",
      imageUrl:
        "https://fr.geneawiki.com/images/thumb/c/cb/Blason_St-_Denis-_du-_Sig.jpg/150px-Blason_St-_Denis-_du-_Sig.jpg",
    },
    {
      title: "Lorem lllokoo",
      description:
        "Monthly sessions featuring industry experts sharing insights on cutting-edge technologies.",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2x-p9aCoOTf-zzNPZtNLiWVSKkWz3jANB-g&s",
    },
    {
      title: "Lorem lllokoo",
      description:
        "Collaborative efforts to contribute to major open source projects in the tech community.",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrb9IBKGeQWmvjdlMexJ2BlWzJf-DsoBOoLQ&s",
    },
    {
      title: "Lorem lllokoo",
      description:
        "Hands-on workshop exploring the latest in artificial intelligence and machine learning.",
      imageUrl:
        "https://fr.geneawiki.com/images/thumb/2/29/Saint_Denis_du_Sig_Eglise.jpg/200px-Saint_Denis_du_Sig_Eglise.jpg",
    },
    {
      title: "Lorem lllokoo",
      description:
        "Regular coding challenges to sharpen problem-solving skills and algorithmic thinking.",
      imageUrl:
        "https://tenes.info/nostalgie/albums/STDENISDUSIG/saint_denis_du_sig.thumb.png",
    },
  ];

  return (
    <section id="highlights" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Univac Highlights
        </h2>
        <Slider {...settings}>
          {highlights.map((highlight, index) => (
            <HighlightCard key={index} {...highlight} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default HighlightsSection;
