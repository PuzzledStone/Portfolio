import React from 'react';
import { Nav } from '../components/header/Nav';
import { Introduction } from '../components/header/Introduction';
import { ProjectCards } from '../components/projects/ProjectCard';
export default function Home() {
    return (
        <>
            <Nav />
           
            <Introduction/>
            <ProjectCards/>
            <ProjectCards/>
            <ProjectCards/>
            <ProjectCards/>
        </>
    );
}