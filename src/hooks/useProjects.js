import { useState } from "react";
export function useProjects() {

    const [projects] = useState([
    {
      title: "Attimo",
      description: "Web prototype of a collaboration platform designed to manage tasks, calendars and communication between student and teacher",
      image: "/imgs/projects/attimo.jpg",
      techStack: ["React", "Laravel", "PHP", "Node.js", "HeidiSQL"],
      githubLink: "https://github.com/PuzzledStone/Attimo-Frontend",
      liveLink: "https://attimo-frontend.vercel.app/login"
    },
    {
      title: "Space-Dodge",
      description: "2D arcade-style game where the player controls a spaceship and must avoid falling meteors. Implemented collision detection and points using object-oriented programming.",
      image: "/imgs/projects/space-dodge.png",
      techStack: ["Java", "JDK", "NetBeans IDE", "Maven"],
      DownloadLink: "/files/Space-Dodge.jar",
      DownloadReadme: "/files/SpaceDodge-README.txt"
    },
    {
      title: "TuLook",
      description: "TuLook is a platform that connects stylists and barbers with clients. Professionals can create profiles, offer their services and manage bookings, while clients can explore options, view availability and schedule appointments directly.",
      image: "/imgs/projects/tulook.jpg",
      techStack: ["React", "Laravel", "PHP", "Node.js", "Vercel"],
      githubLink: "https://github.com/Encanto-ITM/TuLook-Desarrollo",
      liveLink: "https://tulook.vercel.app/"
    },
    {
      title: "Dane",
      description: "Dane is a prototype of a web application that connects restaurants with customers, allowing them to explore menus and place orders.",
      image: "/imgs/projects/dane.jpg",
      techStack: ["Laravel", "PHP", "HeidiSQL"],
      githubLink: "https://github.com/PuzzledStone/DANE-Backend",
    },
    {
      title: "Portfolio",
      description: "This is my personal online portfolio, where I showcase my projects, skills, and experience as a web developer. My goal is to present the work I’ve done.",
      image: "/imgs/projects/portfolio.jpg",
      techStack: ["React", "Netlify", "JavaScript"],
      githubLink: "https://github.com/PuzzledStone/Portfolio",
    }
  ]);

  return { projects };

}