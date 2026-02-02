import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

interface HeroProps {
  // TODO: Conectar com Med.ID
  nome: string;
  especialidade: string;
  cidadeBairro: string;
  crm: string;
  uf: string;
  bioCurta: string;
  foto: string;
  whatsapp: string;
}

export function Hero({
  nome,
  especialidade,
  cidadeBairro,
  crm,
  uf,
  bioCurta,
  foto,
  whatsapp,
}: HeroProps) {
  // TODO: Substituir por link dinâmico do WhatsApp com Med.ID
  const whatsappLink = `https://wa.me/${whatsapp}?text=Olá! Gostaria de agendar uma consulta.`;

  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-subtle">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-rose-light to-transparent opacity-60" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 animate-fade-up">
            {/* CRM Badge */}
            <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-primary rounded-full" />
              <span className="text-sm font-medium text-secondary-foreground">
                {/* TODO: Dados dinâmicos do CRM */}
                CRM/{uf} {crm}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-medical-heading leading-tight mb-6">
              Cuidado em{" "}
              <span className="text-primary">{especialidade}</span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl font-medium text-muted-foreground">
                em {cidadeBairro}
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-medical-body mb-8 max-w-lg">
              {/* TODO: Substituir por bio curta dinâmica */}
              {bioCurta}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 h-5 w-5" />
                  Agendar consulta
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-primary/30 hover:bg-primary/5"
                asChild
              >
                <a href="#sobre">Conhecer {nome.split(" ")[0]}</a>
              </Button>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-hero rounded-3xl transform rotate-3 opacity-20" />
              <div className="relative w-72 h-96 md:w-80 md:h-[28rem] lg:w-96 lg:h-[32rem] rounded-3xl overflow-hidden shadow-2xl border-4 border-background">
                {/* TODO: Substituir por foto dinâmica do Med.ID */}
                <img
                  src={foto}
                  alt={`Foto de ${nome}`}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-rose-medium/30 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
