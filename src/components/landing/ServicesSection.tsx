import { Stethoscope, HeartPulse, ShieldCheck, Activity, Pill, ClipboardCheck } from "lucide-react";
import type { AreaAtuacao } from "./types";

interface ServicesSectionProps {
  // TODO: Conectar com Med.ID
  areasAtuacao: AreaAtuacao[];
  especialidade: string;
}

// Mapeamento de ícones disponíveis
const iconMap: Record<string, React.ElementType> = {
  stethoscope: Stethoscope,
  heartPulse: HeartPulse,
  shieldCheck: ShieldCheck,
  activity: Activity,
  pill: Pill,
  clipboard: ClipboardCheck,
};

// Ícones padrão para quando não especificado
const defaultIcons = [Stethoscope, HeartPulse, ShieldCheck, Activity, Pill, ClipboardCheck];

export function ServicesSection({ areasAtuacao, especialidade }: ServicesSectionProps) {
  return (
    <section id="areas" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-medium mb-2">
              {especialidade}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-medical-heading mb-4">
              Como posso ajudar
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conheça as principais áreas em que atuo, sempre com foco em orientação clara e cuidado individualizado.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* TODO: Substituir por áreas de atuação dinâmicas do Med.ID */}
            {areasAtuacao.map((area, index) => {
              const IconComponent = area.icone 
                ? iconMap[area.icone] || defaultIcons[index % defaultIcons.length]
                : defaultIcons[index % defaultIcons.length];

              return (
                <div
                  key={index}
                  className="group bg-background p-8 rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-medical-heading mb-3">
                    {area.titulo}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {area.descricao}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
