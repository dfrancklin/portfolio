export const startYear = 2011;
export const currentYear = new Date().getFullYear();
export const whatsAppLink = "https://wa.me/5515991456918";
export const cvLink = "/Diego Francklin Martins dos Santos | CV | PT.pdf";
export const email = "dfrancklin23@gmail.com";

export const navigation = [
  { name: "Home", href: "/" },
  { name: "Experiência", href: "/experience" },
  { name: "Projetos", badge: "Em breve" },
];

export const social = [
  {
    name: "GitHub",
    icon: "mdi:github",
    href: "https://github.com/dfrancklin",
    target: "_blank",
  },
  {
    name: "LinkedIn",
    icon: "mdi:linkedin",
    href: "https://www.linkedin.com/in/diego-francklin-martins-dos-santos-599032a6/",
    target: "_blank",
  },
  {
    name: "Email",
    icon: "mdi:email-outline",
    href: `mailto:${email}`,
    target: "_blank",
  },
];

export const techList = [
  {
    position: "left-1/3 top-[4%]",
    size: 16,
    mobileSize: 12,
    color: "bg-green-700",
    icon: "mdi:vuejs",
    title: "Vue.js",
  },
  {
    position: "left-2/3 top-[4%]",
    size: 16,
    mobileSize: 12,
    color: "bg-orange-600",
    icon: "simple-icons:astro",
    title: "Astro",
  },
  {
    position: "left-2/4 top-[18%]",
    size: 24,
    mobileSize: 20,
    color: "bg-green-600",
    icon: "simple-icons:spring",
    title: "Spring Framework",
  },
  {
    position: "left-3/4 top-1/4",
    size: 24,
    mobileSize: 20,
    color: "bg-slate-800",
    icon: "fa6-brands:aws",
    title: "Amazon Web Services",
  },
  {
    position: "left-1/4 top-1/4",
    size: 24,
    mobileSize: 20,
    color: "bg-yellow-500",
    icon: "fa-brands:js",
    title: "JavaScript",
  },
  {
    position: "left-[97%] top-1/3",
    size: 16,
    mobileSize: 12,
    color: "bg-red-600",
    icon: "mdi:angular",
    title: "Angular",
  },
  {
    position: "left-[4%] top-1/3",
    size: 16,
    mobileSize: 12,
    color: "bg-sky-400",
    icon: "mdi:react",
    title: "React",
  },
  {
    position: "left-[18%] top-2/4",
    size: 24,
    mobileSize: 20,
    color: "bg-blue-700",
    icon: "cib:typescript",
    title: "TypeScript",
  },
  {
    position: "left-[83%] top-2/4",
    size: 24,
    mobileSize: 20,
    color: "bg-green-800",
    icon: "fa-brands:node",
    title: "Node.js",
  },
  {
    position: "left-2/4 top-2/4",
    size: 40,
    mobileSize: 32,
    color: "bg-red-900",
    icon: "fa-brands:java",
    title: "Java",
  },
  {
    position: "left-[4%] top-2/3",
    size: 16,
    mobileSize: 12,
    color: "bg-green-500",
    icon: "devicon-plain:mongodb-wordmark",
    title: "MongoDB",
  },
  {
    position: "left-[97%] top-2/3",
    size: 16,
    mobileSize: 12,
    color: "bg-orange-600",
    icon: "simple-icons:rabbitmq",
    title: "RabbitMQ",
  },
  {
    position: "left-1/4 top-3/4",
    size: 24,
    mobileSize: 20,
    color: "bg-orange-600",
    icon: "fa6-brands:git-alt",
    title: "GIT",
  },
  {
    position: "left-3/4 top-3/4",
    size: 24,
    mobileSize: 20,
    color: "bg-sky-600",
    icon: "cib:postgresql",
    title: "Postgres",
  },
  {
    position: "left-2/4 top-[83%]",
    size: 24,
    mobileSize: 20,
    color: "bg-stone-500",
    icon: "mdi:api",
    title: "REST API",
  },
  {
    position: "left-1/3 top-[96%]",
    size: 16,
    mobileSize: 12,
    color: "bg-blue-700",
    icon: "mdi:kubernetes",
    title: "kubernetes",
  },
  {
    position: "left-2/3 top-[96%]",
    size: 16,
    mobileSize: 12,
    color: "bg-sky-400",
    icon: "mdi:docker",
    title: "Docker",
  },
];

