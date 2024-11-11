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
      description: "D2ARMy its a fully functional web application designed to help Destiny 2 players search, filter, and experiment with different gear configurations in the game.",
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
      description: "This is my personal online portfolio, where I showcase my projects, skills, and experience as a web developer. My goal is to present the work I’ve done.",
      image: "/imgs/projects/project3.jpg",
      techStack: ["React", "Netlify", "JavaScript"],
      githubLink: "https://github.com/ianmiranda/project3",
      liveLink: "https://project3.com"
    }
  ]);

  return { projects };

}