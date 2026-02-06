import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Youtube, ArrowRight, Sparkles } from "lucide-react";
const HeroSection = () => {
  const scrollToPrice = () => {
    document.getElementById("preco")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center bg-foreground overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground to-primary/30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px]" />
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Badge className="bg-primary/20 border border-primary/40 text-primary px-4 py-2 text-sm backdrop-blur-sm">
              <Youtube className="w-4 h-4 mr-2" />
              Escola para YouTubers
            </Badge>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-[1.1] tracking-tight">
            Transforme seu canal em um{" "}
            <span className="relative inline-block">
              <span className="text-primary">negócio lucrativo no YouTube</span>
              <Sparkles className="absolute -top-4 -right-6 w-6 h-6 text-primary animate-pulse" />
            </span>
            <br />
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-2xl text-muted-foreground/80 mb-12 max-w-4xl mx-auto leading-relaxed">
            O método completo para crescer, escalar e viver do seu canal
          </p>

          {/* CTA */}
          <div className="flex flex-col items-center gap-6">
            <Button size="lg" onClick={scrollToPrice} className="group bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-7 rounded-full shadow-[0_0_40px_rgba(255,0,0,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_60px_rgba(255,0,0,0.5)]">
              Quero me inscrever agora
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-muted-foreground/60 text-sm">
              Análise de canal • Grupo de alunos • Suporte via whatsapp
            </p>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all group-hover:border-primary/30">
                <p className="text-4xl md:text-5xl font-bold text-primary-foreground">+16k</p>
                <p className="text-sm text-muted-foreground mt-1">Alunos</p>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all group-hover:border-primary/30">
                <p className="text-4xl md:text-5xl font-bold text-primary-foreground">1.4mi</p>
                <p className="text-sm text-muted-foreground mt-1">inscritos</p>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all group-hover:border-primary/30">
                <p className="text-4xl md:text-5xl font-bold text-primary-foreground">+12</p>
                <p className="text-sm text-muted-foreground mt-1">Anos de Experiência</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/40 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>;
};
export default HeroSection;
