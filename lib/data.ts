import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

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
      "Developing web applications from front-end design to back-end implementation, ensuring a seamless user experience. Designing visually appealing graphics, including thumbnails, banners, and brochures, tailored to your brand and project needs.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - Now",
  },

  {
    title: "Universitas Muhammadiyah Bengkulu",
    location: "Informatics Engineering, GPA. 3.81",
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
      "SIAKAD (Academic Information System) application for MDA Asy-Syifa is an application designed to facilitate the management of academic data at Madrasah Diniyah Awaliyah (MDA) Asy-Syifa. This application includes key features such as student data management, class schedule management, grade administration, and attendance reports. Click here for more information",
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
      "Project Management Consulting Prodigy is a digital platform designed to facilitate online project management and consultation. This application allows project managers and consulting teams to communicate, share information, and manage projects efficiently in one place. Click here for more information",
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

  {
    title: "Magazine RUSH",
    description:
      "This magazine contains information on how to guide the mental well-being of students together with teachers at SMA 5 Kota Bengkulu, tips and tricks for handling panic attacks, as well as references to tourist attractions in Bengkulu. Click here for more information",
    screenshots: [
      "images/project/majalah/2. promkes.png",
      "images/project/majalah/5. klink2.png",
      "images/project/majalah/13. poster.png",
      "images/project/majalah/14. iklan.png",
      "images/project/majalah/11. unicef.png",
    ],
    image: "images/project/majalah/RUSH.png",
    tech: [
      "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
    ],
    demoUrl: "images/project/majalah/RUSH2.pdf",
    githubUrl: "",
    features: [
      "Parenting children's mental health",
      "Clinic locations",
      "tips and tricks",
      "News",
      "Traveling",
    ],
    languages: ["Adobe Photoshop"],
  },

  {
    title: "Brochure Designs",
    description:
      "Brochure design is the process of creating printed materials used to convey information concisely and in an organized manner. Brochures are often used for promotional, informational, or educational purposes. Click here for more information",
    screenshots: [
      "images/project/brosur/brosur.png",
      "images/project/brosur/bull.png",
      "images/project/brosur/fito.png",
      "images/project/brosur/petra.png",
      "images/project/brosur/pubg.png",
      "images/project/brosur/original.png",
      "images/project/brosur/pedas.png",
      "images/project/brosur/coklat.png",
    ],
    image: "images/project/brosur/brosurdepan.png",
    tech: [
      "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
    ],
    demoUrl: "",
    githubUrl: "",
    features: ["Promotion Brochure.", "Contest Brochure.", "Product Brochure."],
    languages: ["Adobe Photoshop"],
  },

  {
    title: "Poster Designs",
    description:
      "Posters are visual media used to convey messages briefly and clearly to the audience. Click here for more information",
    screenshots: [
      "images/project/poster/absen.png",
      "images/project/poster/movie.png",
      "images/project/poster/buku.png",
      "images/project/poster/bawang.png",
      "images/project/poster/promosi2.png",
      "images/project/poster/merdeka.png",
      "images/project/poster/poging.png",
      "images/project/poster/rytos.png",
      "images/project/poster/senam.png",
    ],
    image: "images/project/poster/posterdepan.png",
    tech: [
      "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
    ],
    demoUrl: "",
    githubUrl: "",
    features: [
      "Commercial Poster.",
      "Public Service Poster.",
      "Educational Poster.",
      "Event Poster.",
      "Artistic Poster.",
    ],
    languages: ["Adobe Photoshop"],
  },

  {
    title: "Logo Designs",
    description:
      "Logo design is the process of creating a symbol or visual identity that represents a brand, company, organization, or product. Click here for more information",
    screenshots: [
      "images/project/logo/expo.png",
      "images/project/logo/logokkn.png",
      "images/project/logo/3d.png",
      "images/project/logo/logocemilan.png",
      "images/project/logo/sambal.png",
    ],
    image: "images/project/logo/logodepan.png",
    tech: [
      "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
    ],
    demoUrl: "",
    githubUrl: "",
    features: ["Personal Logo.", "Product Logo", "Event Logo"],
    languages: ["Adobe Photoshop"],
  },

  {
    title: "Banner Designs",
    description:
      "Banner design is a visual element used to convey messages or information in a bold and attractive manner, either in a horizontal or vertical format. Banners are typically used in various contexts. Click here for more information.",
    screenshots: [
      "images/project/spanduk/kkn.png",
      "images/project/spanduk/rw.png",
      "images/project/spanduk/skacus.jpg",
      "images/project/spanduk/gebyar.jpg",
      "images/project/spanduk/workshop.png",
    ],
    image: "images/project/spanduk/skacus.jpg",
    tech: [
      "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
    ],
    demoUrl: "",
    githubUrl: "",
    features: ["Physical Banner.", "Product Promotion Banner", "Event Banner."],
    languages: ["Adobe Photoshop"],
  },

  {
    title: "Thumbnail Youtube Designs",
    description:
      "YouTube thumbnail design is the process of creating a small image that represents a video and attracts viewers to click and watch it. Click here for more information.",
    screenshots: [
      "images/project/yt/polsek.png",
      "images/project/yt/never.jpg",
      "images/project/yt/cover1.png",
      "images/project/yt/cover.png",
    ],
    image: "images/project/yt/polsek.png",
    tech: [
      "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
    ],
    demoUrl: "",
    githubUrl: "",
    features: ["Short Movie Thumbnail.", "Content Thumbnail."],
    languages: ["Adobe Photoshop"],
  },

  {
    title: "Product Designs",
    description:
      "Product design is the process of creating and developing the form, function, and aesthetics of a product with the goal of meeting the needs and desires of users. Click here for more information.",
    screenshots: [
      "images/project/product/plastik.png",
      "images/project/product/kupon.png",
    ],
    image: "images/project/product/plastik.png",
    tech: [
      "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
    ],
    demoUrl: "",
    githubUrl: "",
    features: ["Coupon Product.", "Plastic bag Product."],
    languages: ["Adobe Photoshop"],
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
      "https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg",
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
    imgUrl: "/images/icon/javascript.svg",
  },

  {
    id: 9,
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    id: 10,
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
  },
  {
    id: 1,
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
  },

  {
    id: 6,
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/Adobe_Premiere_Pro_Logo.svg",
  },

  // {
  //   id: 10,
  //   imgUrl:
  //     "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg",
  // },
] as const;
