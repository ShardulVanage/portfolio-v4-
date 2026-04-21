export interface FreelanceProject {
  title: string;
  shortDescription: string;
  fullDescription: string;
  techStack: string[];
  link: string;
  linkDisplay: string;
  role: string;
  responsibilities: string[];
  features: string[];
  impact: string[];
}

export const getFreelanceProjects = function (): FreelanceProject[] {
  return [
      {
      title: "Start Secure",
      shortDescription: "Cybersecurity & Penetration Testing Dashboard",
      fullDescription:
        "Start Secure is a cybersecurity platform offering penetration testing and security assessment services for modern applications. I built a comprehensive client dashboard that allows businesses to seamlessly onboard, track security assessments, and access detailed vulnerability reports in real time.",
      techStack: [
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Tailwind CSS",
        "REST APIs",
      ],
      link: "https://startsecure.in",
      linkDisplay: "startsecure.in",
      role: "Full-Stack Developer",
      responsibilities: [
        "Designed and developed a secure client dashboard from scratch for managing cybersecurity workflows.",
        "Built onboarding flows enabling clients to submit applications for penetration testing and security audits.",
        "Implemented real-time status tracking for security assessments, including stages like submission, testing, and reporting.",
        "Developed structured reporting modules to display vulnerabilities, risk levels, and remediation suggestions.",
        "Integrated backend APIs for handling client data, test results, and report generation securely.",
        "Ensured responsive UI/UX with a focus on clarity for complex security data and reports.",
      ],
      features: [
        "Client onboarding system allowing businesses to submit applications for penetration testing and security services.",
        "Live application status tracking with clear stages (Pending, In Progress, Completed, Report Generated).",
        "Detailed security reports showcasing vulnerabilities categorized by severity (Critical, High, Medium, Low).",
        "Actionable remediation insights to help clients fix identified security issues efficiently.",
        "Centralized dashboard for managing multiple applications and viewing historical reports.",
        "Secure data handling and authentication to ensure confidentiality of sensitive security findings.",
      ],
      impact: [
        "Enabled Start Secure to provide a transparent and professional client experience for cybersecurity services.",
        "Reduced manual communication overhead by centralizing application tracking and reporting in one dashboard.",
        "Improved client trust through clear, structured, and accessible vulnerability reporting.",
      ],
    },
 
      {
      title: "ActiveDelights",
      shortDescription: "Shopify Experience & Branding for Shake n' Oats",
      fullDescription:
        "ActiveDelights is a nutrition-focused brand offering 'Shake n' Oats' — a convenient oats-based protein milkshake designed for healthy, on-the-go lifestyles. I worked on building a custom Shopify experience that highlights the product’s benefits, improves conversions, and creates a strong visual identity across digital and offline touchpoints.",
      techStack: [
        "Shopify (Liquid)",
        "HTML",
        "CSS",
        "JavaScript",
        "Canva",
      ],
      link: "https://activedelights.in/",
      linkDisplay: "activedelights.in",
      role: "Frontend Developer & Creative Designer",
      responsibilities: [
        "Customized the Shopify theme using Liquid, HTML, CSS, and JavaScript to create a unique, conversion-focused storefront.",
        "Designed product-centric UI sections to effectively showcase Shake n' Oats and its nutritional value.",
        "Optimized layout and user flow for better product discovery and purchase experience.",
        "Created high-quality marketing assets including posters and banners for exhibitions and brand promotions.",
        "Collaborated on visual branding to ensure consistency across website and offline materials.",
      ],
      features: [
        "Custom-designed product pages highlighting benefits like high protein, convenience, and healthy lifestyle positioning.",
        "Engaging landing sections with strong visuals and clear messaging to improve conversions.",
        "Mobile-first responsive design ensuring smooth experience across devices.",
        "Visually appealing banners and promotional creatives for exhibitions and marketing campaigns.",
        "Brand-aligned UI/UX that communicates energy, health, and modern nutrition.",
      ],
      impact: [
        "Enhanced the brand’s online presence with a modern, product-focused Shopify experience.",
        "Improved user engagement and conversion through better visual storytelling and UX.",
        "Strengthened brand identity across both digital platform and offline exhibitions.",
      ],
    },
   {
  title: "Kulture Canada",
  shortDescription: "UI/UX Design for Premium Hair Care Brand",
  fullDescription:
    "Kulture Canada is a modern hair care brand built around authenticity, inclusivity, and transparency. I designed a complete UI/UX experience in Figma that reflects the brand’s philosophy — celebrating diverse hair types while creating a premium, trustworthy digital presence. The design focuses on storytelling, clean aesthetics, and product clarity to enhance user engagement and brand connection.",
  techStack: [
    "Figma",
    "UI/UX Design",
    "Design Systems",
    "Prototyping",
    "Wireframing",
  ],
  link: "https://kulturecanada.com/",
  linkDisplay: "kulturecanada.com",
  role: "UI/UX Designer",
  responsibilities: [
    "Designed end-to-end website UI/UX in Figma, from wireframes to high-fidelity prototypes.",
    "Created a design system including typography, color palette, spacing, and reusable components.",
    "Translated brand values like inclusivity, transparency, and premium care into visual design language.",
    "Designed product pages that clearly communicate ingredients, benefits, and usage.",
    "Focused on user journeys for product discovery, trust-building, and conversion.",
  ],
  features: [
    "Clean, modern interface reflecting a premium hair care brand identity.",
    "Story-driven homepage showcasing brand philosophy and emotional connection with users.",
    "Product-focused layouts highlighting ingredients, benefits, and transparency.",
    "Inclusive design approach representing diverse hair types and user personas.",
    "Mobile-first responsive design ensuring seamless experience across devices.",
    "Interactive prototypes in Figma to visualize user flow and interactions.",
  ],
  impact: [
    "Created a strong digital identity aligned with Kulture’s brand narrative and values.",
    "Improved user engagement through intuitive navigation and storytelling-driven design.",
    "Enhanced product trust by clearly presenting ingredients and benefits visually.",
  ],
},
  
  {
  title: "BakeHaven",
  shortDescription: "WordPress Storefront & UI Revamp for Baking Essentials Brand",
  fullDescription:
    "BakeHaven Confectioneries LLP is a Mumbai-based brand providing premium baking ingredients and essentials across India. I worked on enhancing their WordPress-powered website by implementing custom code, improving UI/UX, and creating mockup product visuals to better showcase their offerings and brand identity.",
  techStack: [
    "WordPress",
    "PHP",
    "HTML",
    "CSS",
    "JavaScript",
    "Canva",
  ],
  link: "https://bakehavenonline.com/",
  linkDisplay: "bakehavenonline.com",
  role: "Frontend Developer & UI Designer",
  responsibilities: [
    "Customized the WordPress website using PHP, HTML, CSS, and JavaScript to enhance functionality and design.",
    "Improved overall UI/UX to create a cleaner, more modern, and user-friendly shopping experience.",
    "Designed and implemented custom sections to better highlight baking products and categories.",
    "Created mockup product visuals to present items in a more appealing and professional way.",
    "Optimized layout and responsiveness for seamless browsing across devices.",
  ],
  features: [
    "Modernized website interface aligned with BakeHaven’s premium and creative brand identity.",
    "Custom product showcase sections to highlight baking essentials and ingredients effectively.",
    "Improved navigation and layout for easier product discovery and better user flow.",
    "High-quality mockup visuals enhancing product presentation and perceived value.",
    "Responsive design ensuring consistent experience across mobile, tablet, and desktop.",
  ],
  impact: [
    "Elevated BakeHaven’s digital presence with a more polished and professional storefront.",
    "Improved user engagement through better UI/UX and visually enhanced product displays.",
    "Strengthened brand perception as a premium baking essentials provider in India.",
  ],
},

       {
      title: "ZEP Resume",
      shortDescription: "AI Job Application Copilot",
      fullDescription:
        "ZEP Resume is a suite of AI tools that helps job seekers create stronger applications, optimize resumes for ATS, and prepare for interviews. I was responsible for architecting and developing the platform from scratch.",
      techStack: [
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "Supabase",
        "OpenAI API",
        "Stripe",
      ],
      link: "https://zepresume.com",
      linkDisplay: "zepresume.com",
      role: "Full-Stack Developer",
      responsibilities: [
        "Designed the overall system architecture for resume, cover letter, and interview tooling.",
        "Implemented the web app UI, authentication, and subscription/paywall flows (Free, Pro, Business).",
        "Integrated AI models to generate and score resumes, cover letters, and interview questions.",
        "Built analytics and scoring pipelines to give users granular feedback on resume quality and interview readiness.",
      ],
      features: [
        "AI cover letter generator that tailors letters to each job description and highlights relevant strengths.",
        "Resume scorer and checker that evaluate ATS-readiness, structure, and content, returning actionable suggestions.",
        "AI career coach that provides real-time, chat-based guidance across job search, positioning, and next steps.",
        "AI mock interviews and interview-question generator with instant feedback on answers.",
        "Resume and portfolio builders with templates, proofreading, skills extraction, and ATS checker tools.",
      ],
      impact: [
        "Helped ZEP position itself as a 'one-stop' AI copilot for job applications, from resume to interview prep.",
        "Improved user success and retention by surfacing clear scores, progress, and targeted recommendations.",
      ],
    },
  ];
};
