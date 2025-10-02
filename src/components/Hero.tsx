"use client";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  const phoneNumber = "+33 7 84 65 94 09"; // Replace with actual number

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/5 overflow-hidden pt-20">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute inset-0">
        <Image
          src="/image1.jpg"
          alt="Plombier professionnel"
          fill
          className="object-cover brightness-90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">

      <div className="flex flex-col items-center justify-center mb-10">
        <Image src="/logorb.png" alt="MIS ENERGIE 34" width={200} height={80} className="h-20 w-auto mb-4" />
        <p className="text-4xl text-primary">M.I.S ÉNERGIE 34</p>
        <p className="text-red-500 italic text-2xl">
          Le confort avant tout
        </p>
        </div>
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-200 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Plomberie, Chauffage &amp; Climatisation à{" "}
            <span className="text-primary">Montpellier</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            Intervention rapide 24h/24 et 7j/7 dans tout l&apos;Hérault
          </p>
          <div className="flex flex-col items-center gap-2 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-6 h-6 text-yellow-400 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-300 font-medium">4.9/5 sur Google</p>
              <p className="text-xs text-gray-400">Basé sur 127 avis clients</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
            <Button 
              variant="cta" 
              size="xl"
              asChild
              className="group"
            >
              <a href={`tel:${phoneNumber.replace(/\s/g, '')}`} className="flex items-center gap-2">
                <Phone className="h-5 w-5 group-hover:animate-pulse" />
                {phoneNumber}
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="xl"
              asChild
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <a href="#devis">
                Demander un devis gratuit
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 pt-8 text-sm text-gray-300 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-secondary animate-pulse"></div>
              <span className="font-semibold">Disponible 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-secondary animate-pulse"></div>
              <span className="font-semibold">Devis gratuit</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-secondary animate-pulse"></div>
              <span className="font-semibold">Intervention rapide</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;