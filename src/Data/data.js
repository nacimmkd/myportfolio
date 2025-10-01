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
        answer: "I am Nacim Makedhi, a passionate developer focused on building efficient and user-friendly applications. I love creating solutions that combine performance and great user experience.",
        details : {fullName : "Nacim Makedhi", image : "/Me/me2.jpg" , dateOfBirth : new Date("2001-04-04") , address : "Paris , France"}
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
        answer: "I have worked on projects including a mobile app for Lidl to simplify product lookup and management, as well as a responsive portfolio website showcasing my skills and experiences.",
        details: [
          { 
            title: "Lidl PLU", 
            description: "A mobile application designed to simplify product lookup and management for Lidl employees.", 
            image: "path/to/image.jpg" 
          },
          { 
            title: "Portfolio Website", 
            description: "A responsive portfolio showcasing my skills, experiences, and projects.", 
            image: "path/to/image2.jpg" 
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
        text: "What are your main skills?", 
        answer: "My main skills include JavaScript/TypeScript, React/Next.js, Node.js/Express, Docker and CI/CD pipelines, and working with databases such as MySQL and MongoDB.",
        details: [
          {feild : "FrontEnd" , skills : ["Javascript" , "TypeScript" , "ReactJs" , "Zustand" , "React-Router"]},
          {feild : "BackEnd" , skills : ["java" , "Spring" , "Spring Boot"]},
          {feild : "Devops" , skills : ["docker" , "git" , "gitlabCI" , "Jenkins" , "AWS"]}
        ]
      },
      { 
        id: "S2",
        text: "Where can i find you CV ?", 
        answer: "You can Download my cv by click on the link below",
        details: {name : "Resume" ,  type : "PDF" , link : "/cv_nacim.pdf" , updatedOn : new Date("2025-08-01"), size : "3.00" } // size En MB
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
        answer: "I enjoy playing video games 🎮, reading mangas & tech books 📚, and doing sports & hiking 🏔️."
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
        answer: "You can reach me via email at your.email@example.com, on LinkedIn: https://linkedin.com/in/yourprofile, or on GitHub: https://github.com/yourusername.",
        details : {email : "nacimmakedhi@gmail.com", linkedIn : "nacim-makedhi" , phone_number : "(+33) 758 328 748" , address : "France" }
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
        answer: "Je suis Nacim Makedhi, un développeur passionné, concentré sur la création d’applications efficaces et conviviales. J’aime concevoir des solutions qui allient performance et expérience utilisateur.",
        details : {fullName : "Nacim Makedhi", image : "/Me/me2.jpg" , dateOfBirth : new Date("2001-04-04") , address : "Paris , France"}
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
        answer: "J'ai travaillé sur des projets, y compris une application mobile pour Lidl afin de simplifier la recherche et la gestion des produits, ainsi qu'un site portfolio responsive mettant en valeur mes compétences et expériences.",
        details: [
          { 
            title: "Lidl PLU", 
            description: "Une application mobile conçue pour simplifier la recherche et la gestion de produits pour les employés de Lidl.", 
            image: "path/to/image.jpg" 
          },
          { 
            title: "Site Portfolio", 
            description: "Un portfolio responsive mettant en avant mes compétences, expériences et projets.", 
            image: "path/to/image2.jpg" 
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
        text: "Quelles sont tes compétences principales ?", 
        answer: "Mes compétences principales incluent JavaScript/TypeScript, React/Next.js, Node.js/Express, Docker et CI/CD, ainsi que les bases de données comme MySQL et MongoDB.",
        details: [
          {feild : "FrontEnd" , skills : ["Javascript" , "TypeScript" , "ReactJs" , "Zustand" , "React-Router"]},
          {feild : "BackEnd" , skills : ["java" , "Spring" , "Spring Boot"]},
          {feild : "Devops" , skills : ["docker" , "git" , "gitlabCI" , "Jenkins" , "AWS"]}
        ]
      },
      { 
        id: "S2",
        text: "Ou puis-je trouver ton CV ?", 
        answer: "Vous pouvez le visualiser en cliquant le lien ci dessous",
        details: {name : "Resume" ,  type : "PDF" , link : "/cv_nacim.pdf" , updatedOn : new Date("2025-08-01") , size : "3.00" } // size En MB
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
        answer: "J’aime jouer aux jeux vidéo 🎮, lire des mangas & livres tech 📚, et faire du sport & des randonnées 🏔️."
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
        answer: "Vous pouvez me contacter par email à your.email@example.com, sur LinkedIn: https://linkedin.com/in/yourprofile, ou sur GitHub: https://github.com/yourusername.",
        details : {email : "nacimmakedhi@gmail.com", linkedIn : "nacim-makedhi" , phone_number : "(+33) 758 328 748" , address : "France" }
      }
    ]
  }
];
