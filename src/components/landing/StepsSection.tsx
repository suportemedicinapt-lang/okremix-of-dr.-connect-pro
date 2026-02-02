import { CalendarCheck, MessageCircle, HeartHandshake } from "lucide-react";

interface StepsSectionProps {
  // TODO: Conectar com Med.ID (opcional: passos customizados por médico)
  especialidade: string;
}

export function StepsSection({ especialidade }: StepsSectionProps) {
  const steps = [
    {
      numero: "01",
      titulo: "Agendamento",
      descricao:
        "Entre em contato pelo WhatsApp ou telefone. Vamos encontrar o melhor horário para você, respeitando sua rotina.",
      icon: CalendarCheck,
    },
    {
      numero: "02",
      titulo: "Consulta e Avaliação",
      descricao:
        "Conversa detalhada sobre seu histórico e queixas, exame físico e discussão clara sobre os próximos passos do seu cuidado.",
      icon: MessageCircle,
    },
    {
      numero: "03",
      titulo: "Acompanhamento",
      descricao:
        "Plano de cuidado personalizado com retornos periódicos e canais de comunicação para dúvidas entre as consultas.",
      icon: HeartHandshake,
    },
  ];

  return (
    <section id="atendimento" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-medium mb-2">
              Processo
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-medical-heading mb-4">
              Como funciona o atendimento
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Um processo simples e acolhedor, pensado para que você se sinta confortável em cada etapa.
            </p>
          </div>

          {/* Steps */}
          <div className="relative">
            {/* Connection Line (desktop) */}
            <div className="hidden lg:block absolute top-24 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div
                    key={index}
                    className="relative text-center group"
                  >
                    {/* Number Badge */}
                    <div className="relative z-10 mx-auto mb-6">
                      <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-9 h-9 text-primary-foreground" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center text-sm font-bold text-primary">
                        {step.numero}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-medical-heading mb-3">
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
