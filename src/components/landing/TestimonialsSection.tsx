import { Badge } from "@/components/ui/badge";
import { MessageCircle, TrendingUp, Star, Sparkles } from "lucide-react";

const testimonials = [
  {
    name: "Aluno",
    highlight: "Monetizado em 21 dias",
    content: "Ok vlw msm Caique, graças a vc consegui monetizar meu canal, em 21 dias de canal monetizado já fiz mais de 300 dólares",
    result: "+$300 em 21 dias",
    icon: "💰",
  },
  {
    name: "Hirackos",
    highlight: "4.000 inscritos",
    content: "Amanhã mesmo já vai pegar as 4.000, esse curso realmente fez o que eu nem esperava do canal!",
    result: "De 0 a 4K inscritos",
    icon: "🚀",
  },
  {
    name: "Aluno",
    highlight: "21 mil inscritos",
    content: "Já são 21 mil, Caíque! E tem vídeo já com 60 mil! Não imaginava isso. Te agradeço pra caramba. Sucesso sempre, amigo!",
    result: "21K inscritos + vídeo viral",
    icon: "📈",
  },
  {
    name: "Berlini Silva",
    highlight: "Curso de vital importância",
    content: "Finalmente, Valeu! Caique, seu curso foi de vital importância para isso.",
    result: "Canal monetizado",
    icon: "✅",
  },
  {
    name: "Emanuel Fillpin",
    highlight: "+2 mil inscritos em 1 mês",
    content: "Valeuu Caique, o curso me ajudou bastante!!! Consegui mais de 2 mil inscritos em apenas um mês...",
    result: "59.915 views em 28 dias",
    icon: "🔥",
  },
  {
    name: "Adenaldo Postal",
    highlight: "400 para 40 mil",
    content: "Meu canal subiu de 400 seguidores para 40 mil (em 3 meses!) uma loucura. Minhas visualizações, taxas de cliques e retenção cresceu exponencialmente.",
    result: "100x de crescimento",
    icon: "💎",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-20 md:py-32 bg-foreground relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px]" />
      </div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-primary/20 border border-primary/40 text-primary mb-6 px-6 py-3 text-base">
            <MessageCircle className="w-5 h-5 mr-2" />
            Depoimentos Reais
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Resultados que falam
            <span className="text-primary block">por si só</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja o que alunos reais estão dizendo sobre suas transformações com o YouTuber 360.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full transition-all duration-300 group-hover:border-primary/30 group-hover:scale-[1.02]">
                {/* Icon */}
                <div className="text-4xl mb-4">{testimonial.icon}</div>
                
                {/* Highlight badge */}
                <div className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  {testimonial.highlight}
                </div>
                
                {/* Content */}
                <p className="text-primary-foreground/90 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-white font-bold text-sm">
                      {testimonial.name.charAt(0)}
                    </div>
                    <span className="text-primary-foreground font-medium">{testimonial.name}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                
                {/* Result tag */}
                <div className="mt-4 flex items-center gap-2 text-emerald-400 font-semibold">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm">{testimonial.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
            <div className="flex -space-x-2">
              {["💪", "🎬", "🎯", "🔥", "⭐"].map((emoji, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm border-2 border-foreground">
                  {emoji}
                </div>
              ))}
            </div>
            <span className="text-muted-foreground">
              <span className="text-primary-foreground font-bold">+1.000</span> alunos transformados
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
