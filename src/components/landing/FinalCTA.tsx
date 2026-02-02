import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, MapPin } from "lucide-react";

interface FinalCTAProps {
  // TODO: Conectar com Med.ID
  nome: string;
  especialidade: string;
  cidadeBairro: string;
  telefone: string;
  whatsapp: string;
  crm: string;
  uf: string;
}

export function FinalCTA({
  nome,
  especialidade,
  cidadeBairro,
  telefone,
  whatsapp,
  crm,
  uf,
}: FinalCTAProps) {
  // TODO: Substituir por link dinâmico do WhatsApp com Med.ID
  const whatsappLink = `https://wa.me/${whatsapp}?text=Olá! Gostaria de agendar uma consulta.`;

  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-foreground rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Cuidar de {especialidade}
            <br />
            <span className="text-primary-foreground/90">
              com atenção e clareza
            </span>
          </h2>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Estou disponível para ajudar você a cuidar da sua saúde. Entre em contato e vamos conversar sobre o seu caso.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all group"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Falar por WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <a href={`tel:${telefone.replace(/\D/g, "")}`}>
                <Phone className="mr-2 h-5 w-5" />
                {telefone}
              </a>
            </Button>
          </div>

          {/* Info Cards */}
          <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3">
              <MapPin className="w-5 h-5 text-primary-foreground/80" />
              <span className="text-primary-foreground/90 text-sm">
                {/* TODO: Cidade dinâmica */}
                {cidadeBairro}
              </span>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3">
              <div className="w-5 h-5 flex items-center justify-center">
                <span className="text-primary-foreground/80 text-xs font-bold">CRM</span>
              </div>
              <span className="text-primary-foreground/90 text-sm">
                {/* TODO: CRM dinâmico */}
                {crm} - {uf}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
