import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FAQItem } from "./types";

interface FAQSectionProps {
  faq: FAQItem[];
  nome: string;
}

export function FAQSection({ faq, nome }: FAQSectionProps) {
  return (
    <section id="faq" className="py-24 bg-navy-light">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-accent font-semibold mb-3 tracking-wide uppercase text-sm">
              Tire suas dúvidas
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-medical-heading mb-5">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-muted-foreground">
              Respostas para as dúvidas mais comuns sobre nossos procedimentos
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="bg-white rounded-xl border border-border/50 overflow-hidden shadow-premium">
            <Accordion type="single" collapsible className="w-full">
              {faq.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-border/30"
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
            Tem outra dúvida? Entre em contato — teremos prazer em ajudar.
          </p>
        </div>
      </div>
    </section>
  );
}
