"use client";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function FooterSection() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Univac</h2>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="#events" className="hover:underline">
                  Events
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <address className="not-italic">
              <p>ENS</p>
              <p>Bechar</p>
              <p>Email: </p>
              <p>Phone: </p>
            </address>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Subscribe to Our Newsletter
            </h3>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-primary-foreground text-primary"
              />
              <Button type="submit" variant="secondary">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Univac. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="GitHub">
                <Github className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
