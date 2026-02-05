import { Badge } from "@/components/ui/badge";
import { Building2, CheckCircle2, Briefcase, Users, PieChart, Globe } from "lucide-react";

const modules = [
  "Plano de ação 100 mil-1 milhão",
  "Estrutura de contratação",
  "Estrutura de empresa (CNPJ)",
  "Planilha de finanças",
  "Organização no ClickUp",
  "Expanda além do YouTube",
];

const TrackPhase3Section = () => {
  return (
    <section className="py-20 md:py-32 bg-foreground relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px]" />
      </div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="container px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 mb-6 px-4 py-2 text-sm">
              <Building2 className="w-4 h-4 mr-2" />
              Fase 3
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              100 mil a 1 milhão
              <span className="text-purple-400 block">inscritos</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Transforme seu canal em um verdadeiro negócio. Aprenda a estruturar 
              sua empresa, contratar equipe e expandir para além do YouTube.
            </p>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <p className="text-sm text-muted-foreground mb-4 font-medium">
                {modules.length} módulos inclusos:
              </p>
              <ul className="grid sm:grid-cols-2 gap-3">
                {modules.map((module, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-primary-foreground/80">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
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
              <div className="w-80 h-80 bg-purple-500/20 rounded-full blur-[80px] animate-pulse" />
            </div>
            
            {/* Main icon container */}
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-purple-500/30 to-purple-500/5 border border-purple-500/30 flex items-center justify-center backdrop-blur-sm">
                <div className="w-48 h-48 md:w-60 md:h-60 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-[0_0_60px_rgba(168,85,247,0.4)]">
                  <Building2 className="w-24 h-24 md:w-32 md:h-32 text-white" />
                </div>
              </div>
              
              {/* Floating mini icons */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center animate-bounce">
                <Briefcase className="w-8 h-8 text-purple-400" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center animate-bounce delay-100">
                <Users className="w-8 h-8 text-purple-400" />
              </div>
              <div className="absolute top-1/2 -right-8 w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center animate-bounce delay-200">
                <PieChart className="w-6 h-6 text-purple-400" />
              </div>
              <div className="absolute top-1/2 -left-8 w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center animate-bounce delay-300">
                <Globe className="w-6 h-6 text-purple-400" />
              </div>
              
          
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackPhase3Section;
