// Tipos para dados dinâmicos do médico oftalmologista

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

// Dados placeholder para Oftalmologia Premium
export const dadosPlaceholder: MedicoData = {
  nome: "Dr. Ricardo Mendes",
  crm: "98765",
  uf: "SP",
  especialidade: "Oftalmologia",
  anosExperiencia: 18,
  cidadeBairro: "São Paulo, Itaim Bibi",
  bioCurta: "Especialista em cirurgia refrativa e catarata, com tecnologia de ponta e atendimento humanizado.",
  bioCompleta: [
    "Com 18 anos de experiência em Oftalmologia, dedico minha prática à excelência no cuidado visual, combinando tecnologia avançada com atendimento personalizado para cada paciente.",
    "Formado pela Universidade de São Paulo (USP), com Fellowship em Cirurgia Refrativa nos Estados Unidos. Certificado pela American Academy of Ophthalmology e membro da Sociedade Brasileira de Oftalmologia.",
    "Minha missão é proporcionar a melhor visão possível para cada paciente, utilizando as técnicas mais modernas e equipamentos de última geração, sempre com transparência e cuidado em cada etapa do tratamento."
  ],
  telefone: "(11) 3456-7890",
  whatsapp: "5511934567890",
  foto: "",
  redesSociais: {
    instagram: "#",
    linkedin: "#",
  },
  areasAtuacao: [
    {
      titulo: "Cirurgia Refrativa",
      descricao: "LASIK, PRK e implante de lentes intraoculares para correção de miopia, hipermetropia e astigmatismo com tecnologia de última geração.",
      icone: "eye"
    },
    {
      titulo: "Cirurgia de Catarata",
      descricao: "Procedimento com lentes premium e tecnologia de femtossegundo, garantindo recuperação rápida e resultados precisos.",
      icone: "scan"
    },
    {
      titulo: "Glaucoma",
      descricao: "Diagnóstico precoce com exames especializados e tratamento personalizado para preservar sua visão a longo prazo.",
      icone: "activity"
    },
    {
      titulo: "Doenças da Retina",
      descricao: "Tratamento de degeneração macular, retinopatia diabética e outras condições com as terapias mais avançadas.",
      icone: "layers"
    },
    {
      titulo: "Exames Especializados",
      descricao: "Topografia, tomografia de córnea, OCT e mapeamento de retina com equipamentos de alta precisão.",
      icone: "microscope"
    },
    {
      titulo: "Consultas de Rotina",
      descricao: "Avaliação completa da saúde ocular, prescrição de óculos e lentes de contato, com foco na prevenção.",
      icone: "clipboard"
    }
  ],
  faq: [
    {
      pergunta: "A cirurgia refrativa é segura?",
      resposta: "Sim, a cirurgia refrativa é um dos procedimentos mais seguros da medicina. Com mais de 30 anos de histórico e milhões de procedimentos realizados mundialmente, a taxa de satisfação supera 96%. Utilizamos tecnologia de última geração para garantir precisão e segurança."
    },
    {
      pergunta: "Quanto tempo leva a recuperação da cirurgia de catarata?",
      resposta: "A maioria dos pacientes percebe melhora significativa da visão já no dia seguinte à cirurgia. A recuperação completa ocorre em 2 a 4 semanas, com retorno às atividades normais em poucos dias. O procedimento é rápido, durando cerca de 15-20 minutos por olho."
    },
    {
      pergunta: "Qual a idade ideal para correção visual a laser?",
      resposta: "Geralmente recomendamos após os 21 anos, quando o grau já está estabilizado. Avaliamos caso a caso, considerando estabilidade do grau, espessura da córnea e saúde ocular geral. Não há limite máximo de idade, desde que os exames indiquem viabilidade."
    },
    {
      pergunta: "O atendimento aceita convênio?",
      resposta: "Trabalhamos com atendimento particular, garantindo tempo e atenção adequados para cada paciente. Fornecemos toda a documentação necessária para reembolso junto ao seu plano de saúde."
    },
    {
      pergunta: "Como é a primeira consulta?",
      resposta: "A consulta inicial dura aproximadamente 1 hora, incluindo exame completo de acuidade visual, mapeamento da córnea, medição da pressão ocular e avaliação do fundo de olho. Ao final, discutimos os resultados e as melhores opções de tratamento."
    },
    {
      pergunta: "Quais formas de pagamento são aceitas?",
      resposta: "Aceitamos todas as formas de pagamento: cartões de crédito (com parcelamento), débito, PIX e transferência. Para procedimentos cirúrgicos, oferecemos condições especiais de parcelamento."
    }
  ]
};
