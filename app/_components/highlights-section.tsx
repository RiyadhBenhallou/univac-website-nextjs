"use client";
import React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";

// You'll need to add these styles in your main CSS file or import them here
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const HighlightCard: React.FC<{
  title: string;
  description: string;
  imageUrl: string;
}> = ({ title, description, imageUrl }) => (
  <Card className="mx-2">
    <CardContent className="p-0">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-64 object-cover rounded-t-lg"
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
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
        "https://rtrsports.com/wp-content/uploads/2024/07/pexels-rezk-assaf-10795564.jpg",
    },
    {
      title: "Lorem lllokoo",
      description:
        "Monthly sessions featuring industry experts sharing insights on cutting-edge technologies.",
      imageUrl:
        "https://www.formula1.com/fom-website/2023/McLaren/GettyImages-1696512674.jpg",
    },
    {
      title: "Lorem lllokoo",
      description:
        "Collaborative efforts to contribute to major open source projects in the tech community.",
      imageUrl: "https://i.ytimg.com/vi/pb6CZysNscA/maxresdefault.jpg",
    },
    {
      title: "Lorem lllokoo",
      description:
        "Hands-on workshop exploring the latest in artificial intelligence and machine learning.",
      imageUrl:
        "https://i.eurosport.com/2016/09/08/1928257-40560641-310-310.jpg",
    },
    {
      title: "Lorem lllokoo",
      description:
        "Regular coding challenges to sharpen problem-solving skills and algorithmic thinking.",
      imageUrl:
        "https://i.pinimg.com/736x/f8/d9/8c/f8d98cff14ee35f4af3fe7e999babcbf.jpg",
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
