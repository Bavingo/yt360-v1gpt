import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Target, TrendingUp, CheckCircle2, ArrowRight, Sparkles, Search, MessageCircle } from "lucide-react";

const ChannelAnalysisSection = () => {
  const scrollToPrice = () => {
    document.getElementById("preco")?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <section className="py-20 md:py-32 bg-foreground relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
      </div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="container px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="bg-primary/20 border border-primary/40 text-primary mb-6 px-6 py-3 text-base">
              <Sparkles className="w-5 h-5 mr-2" />
              Bônus Exclusivo
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Análise de Canal
              <span className="text-primary block">Personalizada</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Receba um diagnóstico completo do seu canal com recomendações 
              específicas para acelerar seu crescimento.
            </p>
          </div>

          {/* Main visual */}
          <div className="relative mb-12">
            {/* Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-primary/50 to-primary/30 rounded-3xl blur-2xl opacity-50" />
            
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Feature 1 */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all" />
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center h-full transition-all group-hover:border-primary/30 group-hover:scale-105">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(255,0,0,0.3)]">
                      <Search className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="font-bold text-xl text-primary-foreground mb-3">Diagnóstico Completo</h3>
                    <p className="text-muted-foreground">
                      Analisamos cada detalhe do seu canal: thumbnails, títulos, SEO, conteúdo e posicionamento.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all" />
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center h-full transition-all group-hover:border-primary/30 group-hover:scale-105">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(255,0,0,0.3)]">
                      <Target className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="font-bold text-xl text-primary-foreground mb-3">Plano de Ação</h3>
                    <p className="text-muted-foreground">
                      Receba um roadmap personalizado com estratégias específicas para seu nicho.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all" />
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center h-full transition-all group-hover:border-primary/30 group-hover:scale-105">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(255,0,0,0.3)]">
                      <MessageCircle className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="font-bold text-xl text-primary-foreground mb-3">Feedback Direto</h3>
                    <p className="text-muted-foreground">
                      Orientação direta de especialistas com mais de 10 anos de experiência no YouTube.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA inside */}
              <div className="mt-12 text-center">
                <p className="text-primary font-bold text-2xl md:text-3xl mb-6">
                  Isso sozinho já vale o investimento!
                </p>
                <Button 
                  size="lg" 
                  onClick={scrollToPrice} 
                  className="group bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-7 rounded-full shadow-[0_0_40px_rgba(255,0,0,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_60px_rgba(255,0,0,0.5)]"
                >
                  Quero minha análise de canal
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChannelAnalysisSection;
