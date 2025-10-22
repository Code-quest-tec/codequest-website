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
    const isLeftSwipe = distance > 30; // Reduzido de 50 para 30 para ser mais sensível
    const isRightSwipe = distance < -30; // Reduzido de 50 para 30 para ser mais sensível

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

      {/* Mobile: Manual Navigation */}
      <div className="md:hidden relative px-6 sm:px-8 max-h-[85vh] overflow-y-auto">
        {/* Dica de swipe */}
        <div className="text-center mb-4">
          <p className="text-xs text-muted-foreground">
            ← Arraste para navegar entre os planos →
          </p>
        </div>
        
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
          className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 h-7 w-7 rounded-full bg-white/90 backdrop-blur-sm border-primary/70 hover:border-primary hover:bg-white shadow-lg z-10"
          size="icon"
        >
          <ArrowLeft className="h-3 w-3 text-gray-700" />
        </Button>
        
        <Button
          onClick={goToNext}
          className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 h-7 w-7 rounded-full bg-white/90 backdrop-blur-sm border-primary/70 hover:border-primary hover:bg-white shadow-lg z-10"
          size="icon"
        >
          <ArrowRight className="h-3 w-3 text-gray-700" />
        </Button>

        {/* Indicadores de posição */}
        <div className="flex justify-center mt-4 gap-2">
          {plans.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentCardIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentCardIndex 
                  ? 'bg-primary w-6' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlansCards;
