import React from 'react';
import { Nav } from '../components/header/Nav';
import { Introduction } from '../components/header/Introduction';
import { ProjectCards } from '../components/projects/ProjectCard';
export default function Home() {
    return (
        <>
            <Nav />
            <div className='h-[80vh]'> 
            <Introduction/>
            </div>
            <ProjectCards/>
        </>
    );
}