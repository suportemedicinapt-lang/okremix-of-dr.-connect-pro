import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FAQItem } from "./types";

interface FAQSectionProps {
  // TODO: Conectar com Med.ID
  faq: FAQItem[];
  nome: string;
}

export function FAQSection({ faq, nome }: FAQSectionProps) {
  return (
    <section id="faq" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-medium mb-2">
              Tire suas dúvidas
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-medical-heading mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-muted-foreground">
              Respostas para as dúvidas mais comuns sobre o atendimento
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="bg-background rounded-2xl border border-border/50 overflow-hidden">
            <Accordion type="single" collapsible className="w-full">
              {/* TODO: Substituir por FAQ dinâmico do Med.ID */}
              {faq.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-border/50"
                >
                  <AccordionTrigger className="px-6 py-5 text-left text-medical-heading hover:text-primary hover:no-underline transition-colors">
                    <span className="text-base md:text-lg font-medium pr-4">
                      {item.pergunta}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 text-muted-foreground leading-relaxed">
                    {item.resposta}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Additional Help */}
          <p className="text-center text-muted-foreground mt-8">
            Tem outra dúvida? Entre em contato — terei prazer em ajudar.
          </p>
        </div>
      </div>
    </section>
  );
}
