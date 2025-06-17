import React from 'react'
import { projects } from '../../data'
import SpotlightCard from '../../components/SpotlightCard/SpotlightCard'
import Image from 'next/image'
function Projects({isDark}) {
    return (
        <section id='projects' className='flex flex-wrap gap-5 lg:gap-3 justify-around p-3'>
            {projects.map((project, index) => (
                <SpotlightCard key={index} style={{
                    backgroundColor: isDark ? "#111" : "#eee",
                    border: isDark ? '1px solid #222' : '1px solid #ddd' 
                }} spotlightColor={isDark ? 'rgba(255, 255, 255, 0.25)' : 'rgba(0, 0, 0, 0.2)' }>
                    <div className='flex flex-col gap-2 max-w-lg'>
                        <h3 className='text-lg font-semibold '>{project.title}</h3>
                        <div className='h-48'>
                            <img
                                src={project.img}
                                alt={project.title}
                                className='rounded-lg h-48 object-fit'
                            />
                        </div>
                        <p className={`text-sm text-gray-${isDark ? '300' : '900'}`}>{project.description}</p>
                        <div className='flex flex-wrap gap-2 mt-2'>
                            {project.technologies.map((tech, techIndex) => (
                                <span key={techIndex} className='bg-gray-700 text-gray-200 px-2 py-1 rounded-full text-xs'>
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className='flex flex-row justify-between gap-2 mt-2'>
                            <a href={project.githubLink} target='_blank' rel='noopener noreferrer' className={`${ isDark ? 'text-blue-400' : 'text-blue-700'} hover:underline`}>
                                View on GitHub
                            </a>
                            {project.liveLink && (
                                <a href={project.liveLink} target='_blank' rel='noopener noreferrer' className={`${ isDark ? 'text-blue-400' : 'text-blue-700'} hover:underline`}>
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
