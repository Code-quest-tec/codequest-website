import { Globe, Server, Zap, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Globe,
    title: "Websites Profissionais",
    description: "Sites modernos, responsivos e otimizados para conversão. Do landing page ao e-commerce completo.",
  },
  {
    icon: Server,
    title: "Sistemas Customizados",
    description: "Desenvolvemos sistemas sob medida para automatizar e otimizar processos do seu negócio.",
  },
  {
    icon: Zap,
    title: "Performance Otimizada",
    description: "Código limpo e otimizado para garantir velocidade e eficiência em todas as plataformas.",
  },
  {
    icon: Shield,
    title: "Segurança Garantida",
    description: "Implementamos as melhores práticas de segurança para proteger seus dados e usuários.",
  },
];

const Services = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 relative">
      <div
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_80%_20%,hsl(165_50%_65%/0.05),transparent_50%)]"
        aria-hidden
      />
      <div className="container relative">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">
            Nossos Serviços
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Soluções completas em tecnologia para impulsionar seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all hover:shadow-glow group
                         max-h-[75dvh] overflow-y-auto sm:max-h-none sm:overflow-visible"
            >
              <CardHeader className="pb-4 sticky top-0 bg-card/95 backdrop-blur">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <CardTitle className="text-xl sm:text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-sm sm:text-base text-muted-foreground">
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
