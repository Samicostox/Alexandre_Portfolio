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
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Languages : French-English-Spanish",
    icon: "https://res.cloudinary.com/dl2adjye7/image/upload/v1717144108/langue_1_xtwx6x.png",
  },
  {
    title: "Highly competent in Microsoft Office",
    icon: "https://res.cloudinary.com/dl2adjye7/image/upload/v1717144108/bureau_1_mijlkh.png",
  },
  {
    title: "Finance expertise",
    icon: "https://res.cloudinary.com/dl2adjye7/image/upload/v1717144108/la-finance_aijuwh.png",
  },
  {
    title: "Entrepreneur",
    icon: "https://res.cloudinary.com/dl2adjye7/image/upload/v1717144108/entrepreneur_1_zbsqwe.png",
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
    title: "Intern as an auditor",
    company_name: "ADMR Union Nationale",
    icon: "https://res.cloudinary.com/dl2adjye7/image/upload/v1717144332/unnamed__4_-removebg-preview_a0aigm.png",
    iconBg: "#E6DEDD",
    date: "Feb 2024 - August 2024",
    points: [
      "Led audits across 20 federations in an association of 94,000 employees and 85,000 volunteers, fortifying process efficiency and identifying critical financial discrepancies.",
      "Developed strategic financial and operational recommendations following a detailed 360° risk analysis, significantly strengthening governance and proactive risk management in a 95-entity association.",
      "Improved data analysis tools and workflows, resulting in more effective audit insights and analytical capabilities.",
      "Conducted thorough compliance verification of federation documentation, ensuring adherence to standards and reducing organisational risk.",
    ],
  },
  {
    title: "Co-Founder | Head of Business Development",
    company_name: "Innovation Studios",
    icon: "https://res.cloudinary.com/dl2adjye7/image/upload/v1714380763/Logo_Sam_7_vka0ed.png",
    iconBg: "#E6DEDD",
    date: "September 2023 - Present",
    points: [
      "Head of Business Development of a Consulting Group operating in the University of Birmingham & Warwick, offering Software Development and Data Science services to companies.",
      "Coordinated a team of 8 across the sales & marketing departments",
      "Generated £40,000 in revenue in 1 year by negotiating 20 deals for software engineering and data science projects.",
      "Tiktok (~500k views, 500+ followers, 11k+ likes)",
      "Successfully attracted over 1000+ users on our platform that registers CVs from professionals at top companies"
    ],
  },
  {
    title: "Intern as a salesperson",
    company_name: "Filovent (online boat rental agency)",
    icon: "https://res.cloudinary.com/dl2adjye7/image/upload/v1717144256/favicon_j0etpv.png",
    iconBg: "#E6DEDD",
    date: "July - December 2022",
    points: [
      "Closed over 120 bookings, leveraging advanced client advisory and sales techniques, with contracts values ranging from €1,000 to over €50,000, in a competitive environment.",
      "Cultivated strong client relationships, prioritising trust and rapport-building.",
      "Collaborated with cross-functional teams by emphasising clear and precise communication, and enabling the training of new members.",
      "Utilised adaptability and flexibility skills to maintain self-discipline in high-pressure environments leading to effective handling of significant responsibilities and managing priorities.",
    ],
  },
 
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
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
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
