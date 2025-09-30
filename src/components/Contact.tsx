"use client";
import { Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const phoneNumber = "+33 7 84 65 94 09"; // Replace with actual number
  const email = "contact@misenergie34.fr"; // Replace with actual email

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Contactez-<span className="text-primary">nous</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Une urgence ? Besoin d&apos;un renseignement ? Nous sommes là pour vous
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Téléphone</h3>
              <p className="text-muted-foreground mb-4">{phoneNumber}</p>
              <Button variant="outline" asChild className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                <a href={`tel:${phoneNumber.replace(/\s/g, '')}`}>
                  Appeler maintenant
                </a>
              </Button>
            </div>

            <div className="text-center p-6 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <p className="text-muted-foreground mb-4 break-all">{email}</p>
              <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <a href={`mailto:${email}`}>
                  Nous écrire
                </a>
              </Button>
            </div>

            <div className="text-center p-6 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Disponibilité</h3>
              <p className="text-muted-foreground mb-2">24h/24 - 7j/7</p>
              <p className="text-sm text-muted-foreground">
                Interventions d&apos;urgence et sur rendez-vous
              </p>
            </div>
          </div>

          <div className="mt-12 text-center p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Urgence Plomberie ?</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Notre équipe intervient rapidement pour tous vos problèmes de plomberie, chauffage et climatisation
            </p>
            <Button variant="cta" size="xl" asChild>
              <a href={`tel:${phoneNumber.replace(/\s/g, '')}`} className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Appel d&apos;urgence: {phoneNumber}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;