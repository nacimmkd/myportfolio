// ================= ENGLISH =================
export const dataEN = [
  { 
    name: "Me",
    icon: "/icons/me.svg",
    job: "Junior Fullstack Dev & DevOps",
    cv_link: "/cv_nacim_en.pdf",
    user_photo : "/Me/me1.jpg", 
    greeting : "Hey, I'm Nacim 👋",
    questions: [
      { 
        id: "M1",
        text: "Who are you?", 
        answer: "I am Nacim Makedhi, a Master’s student at Université Sorbonne Paris Nord and an aspiring full-stack developer with DevOps skills. I am passionate about designing and deploying efficient, scalable, and user-friendly applications, combining strong development skills with DevOps practices to ensure performance, reliability, and a seamless user experience. Do you want to see my skills ? ",
        details : {
          fullName : "Nacim Makedhi", 
          image : "/Me/me2.jpg", 
          dateOfBirth : new Date("2001-04-04"), 
          address : "Paris, France"
        }
      }
    ]
  },

  { 
    name: "Projects",
    icon: "/icons/projects.svg",
    questions: [
      { 
        id: "P1",
        text: "What projects have you worked on?", 
        answer: "I have worked on several projects and challenges that helped me grow as a developer and explore different technologies, with a focus on solving problems, writing clean and efficient code, and building user-friendly solutions. You can find some of them above, along with demos and source code for you to explore in more detail. Do you want to hear about my skills ? ",
        details: [
          { 
            title: "Lidl PLU", 
            type: "Mobile / FrontEnd",
            image: "/images/lidlplu.png",
            link_demo : "https://lidlplu.vercel.app/",
            link_code : "https://github.com/nacimmkd/lidlplu",
          },
          { 
            title: "Extension UI", 
            type: "FrontEnd",
            image: "/images/extentionUI.png",
            link_demo : "https://browser-extension-manager-ui-xi.vercel.app/",
            link_code : "https://github.com/nacimmkd/browser-extension-manager-ui", 
          },
          { 
            title: "Card Form", 
            type: "FrontEnd",
            image: "/images/card_form.png",
            link_demo : "https://interactive-card-form-ten.vercel.app/",
            link_code : "https://github.com/nacimmkd/interactive-card-form", 
          },
          { 
            title: "Interactive Potfolio", 
            type: "FrontEnd",
            image: "/images/portfolio.png",
            link_demo : "https://myportfolio-weld-phi-82.vercel.app/",
            link_code : "https://github.com/nacimmkd/myportfolio", 
          }
        ]
      }
    ]
  },

  { 
    name: "Skills",
    icon: "/icons/skills.svg",
    questions: [
      { 
        id: "S1",
        text: "What are your skills?", 
        answer: "I mainly work with the React stack for front-end development and the Spring stack for back-end development. I also have experience with both SQL and NoSQL databases, and I integrate DevOps practices to ensure efficient deployment and reliability. You can find more details about my skills above. If you’d like to know more, feel free to contact me— I’ll be happy to answer your questions. ",
        details: [
          { field : "FrontEnd" , skills : ["JavaScript" , "TypeScript" , "ReactJs" , "Zustand" , "React-Router" , "react-hook-form"]},
          { field : "BackEnd" , skills : ["Java" , "JakartaEE" , "Spring Boot"]},
          { field : "DataBase" , skills : ["PostgreSQL"]},
          { field : "DevOps" , skills : ["Git" , "Docker" , "GitLab CI" , "Jenkins" , "AWS"]}
        ]
      },
      { 
        id: "S2",
        text: "Where can I find your CV?", 
        answer: "You can download my CV by clicking the link below.",
        details: {
          name : "Resume",  
          type : "PDF", 
          link : "/cv_nacim_en.pdf", 
          updatedOn : new Date("2025-08-01"), 
          size : "3.00" // Mb
        }
      }
    ]
  },

  { 
    name: "Fun",
    icon: "/icons/fun.svg",
    questions: [
      { 
        id: "F1",
        text: "What do you do in your free time?", 
        answer: "In my free time, I love playing video games 🎮, getting lost in books 📚, and staying active with sports or hiking 🏔️. It’s how I relax, have fun, and keep my brain and body happy."
      }
    ]
  },

  { 
    name: "Contact",
    icon: "/icons/contact.svg",
    questions: [
      { 
        id: "C1",
        text: "How can we contact you?", 
        answer: "I am currently seeking a 6-month internship. Feel free to reach out via email or LinkedIn — I would be happy to answer your questions and discuss potential opportunities",
        details : {
          email : "nacimmakedhi@gmail.com", 
          linkedIn : "nacim-makedhi", 
          github : "https://github.com/nacimmakedhi",
          phone_number : "(+33) 758 328 748", 
          address : "France" 
        }
      }
    ]
  }
];


