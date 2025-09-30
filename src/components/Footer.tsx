import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground/5 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <Image src={"/logorb.png"} alt="MIS ENERGIE 34" width={200} height={80} className="h-20 w-auto mb-4" />
            <p className="text-sm text-muted-foreground">
              Votre expert en plomberie, chauffage et climatisation à Montpellier et dans tout l&apos;Hérault
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Nos Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Plomberie générale</li>
              <li>Installation chauffage</li>
              <li>Climatisation</li>
              <li>Débouchage canalisations</li>
              <li>Dépannage d&apos;urgence</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Zone d&apos;intervention</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Montpellier, Nîmes, Sète, Lunel, Agde et toutes les communes de l&apos;Hérault (34)
            </p>
            <p className="text-sm font-semibold text-secondary">
              Disponible 24h/24 - 7j/7
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} MIS ENERGIE 34. Tous droits réservés.</p>
          <p className="mt-2">
            Plombier Montpellier | Chauffagiste Hérault | Climatisation 34 | Débouchage Urgence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;