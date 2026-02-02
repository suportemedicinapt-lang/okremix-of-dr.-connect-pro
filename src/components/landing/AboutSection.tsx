import { Award, GraduationCap, Users } from "lucide-react";

interface AboutSectionProps {
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
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-accent font-semibold mb-3 tracking-wide uppercase text-sm">
              Conheça
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-medical-heading">
              Sobre {nome}
            </h2>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white p-8 rounded-xl border border-border/50 text-center group hover:shadow-premium transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">
                {anosExperiencia}+
              </div>
              <div className="text-muted-foreground font-medium">
                Anos de Experiência
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-border/50 text-center group hover:shadow-premium transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-gold rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-accent mb-2">
                Fellowship
              </div>
              <div className="text-muted-foreground font-medium">
                Internacional
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-border/50 text-center group hover:shadow-premium transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">
                5.000+
              </div>
              <div className="text-muted-foreground font-medium">
                Pacientes Atendidos
              </div>
            </div>
          </div>

          {/* Bio Content */}
          <div className="bg-navy-light rounded-2xl p-8 md:p-12 border border-border/30">
            <div className="space-y-6 text-medical-body leading-relaxed">
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
