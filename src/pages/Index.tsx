/**
 * MedMarketing Pro - Template de Landing Page para Médicos
 * 
 * IMPORTANTE: Esta página é um template preparado para receber dados dinâmicos
 * do sistema Med.ID. Todos os componentes recebem props que devem ser
 * substituídas pelos dados reais do médico cadastrado.
 * 
 * TODO: Integrar com Med.ID para dados dinâmicos
 * 
 * Paletas de cores sugeridas (definidas em index.css):
 * 
 * 1. Rosa/Vermelho Médico (atual):
 *    --primary: 350 65% 45%  (Rosa profundo)
 *    Sensação: Cuidado, acolhimento, profissionalismo
 * 
 * 2. Alternativa Bordô Elegante:
 *    --primary: 350 70% 35%  (Bordô escuro)
 *    Sensação: Sofisticação, tradição, confiança
 * 
 * 3. Alternativa Coral Suave:
 *    --primary: 12 65% 55%   (Coral)
 *    Sensação: Moderno, acessível, caloroso
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

// Importa a imagem placeholder gerada
import doctorPlaceholder from "@/assets/doctor-placeholder.jpg";

const Index = () => {
  // TODO: Substituir por dados dinâmicos do Med.ID
  // Este objeto será populado pela API do sistema
  const medico: MedicoData = {
    ...dadosPlaceholder,
    foto: doctorPlaceholder, // TODO: Substituir por foto dinâmica do médico
  };

  return (
    <div className="min-h-screen bg-background">
      {/* 
        Header fixo com navegação
        TODO: Conectar nome e whatsapp com Med.ID 
      */}
      <Header 
        nome={medico.nome} 
        whatsapp={medico.whatsapp} 
      />

      <main className="pt-16 md:pt-20">
        {/* 
          HERO SECTION
          Seção principal com foto, headline e CTA
          TODO: Todos os props devem vir do Med.ID
        */}
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

        {/* 
          SEÇÃO SOBRE
          Informações sobre o médico, experiência e formação
          TODO: bioCompleta deve vir do Med.ID (array de parágrafos)
        */}
        <AboutSection
          nome={medico.nome}
          especialidade={medico.especialidade}
          anosExperiencia={medico.anosExperiencia}
          bioCompleta={medico.bioCompleta}
        />

        {/* 
          SEÇÃO ÁREAS DE ATUAÇÃO
          Lista de serviços/especialidades do médico
          TODO: areasAtuacao deve vir do Med.ID
        */}
        <ServicesSection
          areasAtuacao={medico.areasAtuacao}
          especialidade={medico.especialidade}
        />

        {/* 
          SEÇÃO COMO FUNCIONA
          Passo a passo do atendimento
          Pode ser customizado por especialidade via Med.ID
        */}
        <StepsSection 
          especialidade={medico.especialidade} 
        />

        {/* 
          SEÇÃO FAQ
          Perguntas frequentes - devem ser específicas da especialidade
          TODO: faq deve vir do Med.ID
        */}
        <FAQSection 
          faq={medico.faq} 
          nome={medico.nome} 
        />

        {/* 
          SEÇÃO CTA FINAL
          Call-to-action de fechamento com contato
          TODO: Todos os dados de contato do Med.ID
        */}
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

      {/* 
        FOOTER
        Informações legais e redes sociais
        TODO: redesSociais deve vir do Med.ID
      */}
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
