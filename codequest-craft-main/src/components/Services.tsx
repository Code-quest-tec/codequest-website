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
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(165_50%_65%/0.05),transparent_50%)]" />
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções completas em tecnologia para impulsionar seu negócio
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-primary/50 transition-all hover:shadow-glow group"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground">
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
