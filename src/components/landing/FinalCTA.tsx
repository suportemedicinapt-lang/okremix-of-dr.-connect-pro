import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, MapPin, Eye } from "lucide-react";

interface FinalCTAProps {
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
  const whatsappLink = `https://wa.me/${whatsapp}?text=Olá! Gostaria de agendar uma consulta.`;

  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-gold" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8 backdrop-blur-sm border border-white/20">
            <Eye className="w-10 h-10 text-white" />
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Cuide da sua visão
            <br />
            <span className="text-gold-medium">
              com quem é especialista
            </span>
          </h2>

          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-xl mx-auto">
            Agende sua consulta e descubra como a tecnologia de ponta pode transformar sua qualidade de vida visual.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              asChild
              size="lg"
              className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all group"
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
              className="text-lg px-8 py-6 bg-transparent border-white/30 text-white hover:bg-white/10"
            >
              <a href={`tel:${telefone.replace(/\D/g, "")}`}>
                <Phone className="mr-2 h-5 w-5" />
                {telefone}
              </a>
            </Button>
          </div>

          {/* Info Cards */}
          <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3 border border-white/10">
              <MapPin className="w-5 h-5 text-gold-medium" />
              <span className="text-white/90 text-sm">
                {cidadeBairro}
              </span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3 border border-white/10">
              <div className="w-5 h-5 flex items-center justify-center">
                <span className="text-gold-medium text-xs font-bold">CRM</span>
              </div>
              <span className="text-white/90 text-sm">
                {crm} - {uf}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
