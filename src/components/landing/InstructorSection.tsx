import { Badge } from "@/components/ui/badge";
import { Youtube, Users, Award, CheckCircle2, Sparkles } from "lucide-react";


const credentials = [
  "Parceiro interno do YouTube",
  "Mais de 1.4 milhões de inscritos",
  "Milhares de alunos transformados",
  "Método testado e validado por mais de uma década",
];

const InstructorSection = () => {
  return (
    <section id="instrutor" className="py-20 md:py-32 bg-foreground relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      </div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative flex justify-center lg:justify-start">
            {/* Glow effect */}
            <div className="absolute inset-0 flex items-center justify-center lg:justify-start">
              <div className="w-80 h-80 bg-primary/20 rounded-full blur-[80px]" />
            </div>
            
            <div className="relative">
              {/* Main image container */}
              <div className="w-72 h-80 md:w-96 md:h-[420px] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/placas.png"
                  alt="Caique Pereira - Fundador da Escola para YouTubers" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating badge - top right - Dark background for contrast */}
              <div className="absolute -top-4 -right-4 md:top-6 md:-right-6">
                <div className="bg-foreground/95 backdrop-blur-sm border border-white/20 rounded-2xl p-4 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-xl text-primary-foreground">1.4M+</p>
                      <p className="text-xs text-muted-foreground">Inscritos</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating badge - bottom left - Dark background for contrast */}
              <div className="absolute -bottom-4 -left-4 md:bottom-6 md:-left-6">
                <div className="bg-foreground/95 backdrop-blur-sm border border-white/20 rounded-2xl p-4 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-xl text-primary-foreground">10+ anos</p>
                      <p className="text-xs text-muted-foreground">de YouTube</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <Badge className="bg-primary/20 border border-primary/40 text-primary mb-6 px-4 py-2 text-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              Conheça o instrutor
            </Badge>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Aprenda com quem vive de YouTube
              <span className="text-primary block">há mais de 10 anos.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Caique Pereira é o fundador da Escola para YouTubers, um dos maiores 
              canais sobre criação de conteúdo no Brasil. Com mais de 1.4 milhões 
              de inscritos, ele já ajudou milhares de pessoas a transformarem seus 
              canais em negócios lucrativos.
            </p>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <ul className="space-y-4">
                {credentials.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-primary-foreground text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;
