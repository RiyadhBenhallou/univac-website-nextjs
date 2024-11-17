"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

const BinaryRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = 300;

    const binary = "10";
    const fontSize = 14;
    const columns = canvas.width / fontSize;

    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    function draw() {
      if (!canvas) return;
      if (!ctx) return;
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#0f0";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = binary[Math.floor(Math.random() * binary.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    }

    const interval = setInterval(draw, 33);

    return () => clearInterval(interval);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full opacity-20"
    />
  );
};

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-32">
      <BinaryRain />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl">
            Welcome to <span className="text-blue-600">Univac</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-muted-foreground">
            Decoding the future, one bit at a time. Join us in exploring the
            endless possibilities of computer science.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button size="lg">Join Our Community</Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
