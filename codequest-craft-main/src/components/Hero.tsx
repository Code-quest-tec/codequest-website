import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import PlansCards from "@/components/ui/plans-cards";
import { useState, useEffect } from "react";

const Hero = () => {
  const [showPlans, setShowPlans] = useState(false);

  // Bloquear/desbloquear scroll quando os planos estão abertos
  useEffect(() => {
    if (showPlans) {

      // Salvar a posição atual do scroll
      const scrollY = window.scrollY;
      
      return () => {
        // Restaurar o scroll quando fechar
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [showPlans]);

  const handleWhatsAppClick = (plan: string, price: number) => {
    const phoneNumber = "5521973888196";
    const message = `Olá CodeQuest, estou interessado no plano ${plan} (R$ ${price}) para presença digital da minha empresa`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const plans = [
    {
      name: "Básico",
      price: 300,
      description: "Ideal para pequenas empresas",
      features: [
        "Website responsivo",
        "Design personalizado",
        "Website completo",
        "Integração redes sociais",
        "Formulário de contato",
        "Suporte 30 dias"
      ],
      notIncluded: [
        "E-commerce",
        "Sistema administrativo"
      ],
      popular: false
    },
    {
      name: "Profissional",
      price: 600,
      description: "Perfeito para empresas em crescimento",
      features: [
        "Website responsivo",
        "Website completo",
        "Design personalizado",
        "E-commerce básico",
        "Sistema administrativo",
        "Integração redes sociais",
        "Suporte 60 dias"
      ],
      notIncluded: [
        "Sistema de pagamento avançado"
      ],
      popular: true
    },
    {
      name: "Premium",
      price: 1200,
      description: "Solução completa para empresas",
      features: [
        "Website responsivo",
        "Website completo",
        "DRE",
        "Relatórios detalhados",
        "Relatórios de vendas",
        "Design personalizado",
        "E-commerce completo",
        "Sistema administrativo avançado",
        "Sistema de pagamento",
        "Relatórios detalhados",
        "Suporte 90 dias"
      ],
      notIncluded: [],
      popular: false
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(165_50%_65%/0.1),transparent_70%)]" />
      
      <div className="container relative z-10 px-4 py-20">
        <div className="flex flex-col items-center text-center space-y-12 max-w-7xl mx-auto">
          <div className="animate-fade-in">
            <Logo size="lg" />
          </div>
          
          {/* Conteúdo inicial do Hero - sempre visível */}
          <div className={`space-y-4 transition-opacity duration-500 ${showPlans ? 'opacity-30' : 'opacity-100'}`}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight px-4">
              Transformamos ideias em
              <span className="block text-primary mt-2">soluções digitais</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto px-4">
              Desenvolvemos websites e sistemas personalizados para levar seu negócio ao próximo nível
            </p>
          </div>
          
          <div className={`flex flex-col sm:flex-row gap-4 pt-4 px-4 transition-opacity duration-500 ${showPlans ? 'opacity-30' : 'opacity-100'}`}>
            <Button 
              variant="hero" 
              size="lg" 
              className="group w-full sm:w-auto" 
              onClick={() => setShowPlans(true)}
            >
              Começar projeto
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Ver portfólio
            </Button>
          </div>
          
          <div className={`pt-8 flex flex-col sm:flex-row gap-6 sm:gap-8 text-sm text-muted-foreground transition-opacity duration-500 px-4 ${showPlans ? 'opacity-30' : 'opacity-100'}`}>
            <div className="flex flex-col items-center sm:items-start">
              <span className="text-2xl sm:text-3xl font-bold text-primary">50+</span>
              <span className="text-center sm:text-left">Projetos entregues</span>
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <span className="text-2xl sm:text-3xl font-bold text-primary">100%</span>
              <span className="text-center sm:text-left">Satisfação</span>
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <span className="text-2xl sm:text-3xl font-bold text-primary">24/7</span>
              <span className="text-center sm:text-left">Suporte</span>
            </div>
          </div>

          {/* Cards de Planos - sobrepostos */}
          {showPlans && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-md p-4">
              <div className="w-full max-w-7xl">
                {/* Header com animação */}
                <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-5xl mx-auto mb-6 sm:mb-8 animate-fade-in-up gap-4">
                  <Button 
                    variant="outline" 
                    onClick={() => setShowPlans(false)}
                    className="flex items-center gap-2 bg-background/95 backdrop-blur-sm hover:bg-primary/10 border-primary/30 hover:border-primary transition-all duration-300 w-full sm:w-auto order-2 sm:order-1"
                  >
                  <ArrowLeft className="w-4 h-4" /> 
                    Voltar
                  </Button>
                  
                  <div className="text-center order-1 sm:order-2">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-2">
                      Escolha seu plano
                    </h2>
                    <p className="text-muted-foreground text-sm sm:text-base lg:text-lg">
                      Selecione a opção ideal para sua presença digital
                    </p>
                  </div>
                  
                  <div className="w-full sm:w-24 order-3"></div> {/* Spacer para centralizar o título */}
                </div>

                {/* Cards com animação melhorada */}
                <PlansCards plans={plans} onPlanSelect={handleWhatsAppClick} />
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  );
};

export default Hero;
