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
      
      // Bloquear o scroll
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      
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
        "Páginas ilimitadas",
        "E-commerce completo",
        "Sistema administrativo avançado",
        "Sistema de pagamento",
        "Relatórios detalhados",
        "SEO otimizado",
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
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Transformamos ideias em
              <span className="block text-primary mt-2">soluções digitais</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Desenvolvemos websites e sistemas personalizados para levar seu negócio ao próximo nível
            </p>
          </div>
          
          <div className={`flex flex-col sm:flex-row gap-4 pt-4 transition-opacity duration-500 ${showPlans ? 'opacity-30' : 'opacity-100'}`}>
            <Button 
              variant="hero" 
              size="lg" 
              className="group" 
              onClick={() => setShowPlans(true)}
            >
              Começar projeto
            </Button>
            <Button variant="outline" size="lg">
              Ver portfólio
            </Button>
          </div>
          
          <div className={`pt-8 flex gap-8 text-sm text-muted-foreground transition-opacity duration-500 ${showPlans ? 'opacity-30' : 'opacity-100'}`}>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-primary">50+</span>
              <span>Projetos entregues</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-primary">100%</span>
              <span>Satisfação</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-primary">24/7</span>
              <span>Suporte</span>
            </div>
          </div>

          {/* Cards de Planos - sobrepostos */}
          {showPlans && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-md">
              <div className="w-full max-w-7xl px-4">
                {/* Header com animação */}
                <div className="flex items-center justify-between w-full max-w-5xl mx-auto mb-12 animate-fade-in-up">
                  <Button 
                    variant="outline" 
                    onClick={() => setShowPlans(false)}
                    className="flex items-center gap-2 bg-background/95 backdrop-blur-sm hover:bg-primary/10 border-primary/30 hover:border-primary transition-all duration-300"
                  >
                  <ArrowLeft className="w-4 h-4" /> 
                    Voltar
                  </Button>
                  
                  <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-2">
                      Escolha seu plano
                    </h2>
                    <p className="text-muted-foreground text-lg">
                      Selecione a opção ideal para sua presença digital
                    </p>
                  </div>
                  
                  <div className="w-24"></div> {/* Spacer para centralizar o título */}
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
