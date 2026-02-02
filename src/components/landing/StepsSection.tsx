import { CalendarCheck, Stethoscope, HeartHandshake } from "lucide-react";

interface StepsSectionProps {
  especialidade: string;
}

export function StepsSection({ especialidade }: StepsSectionProps) {
  const steps = [
    {
      numero: "01",
      titulo: "Agendamento",
      descricao:
        "Entre em contato pelo WhatsApp ou telefone. Nossa equipe encontrará o melhor horário para você, com confirmação imediata.",
      icon: CalendarCheck,
    },
    {
      numero: "02",
      titulo: "Avaliação Completa",
      descricao:
        "Consulta detalhada com exames de alta tecnologia para diagnóstico preciso. Discutimos todas as opções de tratamento com transparência.",
      icon: Stethoscope,
    },
    {
      numero: "03",
      titulo: "Tratamento Personalizado",
      descricao:
        "Plano de tratamento sob medida, com acompanhamento contínuo e suporte dedicado em cada etapa da sua jornada visual.",
      icon: HeartHandshake,
    },
  ];

  return (
    <section id="atendimento" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-accent font-semibold mb-3 tracking-wide uppercase text-sm">
              Processo
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-medical-heading mb-5">
              Como Funciona
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Um processo simples e acolhedor, pensado para proporcionar a melhor experiência em cada etapa.
            </p>
          </div>

          {/* Steps */}
          <div className="relative">
            {/* Connection Line (desktop) */}
            <div className="hidden lg:block absolute top-24 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-0.5 bg-gradient-to-r from-primary/20 via-accent/40 to-primary/20" />

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div
                    key={index}
                    className="relative text-center group"
                  >
                    {/* Number Badge */}
                    <div className="relative z-10 mx-auto mb-8">
                      <div className="w-24 h-24 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto shadow-premium group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-gold border-4 border-background rounded-full flex items-center justify-center text-sm font-bold text-white shadow-lg">
                        {step.numero}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-medical-heading mb-4">
                      {step.titulo}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.descricao}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
