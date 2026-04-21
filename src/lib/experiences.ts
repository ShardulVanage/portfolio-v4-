interface ExperienceItemProps extends React.HTMLAttributes<HTMLDivElement> {
  experienceTitle?: React.ReactNode | string;
  experienceDescription?: string[];
  experienceOrg?: {
    name?: React.ReactNode | string;
    link?: React.ReactNode | string;
    websiteDisplayName?: React.ReactNode | string;
  };
  experienceStatus?:
    | "current"
    | {
        startAt?: React.ReactNode | string;
        endAt?: React.ReactNode | string;
      };
}
export const getExperiences = function (): ExperienceItemProps[] {
  return [
    {
      experienceTitle: "Frontend Engineer  (UI, UX, performance)",
      experienceDescription: [
       "Led frontend development for AI-powered web applications, delivering intuitive, high-performance user interfaces using Next.js and TypeScript.",
      "Designed and implemented seamless user experiences for features like AI chat, content generation, and dynamic dashboards with a focus on usability and interaction design.",
      "Built and optimized scalable frontend architectures with React, Tailwind CSS, and modern design patterns, improving performance and maintainability.",
      "Collaborated closely with  teams to translate complex requirements into clean, user-centric interfaces.", 
       ],
          experienceOrg: {
        name: "Zep Research",
        link: "https://zepresearch.com",
        websiteDisplayName: "zepresearch.com",
      },
      experienceStatus: "current",
    },
    // {
    //   experienceTitle: "Software Development Intern",
    //   experienceDescription: [
    //     "Designed and managed the database schema, created tables, defined relationships between data, and implemented CRUD operations for the application's data.",
    //     "Designed and developed a custom authentication system using Supabase, enhancing security and user management capabilities.",
    //   ],
    //   experienceOrg: {
    //     name: "Build Fast with AI",
    //   },
    //   experienceStatus: {
    //     startAt: "Aug 2023",
    //     endAt: "Jan 2024",
    //   },
    // },
    {
      experienceTitle: "Web Development Intern",
      experienceDescription: [
        "Collaborated on testing and contributed to the AI-powered ZepResume platform at Zep Analytics, and created Flask templates for a Python-based chatbot.",
        "Implemented RESTful APIs for communication between the client and server.",
        "Implemented user authentication and authorization systems using Firebase, including features like user registration, login, password reset, and role-based access control.",
        "Participated in code reviews to maintain code quality and learn from more experienced developers on the team.",
      ],
      experienceOrg: {
        name: "Zep Analytics ",
        // link: "https://bharatonecare.com",
        // websiteDisplayName: "bharatonecare.com",
      },
      experienceStatus: {
        startAt: "Jan 2023 ",
        endAt: " Jul 2025 ",
      },
    },
    {
      experienceTitle: "Web Developer Intern",
      experienceDescription: [
        "Developed and maintained responsive web applications using React.js and Next.js, providing a smooth user experience.",
        "Leveraged Git for version control, ensuring seamless collaboration within development teams.",
        "Worked in an Agile development environment, participating in sprint planning, daily stand-ups, and reviewing application requirements and interface designs.",
      ],
      experienceOrg: {
        name: "Ensemble Inc",
        // link: "https://ensembleinc.com",
        // websiteDisplayName: "ensembleinc.com",
      },
      experienceStatus: {
        startAt: "Nov 2022 ",
        endAt: " Dec 2022 ",
      },
    },
    {
      experienceTitle: "Project Intern",
      experienceDescription: [
        "Automated the detection of different sentiments from textual comments and feedback.",
        "Developed a deep learning algorithm to detect different types of emotion contained in a collection of English sentences or a large paragraph.",
      ],
      experienceOrg: {
        name: "TCS iON",
        // link: "https://www.tcsion.com",
        // websiteDisplayName: "tcsion.com",
      },
      experienceStatus: {
        startAt: " Jun 2022 ",
        endAt: " Jul 2022 ",
      },
    },
    // {
    //   experienceTitle: "MERN Stack Developer",
    //   experienceDescription: [
    //     "Responsible for writing reusable, testable, and efficient code.",
    //     "Worked with ReactJS, Node.js, Express.js, and Firebase authentication.",
    //     "Translated UI/UX design wireframes into high-quality code that produced visual elements of the application.",
    //   ],
    //   experienceOrg: {
    //     name: "Docsup Private Limited",
    //     // link: "https://docsup.com",
    //     // websiteDisplayName: "docsup.com",
    //   },
    //   experienceStatus: {
    //     startAt: "Jan 2022",
    //     endAt: "Feb 2022",
    //   },
    // },
    // {
    //   experienceTitle: "Web Software Developer",
    //   experienceDescription: [
    //     "Worked on the UI/UX design enhancing user journey and creative elements.",
    //     "Assisted with writing content for the descriptive elements of the website.",
    //     "Improved existing UI of Web Applications.",
    //     "Implemented Form validation using Javascript and jQuery.",
    //   ],
    //   experienceOrg: {
    //     name: "Arca Innovation",
    //     // link: "https://arcainnovation.com",
    //     // websiteDisplayName: "arcainnovation.com",
    //   },
    //   experienceStatus: {
    //     startAt: "Mar 2021",
    //     endAt: "Apr 2021",
    //   },
    // },
  ];
};
