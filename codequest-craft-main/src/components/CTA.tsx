import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5521973888196"; // Número do WhatsApp (21 97388-8196)
    const message = "Olá CodeQuest, estou atrás de presença digital para minha empresa";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(165_50%_65%/0.1),transparent_70%)]" />
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold px-4">
            Pronto para transformar sua ideia em realidade?
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground px-4">
            Entre em contato e descubra como podemos ajudar seu negócio a crescer com tecnologia de ponta.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 px-4">
            <Button variant="hero" size="lg" className="group w-full sm:w-auto" onClick={handleWhatsAppClick}>
              <Mail className="w-5 h-5" />
              Falar com especialista
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Ver casos de sucesso
            </Button>
          </div>
          
          <div className="pt-6 sm:pt-8 text-xs sm:text-sm text-muted-foreground px-4">
            <p>Resposta em até 24 horas • Orçamento sem compromisso</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
