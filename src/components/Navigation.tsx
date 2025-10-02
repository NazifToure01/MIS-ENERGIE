"use client";
import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const phoneNumber = "+33 7 84 65 94 09"; // Replace with actual number

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Zones", href: "#zones" },
    { label: "Devis", href: "#devis" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-foreground hover:text-primary font-medium transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Logo - Right side */}
          <div className="flex items-center gap-4 ml-auto">
            
            <Link href="/" className="flex items-center">
              <Image
                src="/logo2.png"
                alt="MIS ENERGIE 34"
                width={120}
                height={32}
                className="h-8 w-auto rounded-xl transition-all duration-300"
              />
            </Link>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex items-center gap-4 ml-8">
            <Button variant="cta" size="default" asChild>
              <a href={`tel:${phoneNumber.replace(/\s/g, '')}`} className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                {phoneNumber}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden ml-4 p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-foreground hover:text-primary font-medium transition-colors text-left px-4 py-2"
                >
                  {link.label}
                </button>
              ))}
              <div className="px-4 pt-2">
                <Button variant="cta" size="default" className="w-full" asChild>
                  <a href={`tel:${phoneNumber.replace(/\s/g, '')}`} className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4" />
                    {phoneNumber}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;