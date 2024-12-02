"use client";
import { Laptop, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import { ModeToggle } from "./ui/mode-toggle";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Laptop className="h-6 w-6" />
          <span className="font-bold text-lg">Univac</span>
        </Link>
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link
              href="#about"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              About
            </Link>
            <Link
              href="#events"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Events
            </Link>
            <Link
              href="#contact"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Contact
            </Link>
          </nav>
          <div className="hidden md:block">
            <ModeToggle />
          </div>
          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden border-t p-4">
          <Link
            href="#about"
            className="block py-2 text-sm transition-colors hover:text-foreground/80 text-foreground/60"
          >
            About
          </Link>
          <Link
            href="#events"
            className="block py-2 text-sm transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Events
          </Link>
          <Link
            href="#contact"
            className="block py-2 text-sm transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Contact
          </Link>
          <div className="pt-4">
            <ModeToggle />
          </div>
        </nav>
      )}
    </header>
  );
}
