import { Badge } from "@/components/ui/badge";
import { Rocket, CheckCircle2, Play, Lightbulb, Image, FileText } from "lucide-react";

const modules = [
  "Mindset de sucesso",
  "Definição de nicho",
  "Click Hacks",
  "Thumbnails que vendem",
  "Roteiro",
  "Edição de vídeo",
  "SEO YouTube",
  "Equipamentos",
  "Monetização inicial",
  "Estratégias de crescimento",
  "Análise de métricas",
  "Criação de marca pessoal",
  "Consistência e frequência",
  "Primeiros 1000 inscritos",
];

const TrackPhase1Section = () => {
  return (
    <section className="py-20 md:py-32 bg-foreground relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px]" />
      </div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="container px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 mb-6 px-4 py-2 text-sm">
              <Rocket className="w-4 h-4 mr-2" />
              Fase 1
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              0 a 10 mil
              <span className="text-emerald-400 block">inscritos</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Construa bases sólidas para o seu canal. Aprenda tudo que você precisa 
              para sair do zero e conquistar seus primeiros 10 mil inscritos com estratégias validadas.
            </p>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <p className="text-sm text-muted-foreground mb-4 font-medium">
                {modules.length} módulos inclusos:
              </p>
              <ul className="grid sm:grid-cols-2 gap-3">
                {modules.map((module, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-primary-foreground/80">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>{module}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Visual - Big Icon Display */}
          <div className="relative flex items-center justify-center">
            {/* Glow effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 bg-emerald-500/20 rounded-full blur-[80px] animate-pulse" />
            </div>
            
            {/* Main icon container */}
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-emerald-500/30 to-emerald-500/5 border border-emerald-500/30 flex items-center justify-center backdrop-blur-sm">
                <div className="w-48 h-48 md:w-60 md:h-60 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-[0_0_60px_rgba(16,185,129,0.4)]">
                  <Rocket className="w-24 h-24 md:w-32 md:h-32 text-white" />
                </div>
              </div>
              
              {/* Floating mini icons */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center animate-bounce">
                <Play className="w-8 h-8 text-emerald-400" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center animate-bounce delay-100">
                <Lightbulb className="w-8 h-8 text-emerald-400" />
              </div>
              <div className="absolute top-1/2 -right-8 w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center animate-bounce delay-200">
                <Image className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="absolute top-1/2 -left-8 w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center animate-bounce delay-300">
                <FileText className="w-6 h-6 text-emerald-400" />
              </div>
              
              {/* Number display */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold text-xl px-6 py-3 rounded-full shadow-lg">
                0 → 10 mil
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackPhase1Section;
