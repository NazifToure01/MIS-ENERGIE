"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

const Partners = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const partners = [
    { name: "Vitra", logo: "/vitra.png" },
    { name: "Mitsubishi", logo: "/Mitsubisi.png" },
    { name: "Thermor", logo: "/thermor.png" },
    { name: "Daikin", logo: "/daikin.png" },
    { name: "Atlantic", logo: "/atlantic.png" },
    { name: "Geberit", logo: "/Geberit.png" },
  ];

  // Dupliquer les partenaires pour un défilement infini
  const duplicatedPartners = [...partners, ...partners];

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 0.5; // Vitesse de défilement (pixels par frame)
    const maxScroll = scrollContainer.scrollWidth / 2; // La moitié car on a dupliqué les éléments

    const animate = () => {
      scrollAmount += scrollSpeed;
      if (scrollAmount >= maxScroll) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Arrière-plan décoratif */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* En-tête de section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Nos <span className="text-primary">Partenaires</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Nous travaillons avec les meilleures marques du marché pour vous garantir 
            des équipements de qualité et des performances optimales.
          </p>
        </div>

        {/* Conteneur de défilement */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-8 overflow-hidden scrollbar-hide py-5"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center group"
              >
                <div className="relative w-48 h-24 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1 border border-gray-100 dark:border-slate-700 overflow-hidden">
                  {/* Effet de brillance au survol */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  {/* Logo du partenaire */}
                  <div className="relative w-full h-full flex items-center justify-center p-4">
                    <Image
                      src={partner.logo}
                      alt={`Logo ${partner.name}`}
                      fill
                      className="object-contain filter group-hover:brightness-110 transition-all duration-300"
                      sizes="(max-width: 768px) 192px, 192px"
                    />
                  </div>
                  
                  {/* Nom du partenaire (optionnel, affiché au survol) */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-xs font-medium text-center truncate">
                      {partner.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient de fondu sur les bords */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-50 dark:from-slate-900 to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-50 dark:from-slate-900 to-transparent pointer-events-none z-10"></div>
        </div>

        
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Partners;

