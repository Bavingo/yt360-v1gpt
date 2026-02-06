import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Shield, Zap, Clock, CreditCard, ArrowRight, Gift, Star, Lock, BadgeCheck } from "lucide-react";

const benefits = [
  "Acesso por 2 anos ao curso completo",
  "29 módulos em 3 fases de crescimento",
  "Grupo de alunos no WhatsApp",
  "Suporte privado no WhatsApp",
  "Certificado de conclusão",
  "Análise de canal inclusa",
  "Materiais complementares",
];

const PricingSection = () => {
  return (
    <section id="preco" className="py-20 md:py-32 bg-foreground relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px]" />
      </div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="container px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-white/10 border border-white/20 text-primary-foreground mb-6 px-6 py-3 text-base">
            <BadgeCheck className="w-5 h-5 mr-2" />
            Investimento
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Comece sua jornada
            <span className="text-primary block">hoje mesmo</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
           
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Main Card */}
          <div className="relative">
            {/* Subtle glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-white/10 via-white/20 to-white/10 rounded-3xl blur-lg" />
            
            <div className="relative bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl overflow-hidden">
              {/* Header banner */}
              <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-4 px-6">
                <div className="flex items-center justify-center gap-2">
                  <Gift className="w-5 h-5" />
                  <span className="font-semibold">Oferta especial por tempo limitado</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8 md:p-12">
                {/* Title */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">YouTuber 360 Completo</h3>
                  <div className="flex items-center justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                    <span className="text-muted-foreground ml-2 text-sm">+16.000 alunos</span>
                  </div>
                </div>

                {/* Price */}
                <div className="text-center mb-10 pb-8 border-b border-white/10">
                  <p className="text-lg text-muted-foreground line-through mb-1">De R$ 4.997,00</p>
                  <div className="flex items-baseline justify-center gap-2 mb-2">
                    <span className="text-xl text-muted-foreground">12x de</span>
                    <span className="text-6xl md:text-7xl font-bold text-primary-foreground">R$ 350</span>
                  </div>
                  <p className="text-muted-foreground">ou R$ 3.997,00 à vista</p>
                  <div className="mt-4 inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full text-sm font-semibold">
                    <CheckCircle2 className="w-4 h-4" />
                    Economia de R$ 1.000,00
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-10">
                  <p className="text-muted-foreground text-sm font-semibold mb-4 text-center">Tudo que está incluso:</p>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span className="text-primary-foreground/90">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Button 
                  size="lg" 
                  className="w-full group bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 text-primary-foreground text-xl py-8 rounded-xl shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl font-bold"
                >
                  QUERO ME INSCREVER AGORA
                  <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>

                {/* Guarantee */}
                <div className="mt-6 flex items-center justify-center gap-2 text-muted-foreground">
                  <Lock className="w-4 h-4" />
                  <span className="text-sm">Compra 100% segura • Garantia de 7 dias</span>
                </div>

                {/* Trust badges */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="grid grid-cols-4 gap-4">
                    <div className="flex flex-col items-center gap-2 text-center">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <Shield className="w-5 h-5 text-emerald-400" />
                      </div>
                      <span className="text-xs text-muted-foreground">Seguro</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 text-center">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <Zap className="w-5 h-5 text-emerald-400" />
                      </div>
                      <span className="text-xs text-muted-foreground">Imediato</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 text-center">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <Clock className="w-5 h-5 text-emerald-400" />
                      </div>
                      <span className="text-xs text-muted-foreground">7 dias</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 text-center">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <CreditCard className="w-5 h-5 text-emerald-400" />
                      </div>
                      <span className="text-xs text-muted-foreground">até 12x</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
