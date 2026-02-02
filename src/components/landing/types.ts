// TODO: Conectar com Med.ID - Tipos para dados dinâmicos do médico

export interface MedicoData {
  nome: string;
  crm: string;
  uf: string;
  especialidade: string;
  anosExperiencia: number;
  cidadeBairro: string;
  bioCurta: string;
  bioCompleta: string[];
  telefone: string;
  whatsapp: string;
  foto: string;
  redesSociais: {
    instagram?: string;
    linkedin?: string;
    facebook?: string;
  };
  areasAtuacao: AreaAtuacao[];
  faq: FAQItem[];
}

export interface AreaAtuacao {
  titulo: string;
  descricao: string;
  icone?: string;
}

export interface FAQItem {
  pergunta: string;
  resposta: string;
}

// Dados placeholder para desenvolvimento/preview
export const dadosPlaceholder: MedicoData = {
  nome: "Dra. Maria Silva",
  crm: "123456",
  uf: "SP",
  especialidade: "Cardiologia",
  anosExperiencia: 12,
  cidadeBairro: "São Paulo, Jardins",
  bioCurta: "Cuidado cardiológico com atenção individualizada e abordagem preventiva.",
  bioCompleta: [
    "Com mais de 12 anos de experiência em Cardiologia, dedico minha prática ao cuidado individualizado de cada paciente, buscando compreender não apenas os sintomas, mas também o contexto de vida de cada pessoa.",
    "Formada pela Universidade de São Paulo (USP), com residência em Cardiologia pelo Instituto do Coração (InCor). Mantenho atualização constante participando de congressos e cursos de especialização.",
    "Minha abordagem combina conhecimento técnico com escuta ativa, criando um ambiente acolhedor onde você pode se sentir à vontade para tirar dúvidas e participar ativamente do seu cuidado."
  ],
  telefone: "(11) 99999-9999",
  whatsapp: "5511999999999",
  foto: "",
  redesSociais: {
    instagram: "#",
    linkedin: "#",
  },
  areasAtuacao: [
    {
      titulo: "Avaliação Cardiológica",
      descricao: "Check-up completo do coração, incluindo histórico, exame físico e orientação sobre exames complementares quando necessário."
    },
    {
      titulo: "Acompanhamento de Hipertensão",
      descricao: "Orientação e acompanhamento para controle da pressão arterial, com foco em mudanças de estilo de vida e tratamento adequado."
    },
    {
      titulo: "Prevenção Cardiovascular",
      descricao: "Avaliação de fatores de risco e orientações personalizadas para manter a saúde do coração."
    },
    {
      titulo: "Acompanhamento Pós-Procedimentos",
      descricao: "Cuidado continuado após procedimentos cardíacos, com foco na recuperação e qualidade de vida."
    }
  ],
  faq: [
    {
      pergunta: "Como é a primeira consulta?",
      resposta: "A primeira consulta tem duração de aproximadamente 40-60 minutos. Nela, conversamos sobre seu histórico de saúde, sintomas, hábitos de vida e realizamos exame físico. Ao final, discutimos os próximos passos do seu cuidado."
    },
    {
      pergunta: "Preciso levar exames na primeira consulta?",
      resposta: "Se você tiver exames anteriores (de qualquer tipo), traga-os. Isso ajuda a entender melhor seu histórico. Se não tiver, não se preocupe — podemos solicitar os exames necessários após a avaliação."
    },
    {
      pergunta: "Qual o tempo de retorno para resultados?",
      resposta: "O prazo varia conforme o tipo de exame. Após realizá-los, agendamos uma consulta de retorno para discutir os resultados e definir o plano de cuidado."
    },
    {
      pergunta: "O atendimento é presencial ou online?",
      resposta: "Ofereço consultas presenciais no consultório. Para alguns casos de acompanhamento, a teleconsulta pode ser uma opção, sempre respeitando as normas do CFM."
    },
    {
      pergunta: "Como funciona o acompanhamento após a consulta?",
      resposta: "Dependendo do seu caso, proponho um plano de acompanhamento com retornos periódicos. Você também terá canais de comunicação para dúvidas pontuais entre as consultas."
    },
    {
      pergunta: "Atende convênio ou particular?",
      resposta: "Atendo de forma particular. No momento da consulta, forneço recibo para reembolso junto ao seu plano de saúde, caso ele ofereça essa opção."
    }
  ]
};
