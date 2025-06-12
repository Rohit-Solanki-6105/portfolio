import React from 'react'
import { projects } from '../../data'
import SpotlightCard from '../../components/SpotlightCard/SpotlightCard'
import Image from 'next/image'
function Projects() {
    return (
        <section id='projects' className='flex flex-wrap justify-around p-3'>
            {projects.map((project, index) => (
                <SpotlightCard key={index}>
                    <div className='flex flex-col gap-2 max-w-lg'>
                        <h3 className='text-lg font-semibold text-white'>{project.title}</h3>
                        <div className='h-48'>
                            <img
                                src={project.img}
                                alt={project.title}
                                className='rounded-lg h-48 object-fit'
                            />
                        </div>
                        <p className='text-sm text-gray-300'>{project.description}</p>
                        <div className='flex flex-wrap gap-2 mt-2'>
                            {project.technologies.map((tech, techIndex) => (
                                <span key={techIndex} className='bg-gray-700 text-gray-200 px-2 py-1 rounded-full text-xs'>
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className='flex flex-row justify-between gap-2 mt-2'>
                            <a href={project.githubLink} target='_blank' rel='noopener noreferrer' className='text-blue-400 hover:underline'>
                                View on GitHub
                            </a>
                            {project.liveLink && (
                                <a href={project.liveLink} target='_blank' rel='noopener noreferrer' className='text-blue-400 hover:underline'>
                                    View Demo
                                </a>
                            )}
                        </div>
                    </div>
                </SpotlightCard>
            ))}
        </section>
    )
}

export default Projects
