import { Teachers } from "next/font/google";

const skills = [
  {
    category: "Languages & Frameworks",
    items: [
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "React",
      "Angular",
      "Vue.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "PHP",
      "Laravel",
      "Solidity",
      "Kotlin",
      "Flutter",
      "Java (JSP)",
      "Python",
      "C/C++"
    ]
  },
  {
    category: "Mobile Development",
    items: [
      "React Native",
      "Flutter",
      "Android (Kotlin)"
    ]
  },
  {
    category: "Databases",
    items: [
      "MongoDB",
      "PostgreSQL",
      "SQL",
      "Firebase",
      "Appwrite"
    ]
  },
  {
    category: "Blockchain & Smart Contracts",
    items: [
      "Solidity",
      "Web3.js",
      "Ethereum",
      "Smart Contracts",
      "DApps"
    ]
  },
  {
    category: "Cloud & DevOps",
    items: [
      "AWS",
      "Firebase",
      "Vercel",
      "Netlify",
      "Heroku"
    ]
  },
  {
    category: "Version Control & Tools",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "Docker"
    ]
  },
  {
    category: "Other Technologies",
    items: [
      "Web3",
      "Blockchain Development",
      "RESTful APIs",
      "Firebase Auth",
      "Appwrite Auth",
      "Redux",
      "Tailwind CSS",
      "Bootstrap"
    ]
  }
];

const projects = [
  {
    title: "LPMS",
    description: "An open source python application to print the files in dot matric printer with banner(banner, user, date)",
    githubLink: "https://github.com/Rohit-Solanki-6105/Line-Printer-Management-System",
    img: "https://repository-images.githubusercontent.com/821764805/54a64ef2-892e-48b6-ade7-c19c34c8a99f",
    technologies: ["Python", "Tkinter"]
  },
  {
    title: "Journey Mate",
    description: "A modern web-based travel management system built for planning, booking, and managing tours with ease",
    githubLink: "https://github.com/Rohit-Solanki-6105/journeymate",
    liveLink: "https://journeymate.vercel.app",
    img: "https://repository-images.githubusercontent.com/996874519/79bdad85-093b-4c14-bec8-07f04a067b31",
    technologies: ["Next.js", "Tailwind CSS", "MongoDB", "App Write"]
  },
  {
    title: "Retro Rumble",
    description: "Step back in time and rediscover the golden age of gaming with our site, your ultimate destination for retro games. Explore a vast library of titles, and with our ROM upload support.",
    githubLink: "https://github.com/Rohit-Solanki-6105/retro-rumble",
    liveLink: "https://retro-rumble.vercel.app",
    img: "https://repository-images.githubusercontent.com/1006016737/87093d8d-f71d-4d2c-b271-c1f032f2ce49",
    technologies: ["React", "Tailwind CSS", "Emulator JS"]
  },
];

const emails = [
  "solanki.rohit6105@gmail.com",
  "solanki.rohit.harishbhai@gmail.com"
];

const githubLink = "https://github.com/Rohit-Solanki-6105";
const linkedinLink = "https://www.linkedin.com/in/rohit-solanki-a22b38365";

export { skills, projects, emails, githubLink, linkedinLink };