export const experiences = [
  {
    jobTitle: "Analista Desenvolvedor Sênior",
    company: "ILog Tecnologia",
    from: "Fev 2023",
    to: "Atualmente",
    description: `&bull; Ação direta no principal produto da empresa utilizando Java, Spring, MariaDB, JavaScript, AngularJS e React;

&bull; Referência em AngularJS na equipe;

&bull; Correção de bugs e melhorias no código;

&bull; Responsável por atualizações de segurança no front-end;

&bull; Correção de problemas de compatibilidade entre AngularJS e React no micro frontend;`,
  },
  {
    jobTitle: "Analista Desenvolvedor Sênior",
    company: "E-Safer Consultoria",
    from: "Jan 2019",
    to: "Ago 2021",
    description: `&bull; Assistência técnica para o time de desenvolvimento na definição de tecnologias e arquitetura;

&bull; Responsável por estimar atividades baseado nas necessidades de cada cliente;

&bull; Ação direta no desenvolvimento pro principal produto da empresa utilizando Java, Spring (Boot, Data, MVC, Batch, Security) e Angular;

&bull; Conhecimento em implementação de filas (RabbitMQ), PostgreSQL, MongoDB, AWS, acesso via SSH, Git, e JIRA para gerenciamento de demandas;

&bull; Participação em projetos para grandes clientes como Boa Vista SCPC, Amil and Cardif;

&bull; Ação direta no processo de migração do sistema completo para o AWS EKS Fargate;`,
  },
  {
    jobTitle: "Analista Desenvolvedor Pleno",
    company: "GFT Brazil",
    from: "Jan 2015",
    to: "Jan 2019",
    description: `Eu trabalhei em projetos para grandes empresas como o Bradesco e o B3. Nos projetos para a B3, eu trabalhei principalmente utilizando Java, PL/SQL, Shell Script e um framework Java proprietário.

E nos projetos para o Bradesco, eu trabalhei principalmente utilizando Java, JavaScript, JSF, Spring, Apache Cordova, jQuery entre outros frameworks e ferramentas.`,
  },
  {
    jobTitle: "Desenvolvedor Freelance",
    from: "Out 2013",
    to: "Dez 2014",
    description: `Eu trabalhei como desenvolvedor PHP em vários sites. 

Utilizei principalmente PHP, HTML, CSS e JavaScript como linguagens e jQuery, Bootstrap, Facebook SDK como tecnologias e frameworks, entre outros.`,
  },
  {
    jobTitle: "Desenvolvedor Júnior",
    company: "Twiser Agencia Digital",
    from: "Nov 2011",
    to: "Fev 2014",
    description: `Eu trabalhei como desenvolvedor PHP em vários sites. 

Nesta época eu trabalhei principalmente com PHP, HTML, CSS e JavaScript como linguagens e jQuery, Bootstrap, Facebook SDK como tecnologias e frameworks, entre outros.`,
  },
  {
    jobTitle: "Estágio",
    company: "OSE COC – Organização Sorocabana de Ensino",
    from: "Abr 2011",
    to: "Out 2011",
    description: `Suporte técnico para os professores e manutenção nos servidores e computadores do laboratório da escola.`,
  },
];

export const courses = [
  {
    name: "Análise e Desenvolvimento de Sistemas",
    school: "FATEC Sorocaba",
    to: "Jun 2018",
  },
  {
    name: "Técnico em Informática para Internet",
    school: "ETEC Fernando Prestes",
    to: "Dez 2011",
  },
  {
    name: "Técnico em Informática",
    school: "ETEC Fernando Prestes",
    to: "Jun 2010",
  },
];

