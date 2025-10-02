import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ServiceAreas from "@/components/ServiceAreas";
import Partners from "@/components/Partners";
import QuoteForm from "@/components/QuoteForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Accueil",
  description: "MIS ENERGIE 34 - Votre plombier professionnel à Montpellier. Services de plomberie, chauffage et climatisation 24h/24 dans l'Hérault. Devis gratuit.",
  keywords: "plombier Montpellier, chauffagiste Hérault, climatisation 34, dépannage urgence, installation chauffage, débouchage canalisation",
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "MIS ENERGIE 34",
    "description": "Plombier professionnel à Montpellier et dans l'Hérault. Installation, réparation, dépannage 24h/24. Chauffage, climatisation, plomberie.",
    "url": "https://mis-energie-34.fr",
    "telephone": "+33 7 84 65 94 09",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Montpellier",
      "addressRegion": "Hérault",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "43.6110",
      "longitude": "3.8767"
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "43.6110",
        "longitude": "3.8767"
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services de plomberie, chauffage et climatisation",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plomberie",
            "description": "Installation, réparation et dépannage de tous vos équipements sanitaires"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Chauffage",
            "description": "Installation et entretien de chaudières, radiateurs et systèmes de chauffage"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Climatisation",
            "description": "Installation et maintenance de climatiseurs et pompes à chaleur"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Débouchage",
            "description": "Débouchage de canalisations, WC, éviers et douches"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen">
        <Navigation />
        <Hero />
        <Services />
        <ServiceAreas />
        <Partners />
        <QuoteForm />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
