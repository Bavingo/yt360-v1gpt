import { Button } from "@/components/ui/button";
import { Youtube, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const scrollToPrice = () => {
    document.getElementById("preco")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground py-16">
      <div className="container px-4">
        {/* Final CTA */}
        <div className="text-center mb-8 pb-8 border-b border-muted-foreground/20">
          <h2 className="text-2xl md:text-4xl font-bold text-primary-foreground mb-4">
            Pronto para transformar seu canal?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Junte-se a milhares de criadores que já estão vivendo do YouTube com o método YouTuber 360.
          </p>
          <Button 
            size="lg" 
            onClick={scrollToPrice}
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full shadow-lg shadow-primary/30 transition-all hover:scale-105"
          >
            Começar agora
          </Button>
        </div>

        {/* Footer content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <Youtube className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-primary-foreground">
              Escola para YouTubers
            </span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-muted-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary transition-colors"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-muted-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-muted-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2024 Escola para YouTubers. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
