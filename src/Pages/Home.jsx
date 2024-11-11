import React from 'react';
import { Nav } from '../components/header/Nav';
import { Introduction } from '../components/header/Introduction';
import { ProjectCards } from '../components/projects/ProjectCard';
import { AboutMe } from '../components/personal/AboutMe';
import { Skills } from '../components/personal/Skills';
export default function Home() {
    return (
        <>
            <div>
                <Nav />
                
                   <Introduction/>
                   <AboutMe/>
                   <ProjectCards/>
                   <Skills/>
            </div>
        </>
    );
}