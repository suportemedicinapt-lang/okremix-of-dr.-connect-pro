import { Award, GraduationCap, Heart } from "lucide-react";

interface AboutSectionProps {
  // TODO: Conectar com Med.ID
  nome: string;
  especialidade: string;
  anosExperiencia: number;
  bioCompleta: string[];
}

export function AboutSection({
  nome,
  especialidade,
  anosExperiencia,
  bioCompleta,
}: AboutSectionProps) {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-medium mb-2">
              Conheça
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-medical-heading">
              {/* TODO: Nome dinâmico */}
              Sobre {nome}
            </h2>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-card p-6 rounded-2xl border border-border/50 text-center group hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">
                {/* TODO: Anos dinâmicos */}
                {anosExperiencia}+
              </div>
              <div className="text-muted-foreground text-sm">
                Anos de experiência
              </div>
            </div>

            <div className="bg-gradient-card p-6 rounded-2xl border border-border/50 text-center group hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <GraduationCap className="w-7 h-7 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">
                {/* TODO: Especialidade dinâmica */}
                {especialidade}
              </div>
              <div className="text-muted-foreground text-sm">
                Especialidade
              </div>
            </div>

            <div className="bg-gradient-card p-6 rounded-2xl border border-border/50 text-center group hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Heart className="w-7 h-7 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">
                Individual
              </div>
              <div className="text-muted-foreground text-sm">
                Atendimento personalizado
              </div>
            </div>
          </div>

          {/* Bio Content */}
          <div className="bg-rose-light/50 rounded-3xl p-8 md:p-12">
            <div className="space-y-6 text-medical-body leading-relaxed">
              {/* TODO: Substituir por bio dinâmica do Med.ID */}
              {bioCompleta.map((paragrafo, index) => (
                <p key={index} className="text-lg">
                  {paragrafo}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
