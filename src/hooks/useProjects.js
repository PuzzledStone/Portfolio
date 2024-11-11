import { useState } from "react";
export function useProjects() {

    const [projects] = useState([
    {
      title: "Attimo",
      description: "Web prototype of a collaboration platform designed to manage tasks, calendars and communication between student and teacher",
      image: "/imgs/projects/project1.jpg",
      techStack: ["React", "Laravel", "PHP", "Node.js", "HeidiSQL"],
      githubLink: "https://github.com/ianmiranda/project1",
      liveLink: "https://project1.com"
    },
    {
      title: "D2ARMY",
      description: "Fully functional web application to consume the Bunige.net API and display gear from the game Destiny 2",
      image: "/imgs/projects/project2.jpg",
      techStack: [".NET", "C#", "Vercel"],
      githubLink: "https://github.com/ianmiranda/project2",
      liveLink: "https://project2.com"
    },
    {
      title: "TuLook",
      description: "TuLook is a platform that connects stylists and barbers with clients. Professionals can create profiles, offer their services and manage bookings, while clients can explore options, view availability and schedule appointments directly.",
      image: "/imgs/projects/project3.jpg",
      techStack: ["React", "Laravel", "PHP", "Node.js", "Vercel"],
      githubLink: "https://github.com/ianmiranda/project3",
      liveLink: "https://tulook.vercel.app/"
    },
    {
      title: "Dane",
      description: "Dane is a prototype of a web application that connects restaurants with customers, allowing them to explore menus and place orders.",
      image: "/imgs/projects/project3.jpg",
      techStack: ["React", "Laravel", "PHP", "Node.js", "HeidiSQL"],
      githubLink: "https://github.com/ianmiranda/project3",
      liveLink: "https://project3.com"
    },
    {
      title: "Portfolio",
      description: "Este es mi portafolio en línea, donde presento mis proyectos, habilidades y experiencia como desarrollador",
      image: "/imgs/projects/project3.jpg",
      techStack: ["React", "Netlify", "JavaScript"],
      githubLink: "https://github.com/ianmiranda/project3",
      liveLink: "https://project3.com"
    }
  ]);

  return { projects };

}