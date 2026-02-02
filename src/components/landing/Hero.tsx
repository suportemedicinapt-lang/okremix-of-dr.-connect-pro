import { Button } from "@/components/ui/button";
import { Phone, Eye, Award } from "lucide-react";

interface HeroProps {
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
  const whatsappLink = `https://wa.me/${whatsapp}?text=Olá! Gostaria de agendar uma consulta.`;

  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-subtle overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-navy-light via-navy-light/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 animate-fade-up">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-3 bg-primary/5 border border-primary/10 px-5 py-2.5 rounded-full mb-8">
              <Eye className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary tracking-wide">
                CRM/{uf} {crm}
              </span>
              <div className="w-px h-4 bg-primary/20" />
              <Award className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">
                Especialista
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-medical-heading leading-[1.1] mb-6">
              Excelência em{" "}
              <span className="text-gradient-gold">{especialidade}</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-medium text-steel mb-6">
              {cidadeBairro}
            </p>

            {/* Subheadline */}
            <p className="text-lg text-medical-body mb-10 max-w-lg leading-relaxed">
              {bioCurta}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="text-lg px-8 py-6 bg-gradient-hero hover:opacity-90 transition-all shadow-premium"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 h-5 w-5" />
                  Agendar Consulta
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-primary/20 text-primary hover:bg-primary/5"
                asChild
              >
                <a href="#sobre">Conhecer {nome.split(" ")[1]}</a>
              </Button>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Gold accent ring */}
              <div className="absolute -inset-4 bg-gradient-gold rounded-2xl opacity-20 blur-xl" />
              
              {/* Main image container */}
              <div className="relative w-72 h-96 md:w-80 md:h-[28rem] lg:w-[380px] lg:h-[500px] rounded-2xl overflow-hidden shadow-premium border border-white/50">
                <img
                  src={foto}
                  alt={`${nome} - ${especialidade}`}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/30 via-transparent to-transparent" />
              </div>
              
              {/* Floating stats card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-premium p-4 border border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">+5.000</p>
                    <p className="text-sm text-muted-foreground">Cirurgias realizadas</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-accent rounded-full animate-float" />
              <div className="absolute top-1/2 -right-6 w-3 h-3 bg-primary/40 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
