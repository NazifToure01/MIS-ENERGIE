import { MapPin } from "lucide-react";

const areas = [
  "Montpellier",
  "Nîmes",
  "Agde",
  "Sète",
  "Lunel",
  "Mauguio",
  "Fabrègues",
  "Poussan",
  "Le Grau-du-Roi",
  "Florensac",
  "Montagnac",
  "Bédarieux",
  "Valras-Plage",
  "Vias Plage",
  "Marseillan Plage",
];

const ServiceAreas = () => {
  return (
    <section id="zones" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Zones d&apos;<span className="text-primary">Intervention</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            Nous intervenons dans tout l&apos;Hérault (34) et ses environs
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {areas.map((area, index) => (
              <div
                key={index}
                className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-bottom-4"
                style={{
                  animationDelay: `${400 + index * 50}ms`,
                  animationDuration: '800ms',
                  animationFillMode: 'both'
                }}
              >
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm font-medium">{area}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-1000">
            <p className="text-muted-foreground">
              Votre ville n&apos;est pas dans la liste ?{" "}
              <a href="#contact" className="text-primary font-semibold hover:underline">
                Contactez-nous
              </a>{" "}
              pour vérifier notre disponibilité
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;