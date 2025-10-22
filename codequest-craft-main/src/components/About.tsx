import { Code2, Rocket, Users } from "lucide-react";

const About = () => {
  return (
    <section className="py-24 px-4 bg-card/30">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Sobre a Code Quest
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold">
              Tecnologia que impulsiona resultados
            </h2>
            
            <p className="text-lg text-muted-foreground">
              Somos uma startup de desenvolvimento de websites e sistemas personalizados, atuando há 1 ano no mercado.
              Nossa missão é transformar desafios tecnológicos em soluções inovadoras que geram valor real
              para nossos clientes.
            </p>
            
            <p className="text-lg text-muted-foreground">
              Somos 3 fundadores, formados em Análise e Desenvolvimento de Sistemas, apaixonados por tecnologia.
              Entregamos projetos de alta qualidade que combinam design moderno, código limpo e performance excepcional.
            </p>
            
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 rounded-lg bg-card border border-border">
                <Code2 className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">1</div>
                <div className="text-sm text-muted-foreground">Ano no mercado</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-card border border-border">
                <Rocket className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">Startup</div>
                <div className="text-sm text-muted-foreground">Tecnologia</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-card border border-border">
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">3</div>
                <div className="text-sm text-muted-foreground">Fundadores (ADS)</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-card border border-border overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 rounded-full bg-primary/10 blur-3xl animate-pulse" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Code2 className="w-32 h-32 text-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
