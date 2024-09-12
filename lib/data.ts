import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import wartafenoImg from "@/public/images/project/wartefeno/1.png";
import siakadImg from "@/public/images/project/siakad/1.png";
import amikomImg from "@/public/images/project/amikom/1.png";
import hrtoolsImg from "@/public/images/project/hr-tools/1.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;
export const experiencesData = [
  {
    title: "Freelance",
    location: "Web Development, Graphic Designer",
    description:
      "Web developers are responsible for designing and maintaining websites using programming languages ​​such as HTML, CSS, PHP, and JavaScript, as well as optimizing site performance. They work on a project basis with flexible schedules and variable incomes. Meanwhile, graphic designers focus on creating visual elements such as logos and promotional materials using design software such as Adobe Illustrator and Photoshop.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - Now",
  },

  {
    title: "Universitas Muhammadiyah Bengkulu",
    location: "Informatics Engineering, Gpm. 3.81",
    description: "",
    icon: React.createElement(CgWorkAlt),
    date: "September 2020 - Mei 2024",
  },
  {
    title: "SMK Negeri 1 Bengkulu City",
    location: "Software Engineering",
    description: "",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2017 - Mei 2020",
  },
] as const;

export const projectsData = [
  {
    title: "SIAKAD MDA ASY-SYIFA",
    description:
      "SIAKAD (Academic Information System) application for MDA Asy-Syifa is an application designed to facilitate the management of academic data at Madrasah Diniyah Awaliyah (MDA) Asy-Syifa. This application includes key features such as student data management, class schedule management, grade administration, and attendance reports.",
    screenshots: [
      "images/project/mdaweb/dashboard.png",
      "images/project/mdaweb/datasiswa.png",
      "images/project/mdaweb/infosiswa.png",
      "images/project/mdaweb/datanilai.png",
      "images/project/mdaweb/laporandaftarsiswa.png",
    ],
    image: "images/project/mdaweb/login.png",
    tech: [
      "/images/icon/bootstrap.svg",
      "/images/icon/codeigniter.svg",
      "/images/icon/javascript.svg",
      "/images/icon/mysql.svg",
    ],
    demoUrl: "",
    githubUrl: "https://github.com/alfitodhy/Aplikasi-Siakad-MDA-ASY-SYIFA",
    features: [
      "Student and teacher data management: Store and manage student information, including personal data and academic data.",
      "Lesson schedule management: Create and organize lesson schedules according to the applicable curriculum.",
      "class data management: create and organize student classes starting from student and homeroom teacher data.",
      "Grade administration: Enter, change, and display student grades efficiently.",
    ],
    languages: ["CodeIgniter 3", "Bootstrap 5", "MYSQL 8.0", "JavaScript"],
  },
  {
    title: "PM. PRODIGY",
    description:
      "Project Management Consulting Prodigy is a digital platform designed to facilitate online project management and consultation. This application allows project managers and consulting teams to communicate, share information, and manage projects efficiently in one place.",
    screenshots: [
      "images/project/pmprodigy/login.png",
      "images/project/pmprodigy/konsultasi.png",
      "images/project/pmprodigy/datakonsultasi.png",
      "images/project/pmprodigy/loginadmin.png",
      "images/project/pmprodigy/dashboardadmin.png",
    ],
    image: "images/project/pmprodigy/dashboard.png",
    tech: [
      "/images/icon/bootstrap.svg",
      "/images/icon/codeigniter.svg",
      "/images/icon/javascript.svg",
      "/images/icon/mysql.svg",
    ],
    demoUrl: "https://pm-prodigy.com/",
    githubUrl: "https://github.com/alfitodhy/Aplikasi-PM.Prodigy",
    features: [
      "Online consultation: clients can consult with the prodigy admin to solve existing problems.",
      "Online training: clients can learn about project management and there is also pmp certification etc.",
      "Online Chat: clients can also communicate with the admin to ask about project management.",
    ],
    languages: ["CodeIgniter 3", "Bootstrap 5", "MYSQL 8.0", "JavaScript"],
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "PHP",
  "JavaScript",
  "TypeScript",
  "Tailwind",
  "Bootstrap",
  "Codeigneter",
  "Laravel",
  "React",
  "MYSQL",
  "Git",
  // "Framer Motion",
] as const;

export const skilss = [
  {
    id: 2,
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
  {
    id: 3,
    imgUrl: "/images/icon/bootstrap.svg",
  },
  {
    id: 8,
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
  },
  {
    id: 4,
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
  },
  {
    id: 5,
    imgUrl: "/images/icon/codeigniter.svg",
  },
  {
    id: 7,
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg",
  },

  {
    id: 9,
    imgUrl: "/images/icon/typescript.svg",
  },
  {
    id: 10,
    imgUrl: "/images/icon/javascript.svg",
  },
  {
    id: 1,
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    id: 6,
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
  },

  // {
  //   id: 10,
  //   imgUrl:
  //     "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg",
  // },
] as const;
