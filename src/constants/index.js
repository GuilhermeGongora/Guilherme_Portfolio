import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  fatec,
  fortec,
  tesla,
  shopify,
  tabnews,
  weathers,
  handlex,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre",
  },
  {
    id: "work",
    title: "Trajetoria",
  },
  {
    id: "skills",
    title: "Habilidades",
  },
  {
    id: "projects",
    title: "Projetos",
  },
  {
    id: "contact",
    title: "Contato",
  },
];

const services = [
  {
    title: "Student",
    icon: web,
  },
  {
    title: "Fullstack Developer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: backend,
  },
  {
    title: "AI Teacher",
    icon: creator,
  },
];

const prices = [
  {
    title: "Gongora Start",
    icon: creator,
    description: `✔ Aulas individuais ao vivo (1:1)
✔ Didática adaptada para iniciantes
✔ Flexibilidade total de horários
✔ Suporte via WhatsApp
✔ Ideal para quem está começando do zero

💰 R$60 por hora
Pague por aula, sem mensalidade.`,
    plan: "Start",
  },

  {
    title: "Gongora Pro",
    icon: creator,
    description: `✔ Aulas no Zoom ou Google Meet
✔ Mentoria individual com plano personalizado
✔ Suporte 24/7 via WhatsApp
✔ Foco técnico ou planejamento de carreira
✔ Recomendado para quem deseja acelerar seu desenvolvimento

💰 R$275 (pacote com 5h de aula)
Acompanhamento de verdade com metas e direcionamento.`,
    plan: "Pro",
  },

  {
    title: "Gongora Master",
    icon: creator,
    description: `✔ Foco em Inteligência Artificial, APIs e mercado
✔ Correção personalizada de projetos e códigos
✔ Preparação para entrevistas técnicas, GitHub e portfólio
✔ Suporte premium direto com mentor
✔ Aulas contínuas para profissionais em desenvolvimento

💰 R$480/mês (2h semanais)
Assinatura mensal com foco total em resultados.`,
    plan: "Mestre",
  },
];
const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Técnico em Informática",
    company_name: "Escola e Faculdade Fortec",
    icon: fortec,
    iconBg: "#FFFFFF",
    date: "Fevereiro 2022 - Dezembro 2024",
    points: [
      "Desenvolvi aplicações reais e funcionais ao longo do curso, aplicando conceitos práticos em projetos relevantes.",
      "Dominei técnicas de código limpo, boas práticas de programação, algoritmos, fundamentos matemáticos, estrutura de dados, sistemas operacionais, arquitetura de hardware e programação orientada a objetos.",
      "Aprofundei meus conhecimentos em diversas linguagens de programação, incluindo: HTML, CSS, JavaScript, Xamarin, C, C++, C#, PHP, Python, SQL e Java.",
      "Fortaleci competências técnicas (hard skills) e interpessoais (soft skills), o que me capacitou para os desafios do mercado de trabalho, tornando-me um profissional mais resiliente, estratégico e com postura de maior senioridade.",
    ],
  },
  {
    title: "Curso Superior em Análise e Desenvolvimento de Sistemas.",
    company_name: "Fatec Praia Grande",
    icon: fatec,
    iconBg: "#FFFFFF",
    date: "Fevereiro 2025 - Feb 2027",
    points: [
      "Possuo sólida base nos conteúdos já abordados na graduação e, com esse conhecimento, tenho me dedicado ao máximo em todas as disciplinas, colaborando ativamente com meus colegas de classe.",
      "Tenho me aprofundado continuamente em áreas como desenvolvimento web, algoritmos, arquitetura de computadores, matemática e fundamentos de administração.",
      "A faculdade tem proporcionado uma formação abrangente, tanto em hard skills quanto em soft skills, permitindo um desenvolvimento intelectual mais acelerado e eficaz, graças a um ambiente acadêmico enriquecedor e estimulante.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "After Gui optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "After Gui optimized our website, our traffic increased by 50%. We can't thank them enough! ",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Gui optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Clone-TabNews",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Docker",
        color: "pink-text-gradient",
      },
      {
        name: "CI",
        color: "blue-text-gradient",
      },
      {
        name: "Jest",
        color: "green-text-gradient",
      },
    ],
    image: tabnews,
    source_code_link: "https://github.com/GuilhermeGongora/clone-tabnews",
  },
  {
    name: "WeatheRS",
    description:
      "O WeatheRS é um aplicativo meteorológico que foi idealizado para ajudar as vítimas de enchentes no Rio Grande do Sul (RS). O app combina previsões climáticas de alta qualidade, notícias ambientais, informações de locais de doação e suporte, auxiliando na mobilização de ajuda e tomada de decisões nas situações de emergência.",
    tags: [
      {
        name: "Xamarin",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Mobile",
        color: "pink-text-gradient",
      },
      {
        name: "C#",
        color: "green-text-gradient",
      },
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
    ],
    image: weathers,
    source_code_link: "https://github.com/GuilhermeGongora/WeatheRS",
  },
  {
    name: "HandleX",
    description:
      "Solução back-end que visa facilitar o acesso de alunos às matérias ministradas em classe, e visando na acessibilidade, a interface do aplicativo conecta a solução com páginas web, que possuem a API VLibras, que traduz os conteúdos digitais para libras, facilitando e integrando o aluno de forma mais eficiente no ambiente educacional.",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
    ],
    image: handlex,
    source_code_link: "https://github.com/GuilhermeGongora/HandleX",
  },
];

export { services, technologies, experiences, testimonials, projects, prices };
