"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const quoteSchema = z.object({
  name: z.string().trim().min(2, "Le nom doit contenir au moins 2 caractères").max(100),
  phone: z.string().trim().min(10, "Numéro de téléphone invalide").max(15),
  email: z.string().trim().email("Email invalide").max(255),
  service: z.string().min(1, "Veuillez sélectionner un service"),
  message: z.string().trim().min(10, "Le message doit contenir au moins 10 caractères").max(1000),
});

const QuoteForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      quoteSchema.parse(formData);
      
      // Form is valid
      toast({
        title: "Demande envoyée !",
        description: "Nous vous recontacterons dans les plus brefs délais.",
      });
      
      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.issues.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
      }
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }
  };

  return (
    <section id="devis" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Demandez votre <span className="text-primary">Devis Gratuit</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Remplissez ce formulaire et recevez une réponse rapide
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg shadow-lg">
            <div className="space-y-2">
              <Label htmlFor="name">Nom complet *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Votre nom"
                className={errors.name ? "border-destructive" : ""}
              />
              {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Téléphone *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder="06 XX XX XX XX"
                className={errors.phone ? "border-destructive" : ""}
              />
              {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="votre.email@exemple.com"
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="service">Service souhaité *</Label>
              <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
                <SelectTrigger className={errors.service ? "border-destructive" : ""}>
                  <SelectValue placeholder="Sélectionnez un service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="plomberie">Plomberie</SelectItem>
                  <SelectItem value="chauffage">Chauffage</SelectItem>
                  <SelectItem value="climatisation">Climatisation</SelectItem>
                  <SelectItem value="debouchage">Débouchage</SelectItem>
                  <SelectItem value="autre">Autre</SelectItem>
                </SelectContent>
              </Select>
              {errors.service && <p className="text-sm text-destructive">{errors.service}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Description de votre projet *</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                placeholder="Décrivez votre besoin..."
                rows={5}
                className={errors.message ? "border-destructive" : ""}
              />
              {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
            </div>

            <Button type="submit" variant="cta" size="lg" className="w-full">
              Envoyer ma demande
            </Button>

            <p className="text-sm text-muted-foreground text-center">
              Vos données sont protégées et utilisées uniquement pour traiter votre demande
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;