// ================= FRENCH =================
export const dataFR = [
  { 
    name: "Moi",
    icon: "/icons/me.svg",
    job: "Junior Fullstack Dev & DevOps",
    cv_link: "/cv_nacim_fr.pdf",
    user_photo : "/Me/me1.jpg", 
    greeting : "Bonjour, je suis Nacim 👋",
    questions: [
      { 
        id: "M1",
        text: "Qui es-tu ?", 
        answer: "Je suis Nacim Makedhi, étudiant en Master à l'Université Sorbonne Paris Nord et futur développeur full-stack avec des compétences en DevOps. Je suis passionné par la conception et le déploiement d’applications efficaces, scalables et conviviales, combinant de solides compétences en développement avec des pratiques DevOps pour garantir performance, fiabilité et expérience utilisateur fluide. Voulez-vous voir mes compétences ?",
        details : {
          fullName : "Nacim Makedhi", 
          image : "/Me/me2.jpg", 
          dateOfBirth : new Date("2001-04-04"), 
          address : "Paris, France"
        }
      }
    ]
  },

  { 
    name: "Projets",
    icon: "/icons/projects.svg",
    questions: [
      { 
        id: "P1",
        text: "Sur quels projets as-tu travaillé ?", 
        answer: "J’ai travaillé sur plusieurs projets et défis qui m'ont permis de progresser en tant que développeur et d’explorer différentes technologies, en me concentrant sur la résolution de problèmes, l’écriture d’un code propre et efficace, et la création de solutions conviviales. Vous pouvez en trouver certains ci-dessus, avec les démos et le code source pour les explorer plus en détail. Voulez-vous connaître mes compétences ?",
        details: [
          { 
            title: "Lidl PLU", 
            type: "Mobile / FrontEnd",
            image: "/images/lidlplu.png",
            link_demo : "https://lidlplu.vercel.app/",
            link_code : "https://github.com/nacimmkd/lidlplu",
          },
          { 
            title: "Extension UI", 
            type: "FrontEnd",
            image: "/images/extentionUI.png",
            link_demo : "https://browser-extension-manager-ui-xi.vercel.app/",
            link_code : "https://github.com/nacimmkd/browser-extension-manager-ui", 
          },
          { 
            title: "Card Form", 
            type: "FrontEnd",
            image: "/images/card_form.png",
            link_demo : "https://interactive-card-form-ten.vercel.app/",
            link_code : "https://github.com/nacimmkd/interactive-card-form", 
          },
          { 
            title: "Interactive Portfolio", 
            type: "FrontEnd",
            image: "/images/portfolio.png",
            link_demo : "https://myportfolio-weld-phi-82.vercel.app/",
            link_code : "https://github.com/nacimmkd/myportfolio", 
          }
        ]
      }
    ]
  },

  { 
    name: "Compétences",
    icon: "/icons/skills.svg",
    questions: [
      { 
        id: "S1",
        text: "Quelles sont tes compétences ?", 
        answer: "Je travaille principalement avec le stack React pour le développement front-end et le stack Spring pour le back-end. J’ai également de l’expérience avec les bases de données SQL et NoSQL, et j’intègre des pratiques DevOps pour assurer un déploiement efficace et fiable. Vous pouvez trouver plus de détails sur mes compétences ci-dessus. Si vous voulez en savoir plus, n’hésitez pas à me contacter — je serai heureux de répondre à vos questions.",
        details: [
          { field : "FrontEnd" , skills : ["JavaScript" , "TypeScript" , "ReactJs" , "Zustand" , "React-Router" , "react-hook-form"]},
          { field : "BackEnd" , skills : ["Java" , "Spring" , "Spring Boot"]},
          { field : "DataBase" , skills : ["PostgreSQL" , "MongoDB"]},
          { field : "DevOps" , skills : ["Git" , "Docker" , "GitLab CI" , "Jenkins" , "AWS"]}
        ]
      },
      { 
        id: "S2",
        text: "Où puis-je trouver ton CV ?", 
        answer: "Vous pouvez télécharger mon CV en cliquant sur le lien ci-dessous.",
        details: {
          name : "CV",  
          type : "PDF", 
          link : "/cv_nacim_fr.pdf", 
          updatedOn : new Date("2025-08-01"), 
          size : "3.00" 
        }
      }
    ]
  },

  { 
    name: "Loisirs",
    icon: "/icons/fun.svg",
    questions: [
      { 
        id: "F1",
        text: "Que fais-tu pendant ton temps libre ?", 
        answer: "Pendant mon temps libre, j’aime jouer aux jeux vidéo 🎮, me plonger dans des livres tech et de développement personnel 📚, coder pour le plaisir 💻, et rester actif grâce au sport ou aux randonnées 🏔️. C’est ma manière de me détendre, de m’amuser et de rester motivé tout en continuant à apprendre."
      }
    ]
  },

  { 
    name: "Contact",
    icon: "/icons/contact.svg",
    questions: [
      { 
        id: "C1",
        text: "Comment peut-on te contacter ?", 
        answer: "Je suis actuellement à la recherche d’un stage de 6 mois. Vous pouvez me contacter par email ou via LinkedIn, je serai ravi de répondre à vos questions et d’échanger sur d’éventuelles opportunités.",
        details : {
          email : "nacimmakedhi@gmail.com", 
          linkedIn : "nacim-makedhi", 
          github : "https://github.com/nacimmakedhi",
          phone_number : "(+33) 758 328 748", 
          address : "France" 
        }
      }
    ]
  }
];
