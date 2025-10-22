import { Check, X, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

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
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentCardIndex((prev) => (prev + 1) % plans.length);
  };

  const goToPrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentCardIndex((prev) => (prev - 1 + plans.length) % plans.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  const PlanCard = ({ plan, index }: { plan: Plan; index: number }) => (
    <div
      className={`relative p-4 md:p-5 rounded-2xl border-2 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl bg-background/98 backdrop-blur-sm flex flex-col ${
        plan.popular
          ? "border-primary bg-gradient-to-br from-primary/5 to-primary/10 shadow-xl scale-105 ring-2 ring-primary/20"
          : "border-border hover:border-primary/50 hover:bg-card/80"
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
            Mais Popular
          </span>
        </div>
      )}

      <div className="text-center mb-4 flex-shrink-0">
        <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
        <p className="text-muted-foreground mb-3 text-sm leading-relaxed">{plan.description}</p>
        <div className="text-3xl font-bold text-primary mb-1">
          R$ {plan.price}
          <span className="text-base font-normal text-muted-foreground">/projeto</span>
        </div>
      </div>

      <div className="space-y-3 mb-4 flex-grow">
        <div>
          <h4 className="font-semibold text-xs text-green-600 mb-2 flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
            Incluído
          </h4>
          <ul className="space-y-1.5 pr-2">
            {plan.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-center gap-2 text-xs">
                <Check className="w-3 h-3 text-green-600 flex-shrink-0" />
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {plan.notIncluded.length > 0 && (
          <div>
            <h4 className="font-semibold text-xs text-red-500 mb-2 flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
              Não incluído
            </h4>
            <ul className="space-y-1.5 pr-2">
              {plan.notIncluded.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <X className="w-3 h-3 text-red-500 flex-shrink-0" />
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Seção de Suporte Estendido */}
        <div className="mt-4 p-3 rounded-md bg-primary/5 border border-primary/10">
          <p className="text-xs text-muted-foreground text-center">
            💡 Caso queira continuar com suporte: <span className="font-semibold text-primary">30% do valor do plano</span> será cobrado
          </p>
        </div>
      </div>

      <Button
        onClick={() => onPlanSelect(plan.name, plan.price)}
        className={`w-full h-12 text-sm font-semibold rounded-xl transition-all duration-300 group relative overflow-hidden ${
          plan.popular
            ? "bg-gradient-to-r from-primary via-primary to-primary-glow hover:from-primary-glow hover:via-primary-glow hover:to-primary shadow-lg hover:shadow-xl hover:shadow-primary/25"
            : "bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary shadow-md hover:shadow-lg hover:shadow-primary/20"
        }`}
        size="lg"
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          Escolher {plan.name}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
      </Button>
    </div>
  );

  return (
    <div className="w-full max-w-5xl mx-auto animate-slide-in-from-right">
      {/* Desktop: Grid */}
      <div className="hidden md:grid grid-cols-3 gap-4">
        {plans.map((plan, index) => (
          <PlanCard key={index} plan={plan} index={index} />
        ))}
      </div>

      {/* Mobile: Manual Navigation */}
      <div className="md:hidden relative px-12">
        <div 
          className="w-full overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className={`transition-transform duration-300 ease-in-out ${
              isAnimating ? 'transform translate-x-full opacity-0' : 'transform translate-x-0 opacity-100'
            }`}
          >
            <PlanCard plan={plans[currentCardIndex]} index={currentCardIndex} />
          </div>
        </div>
        
        {/* Navigation Buttons */}
        <Button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-white/90 backdrop-blur-sm border-primary/70 hover:border-primary hover:bg-white shadow-lg z-10"
          size="icon"
        >
          <ArrowLeft className="h-4 w-4 text-gray-700" />
        </Button>
        
        <Button
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-white/90 backdrop-blur-sm border-primary/70 hover:border-primary hover:bg-white shadow-lg z-10"
          size="icon"
        >
          <ArrowRight className="h-4 w-4 text-gray-700" />
        </Button>
      </div>
    </div>
  );
};

export default PlansCards;
