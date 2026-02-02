/**
 * Landing Page Premium para Oftalmologia
 * 
 * Design: Premium e Sofisticado
 * Cores: Azul Marinho + Cinza + Dourado
 * Especialidades: Cirurgia Refrativa, Catarata, Glaucoma, Retina
 */

import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { AboutSection } from "@/components/landing/AboutSection";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { StepsSection } from "@/components/landing/StepsSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { dadosPlaceholder, type MedicoData } from "@/components/landing/types";

// Imagem do oftalmologista
import ophthalmologistPhoto from "@/assets/ophthalmologist-doctor.jpg";

const Index = () => {
  const medico: MedicoData = {
    ...dadosPlaceholder,
    foto: ophthalmologistPhoto,
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        nome={medico.nome} 
        whatsapp={medico.whatsapp} 
      />

      <main className="pt-16 md:pt-20">
        <Hero
          nome={medico.nome}
          especialidade={medico.especialidade}
          cidadeBairro={medico.cidadeBairro}
          crm={medico.crm}
          uf={medico.uf}
          bioCurta={medico.bioCurta}
          foto={medico.foto}
          whatsapp={medico.whatsapp}
        />

        <AboutSection
          nome={medico.nome}
          especialidade={medico.especialidade}
          anosExperiencia={medico.anosExperiencia}
          bioCompleta={medico.bioCompleta}
        />

        <ServicesSection
          areasAtuacao={medico.areasAtuacao}
          especialidade={medico.especialidade}
        />

        <StepsSection 
          especialidade={medico.especialidade} 
        />

        <FAQSection 
          faq={medico.faq} 
          nome={medico.nome} 
        />

        <FinalCTA
          nome={medico.nome}
          especialidade={medico.especialidade}
          cidadeBairro={medico.cidadeBairro}
          telefone={medico.telefone}
          whatsapp={medico.whatsapp}
          crm={medico.crm}
          uf={medico.uf}
        />
      </main>

      <Footer
        nome={medico.nome}
        crm={medico.crm}
        uf={medico.uf}
        especialidade={medico.especialidade}
        redesSociais={medico.redesSociais}
      />
    </div>
  );
};

export default Index;
