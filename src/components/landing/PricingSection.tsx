import { Badge } from "@/components/ui/badge";
import { BadgeCheck } from "lucide-react";

const PricingSection = () => {
  return (
    <section
      id="preco"
      className="py-20 md:py-32 bg-foreground relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 
          -translate-x-1/2 -translate-y-1/2 
          w-[900px] h-[900px] 
          bg-primary/20 
          rounded-full 
          blur-[160px]" 
        />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 
        bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),
        linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] 
        bg-[size:50px_50px]" 
      />

      <div className="container px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Badge */}
          <Badge className="bg-white/10 border border-white/20 text-primary-foreground mb-6 px-6 py-3 text-base">
            <BadgeCheck className="w-5 h-5 mr-2" />
            Investimento
          </Badge>

          {/* Headline */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-12 leading-tight">
            Comece sua jornada
            <span className="text-primary block">hoje mesmo</span>
          </h2>

          {/* CTA WhatsApp */}
          <a
            href="https://wa.me/55SEUNUMEROAQUI"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-3
              bg-emerald-500
              hover:bg-emerald-400
              text-white
              text-xl
              font-bold
              px-10
              py-6
              rounded-full
              shadow-[0_0_40px_rgba(16,185,129,0.6)]
              transition-all
              hover:scale-105
            "
          >
            <span className="text-2xl text-white">📞</span>
            Falar com um consultor
          </a>

        </div>
      </div>
    </section>
  );
};

export default PricingSection;
