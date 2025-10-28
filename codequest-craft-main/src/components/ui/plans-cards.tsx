import { Check, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Plan {
  name: string;
  price: number;
  description: string;
  features: string[];
  notIncluded: string[];
  popular: boolean;
}

interface PlansCardsProps {
  plans: Plan[];
  onPlanSelect: (plan: string, price: number) => void;
}

const PlansCards = ({ plans, onPlanSelect }: PlansCardsProps) => {

  const PlanCard = ({ plan, index }: { plan: Plan; index: number }) => (
    <div
      className={`relative p-3 sm:p-4 md:p-5 rounded-lg border-2 transition-all duration-500 bg-background/98 backdrop-blur-sm flex flex-col w-full max-w-xs mx-auto ${
        plan.popular
          ? "border-primary bg-gradient-to-br from-primary/5 to-primary/10 shadow-xl ring-2 ring-primary/20"
          : "border-border hover:border-primary/50 hover:bg-card/80"
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
            Mais Popular
          </span>
        </div>
      )}

      <div className="text-center mb-3 flex-shrink-0">
        <h3 className="text-base sm:text-lg font-bold mb-1 text-foreground">{plan.name}</h3>
        <p className="text-muted-foreground mb-2 text-xs leading-tight">{plan.description}</p>
        <div className="text-xl sm:text-2xl font-bold text-primary mb-1">
          R$ {plan.price}
          <span className="text-xs font-normal text-muted-foreground">/projeto</span>
        </div>
      </div>

      <div className="space-y-2 mb-3 flex-grow">
        <div>
          <h4 className="font-semibold text-xs text-green-600 mb-1.5 flex items-center gap-1">
            <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
            Incluído
          </h4>
          <ul className="space-y-1">
            {plan.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-start gap-2 text-xs">
                <Check className="w-3 h-3 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="leading-tight text-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {plan.notIncluded.length > 0 && (
          <div>
            <h4 className="font-semibold text-xs text-red-500 mb-1.5 flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
              Não incluído
            </h4>
            <ul className="space-y-1">
              {plan.notIncluded.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <X className="w-3 h-3 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="leading-tight">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Seção de Suporte Estendido */}
        <div className="mt-2 p-2 rounded bg-primary/5 border border-primary/10">
          <p className="text-xs text-muted-foreground text-center leading-tight">
            💡 Caso queira continuar com suporte: <span className="font-semibold text-primary">30% do valor do plano</span> será cobrado
          </p>
        </div>
      </div>

      <Button
        onClick={() => onPlanSelect(plan.name, plan.price)}
        className={`w-full h-8 text-xs font-semibold rounded-md transition-all duration-300 group relative overflow-hidden ${
          plan.popular
            ? "bg-gradient-to-r from-primary via-primary to-primary-glow hover:from-primary-glow hover:via-primary-glow hover:to-primary shadow-lg hover:shadow-xl hover:shadow-primary/25"
            : "bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary shadow-md hover:shadow-lg hover:shadow-primary/20"
        }`}
        size="sm"
      >
        <span className="relative z-10 flex items-center justify-center gap-1">
          Escolher {plan.name}
          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
      </Button>
    </div>
  );

  return (
    <div className="w-full max-w-6xl mx-auto animate-slide-in-from-right">
      {/* Desktop: Grid */}
      <div className="hidden md:grid grid-cols-3 gap-6 lg:gap-8">
        {plans.map((plan, index) => (
          <PlanCard key={index} plan={plan} index={index} />
        ))}
      </div>

      {/* Mobile: Carousel */}
      <div className="md:hidden relative px-8">
        {/* Dica de swipe */}
        <div className="text-center mb-4">
          <p className="text-xs text-muted-foreground">
            ← Arraste para navegar entre os planos →
          </p>
        </div>
        
        <Carousel 
          opts={{
            align: "center",
            loop: false,
          }}
          className="w-full"
        >
          <CarouselContent>
            {plans.map((plan, index) => (
              <CarouselItem key={index}>
                <PlanCard plan={plan} index={index} />
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="flex items-center justify-center gap-2 mt-4">
            {plans.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-gray-300"
              />
            ))}
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default PlansCards;
