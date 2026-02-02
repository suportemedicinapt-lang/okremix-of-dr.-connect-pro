import { Eye, ScanEye, Activity, Layers, Microscope, ClipboardCheck } from "lucide-react";
import type { AreaAtuacao } from "./types";

interface ServicesSectionProps {
  areasAtuacao: AreaAtuacao[];
  especialidade: string;
}

// Mapeamento de ícones para oftalmologia
const iconMap: Record<string, React.ElementType> = {
  eye: Eye,
  scan: ScanEye,
  activity: Activity,
  layers: Layers,
  microscope: Microscope,
  clipboard: ClipboardCheck,
};

// Ícones padrão
const defaultIcons = [Eye, ScanEye, Activity, Layers, Microscope, ClipboardCheck];

export function ServicesSection({ areasAtuacao, especialidade }: ServicesSectionProps) {
  return (
    <section id="areas" className="py-24 bg-navy-light">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-accent font-semibold mb-3 tracking-wide uppercase text-sm">
              {especialidade}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-medical-heading mb-5">
              Especialidades
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tratamentos de ponta com tecnologia avançada para cuidar da sua visão com excelência e precisão.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areasAtuacao.map((area, index) => {
              const IconComponent = area.icone 
                ? iconMap[area.icone] || defaultIcons[index % defaultIcons.length]
                : defaultIcons[index % defaultIcons.length];

              return (
                <div
                  key={index}
                  className="group bg-white p-8 rounded-xl border border-border/50 hover:border-primary/20 hover:shadow-premium transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gradient-hero group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
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
