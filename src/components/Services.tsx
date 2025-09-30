import { Droplet, Flame, Wind, Wrench } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const services = [
  {
    icon: Droplet,
    title: "Plomberie",
    description: "Installation, réparation et dépannage de tous vos équipements sanitaires. Fuite d'eau, robinetterie, sanitaires.",
    keywords: "plombier, installation sanitaire, réparation fuite",
    image: "/image1.jpg",
  },
  {
    icon: Flame,
    title: "Chauffage",
    description: "Installation et entretien de chaudières, radiateurs et systèmes de chauffage. Chauffagiste certifié.",
    keywords: "chauffagiste, chaudière, radiateur, entretien",
    image: "/image3.jpg",
  },
  {
    icon: Wind,
    title: "Climatisation",
    description: "Installation et maintenance de climatiseurs et pompes à chaleur. Confort toute l'année.",
    keywords: "climatisation, pompe à chaleur, installation clim",
    image: "/image4.jpg",
  },
  {
    icon: Wrench,
    title: "Débouchage",
    description: "Débouchage de canalisations, WC, éviers et douches. Intervention rapide avec matériel professionnel.",
    keywords: "débouchage, canalisation, déboucher WC",
    image: "/image5.jpg",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nos Services à <span className="text-primary">Montpellier</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une équipe d&apos;experts à votre service pour tous vos besoins en plomberie, chauffage et climatisation dans l&apos;Hérault
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border bg-card overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 w-12 h-12 rounded-lg bg-primary/90 backdrop-blur-sm flex items-center justify-center">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;