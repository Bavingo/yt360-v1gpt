import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Shield } from "lucide-react";

const faqs = [
  {
    question: "Para quem é o curso YouTuber 360?",
    answer: "O curso é para qualquer pessoa que queira criar, crescer e monetizar um canal no YouTube. Seja você um iniciante que ainda não postou seu primeiro vídeo, ou um criador que já tem um canal mas quer escalar seus resultados. O método funciona para qualquer nicho.",
  },
  {
    question: "Quanto tempo de acesso eu tenho?",
    answer: "Você terá acesso por 2 anos ao curso completo. Isso significa que pode assistir quantas vezes quiser, no seu ritmo.",
  },
  {
    question: "O curso tem suporte?",
    answer: "Sim! Você terá suporte direto no WhatsApp e acesso ao grupo de alunos também, onde pode tirar dúvidas e trocar experiências com outros criadores.",
  },
  {
    question: "Funciona para qualquer nicho?",
    answer: "Absolutamente! O método YouTuber 360 é baseado em princípios universais de crescimento no YouTube. Já temos alunos de sucesso em nichos como games, culinária, finanças, educação, tecnologia, lifestyle e muitos outros.",
  },
  {
    question: "E se eu não gostar do curso?",
    answer: "Você tem 7 dias de garantia incondicional. Se por qualquer motivo você não ficar satisfeito, basta solicitar o reembolso e devolvemos 100% do seu dinheiro, sem perguntas.",
  },
  {
    question: "Como funciona o pagamento?",
    answer: "Você pode pagar à vista com desconto ou parcelar em até 12x no cartão de crédito. Também aceitamos PIX pagamento à vista. O acesso é liberado imediatamente após a confirmação do pagamento.",
  },
  {
    question: "A análise de canal está realmente inclusa?",
    answer: "Sim! Ao se inscrever, entraremos em contato com você, para pegar suas informações e link do canal para gerar uma análise personalizada do seu canal com recomendações específicas para acelerar seu crescimento. É um bônus exclusivo para nossos alunos.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 md:py-32 bg-transparent">
      <div className="container px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Perguntas Frequentes
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Tire suas <span className="text-primary">dúvidas</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Respondemos as perguntas mais comuns sobre o curso YouTuber 360.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="
  bg-gradient-to-b from-white/[0.08] to-white/[0.03]
  border border-white/10
  rounded-lg
  px-6
  data-[state=open]:border-primary/40
"

              >
                <AccordionTrigger className="text-left font-semibold text-white hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/70 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Guarantee */}
          <div className="mt-16 bg-white/5 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Garantia de 7 dias
            </h3>
            <p className="text-white/70 max-w-xl mx-auto">
              Se você não ficar 100% satisfeito com o curso, basta enviar uma mensagem no WhatsApp 
              nos primeiros 7 dias e devolvemos todo o seu dinheiro. Sem perguntas, 
              sem burocracia. O risco é zero.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