export const skills = [
  {
    name: "Linguagens de programação",
    list: [
      {
        name: "Java",
        startYear: 2015,
        level: "Avançado",
        icon: "devicon:java",
      },
      {
        name: "JavaScript",
        startYear: 2011,
        level: "Avançado",
        icon: "devicon:javascript",
      },
      {
        name: "TypeScript",
        startYear: 2019,
        level: "Intermediário",
        icon: "devicon:typescript",
      },
      {
        name: "SQL",
        startYear: 2011,
        level: "Avançado",
        icon: "devicon:sqldeveloper",
      },
      {
        name: "HTML",
        startYear: 2011,
        level: "Avançado",
        icon: "devicon:html5",
      },
      {
        name: "CSS",
        startYear: 2011,
        level: "Avançado",
        icon: "devicon:css3",
      },
      {
        name: "SASS",
        startYear: 2019,
        level: "Intermediário",
        icon: "devicon:sass",
      },
      {
        name: "Shell Script",
        startYear: 2019,
        level: "Intermediário",
        icon: "devicon-plain:bash",
      },
    ],
  },
  {
    name: "Bancos de dados",
    list: [
      {
        name: "PostgreSQL",
        startYear: 2019,
        level: "Avançado",
        icon: "devicon:postgresql",
      },
      {
        name: "MySQL",
        startYear: 2011,
        level: "Intermediário",
        icon: "devicon:mysql",
        bg: "bg-white",
      },
      {
        name: "Oracle",
        startYear: 2015,
        level: "Intermediário",
        icon: "devicon:oracle",
        bg: "bg-white",
      },
      {
        name: "MongoDB",
        startYear: 2019,
        level: "Intermediário",
        icon: "devicon:mongodb-wordmark",
        bg: "bg-white",
      },
    ],
  },
  {
    name: "Frameworks e Bibliotecas",
    list: [
      {
        name: "Spring",
        observation:
          "Principalmente Spring Boot, Spring Data, Spring MVC, Spring Batch e Spring Security",
        startYear: 2015,
        level: "Avançado",
        icon: "devicon:spring",
      },
      {
        name: "JUnit",
        startYear: 2019,
        level: "Intermediário",
        icon: "devicon:junit-wordmark",
        bg: "bg-white",
      },
      {
        name: "Mockito",
        startYear: 2019,
        level: "Intermediário",
        icon: "pepicons-pencil:soft-drink",
      },
      {
        name: "Express.js",
        startYear: 2019,
        level: "Intermediário",
        icon: "devicon:express",
        bg: "bg-white",
      },
      {
        name: "Hibernate",
        startYear: 2015,
        level: "Avançado",
        icon: "devicon:hibernate",
      },
      {
        name: "Angular",
        startYear: 2019,
        level: "Intermediário",
        icon: "devicon:angular",
      },
      {
        name: "Vue.js",
        startYear: 2022,
        level: "Intermediário",
        icon: "devicon:vuejs",
      },
      {
        name: "Astro",
        startYear: 2022,
        level: "Intermediário",
        icon: "devicon:astro",
        bg: "bg-white",
      },
      {
        name: "Svelte e SvelteKit",
        startYear: 2022,
        level: "Intermediário",
        icon: "devicon:svelte",
      },
      {
        name: "React",
        startYear: 2023,
        level: "Intermediário",
        icon: "devicon:react",
      },
      {
        name: "BootStrap",
        startYear: 2013,
        level: "Avançado",
        icon: "devicon:bootstrap",
      },
      {
        name: "TailWind",
        startYear: 2022,
        level: "Avançado",
        icon: "devicon:tailwindcss",
      },
    ],
  },
  {
    name: "Outros",
    list: [
      {
        name: "Docker",
        startYear: 2019,
        level: "Intermediário",
        icon: "devicon:docker",
      },
      {
        name: "Kubernetes",
        startYear: 2019,
        level: "Intermediário",
        icon: "logos:kubernetes",
      },
      {
        name: "Microservices",
        startYear: 2019,
        level: "Avançado",
        icon: "carbon:microservices-1",
      },
      {
        name: "Micro-Frontends",
        startYear: 2021,
        level: "Intermediário",
        icon: "devicon:html5",
      },
      {
        name: "Serverless",
        startYear: 2019,
        level: "Intermediário",
        icon: "carbon:ibm-cloud-virtual-server-vpc",
      },
      {
        name: "REST and RESTFul",
        startYear: 2019,
        level: "Avançado",
        icon: "mdi:api",
      },
      {
        name: "GraphQL",
        startYear: 2011,
        level: "Intermediário",
        icon: "logos:graphql",
      },
      {
        name: "JWT",
        startYear: 2019,
        level: "Intermediário",
        icon: "logos:jwt-icon",
      },
      {
        name: "Amazon Web Services",
        observation:
          "Principalmente VPC, EC2, RDS, EKS, ECR, S3, ELB, API Gateway e CloudFront",
        startYear: 2019,
        level: "Intermediário",
        icon: "devicon:amazonwebservices-wordmark",
        bg: "bg-white",
      },
      {
        name: "Tomcat",
        startYear: 2011,
        level: "Intermediário",
        icon: "devicon:tomcat",
      },
      {
        name: "Node.js",
        startYear: 2019,
        level: "Avançado",
        icon: "logos:nodejs",
        bg: "bg-white",
      },
      {
        name: "RabbitMQ",
        startYear: 2019,
        level: "Avançado",
        icon: "devicon:rabbitmq",
      },
      {
        name: "UML Diagrams",
        startYear: 2015,
        level: "Intermediário",
        icon: "simple-icons:uml",
      },
      {
        name: "SCRUM",
        startYear: 2015,
        level: "Intermediário",
        icon: "iconoir:agile",
      },
      {
        name: "Kanban",
        startYear: 2015,
        level: "Intermediário",
        icon: "bi:kanban-fill",
      },
      {
        name: "Linux",
        startYear: 2019,
        level: "Avançado",
        icon: "devicon:linux",
      },
      {
        name: "Git",
        startYear: 2015,
        level: "Avançado",
        icon: "devicon:git",
      },
    ],
  },
];
