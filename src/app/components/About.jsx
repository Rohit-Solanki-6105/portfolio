"use client"
import React from 'react'
import Silk from "../../components/Silk"
import { skills } from '../../data'
import AnimatedDiv from '../../components/AnimatedDiv'
import { CheckCircle, CopyCheckIcon, CopyIcon } from 'lucide-react'

function About({ isDark }) {
    const [copiedEmail, setCopiedEmail] = React.useState(false);

    const copyEmail = (e) => {
        setCopiedEmail(true);
        setTimeout(() => {
            setCopiedEmail(false);
        }, 2000);
        // Copy email to clipboard
        e.preventDefault();
        navigator.clipboard.writeText('solanki.rohit6105@gmail.com');
    }

    return (
        <section className='grid grid-cols-1 lg:grid-cols-3 p-4 sm:p-6 md:p-8 relative top-0 left-0 min-h-screen w-full max-w-[99vw] gap-3 md:gap-4' id='about'>
            {/* About Text Section */}
            <div className='col-span-1 lg:col-span-2 flex flex-col justify-center items-start gap-3 sm:gap-4 order-1 lg:order-1'>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold '>About Me</h2>
                <p className={`text-sm sm:text-base md:text-lg text-gray-${isDark ? '300' : '900'} leading-relaxed`}>
                    I am a passionate developer and designer with a keen interest in creating innovative solutions. My journey in the tech world has been driven by a love for learning and a desire to make an impact through technology.
                </p>
                <p className={`text-sm sm:text-base md:text-lg text-gray-${isDark ? '300' : '900'} leading-relaxed`}>
                    With a background in both front-end and back-end development, I enjoy building applications that are not only functional but also visually appealing. I believe in the power of collaboration and am always eager to work with others to bring ideas to life.
                </p>
                <p className={`text-sm sm:text-base md:text-lg text-gray-${isDark ? '300' : '900'} leading-relaxed`}>
                    In my free time, I love exploring new technologies, contributing to open-source projects, and sharing my knowledge with the community. I am excited about the future of technology and look forward to being a part of it.
                </p>
                <p className={`text-sm sm:text-base md:text-lg text-gray-${isDark ? '300' : '900'} leading-relaxed`}>
                    Feel free to reach out if you want to connect or collaborate on exciting projects!
                </p>
            </div>

            {/* Email Copy Section */}
            <div className='col-span-1 rounded-lg p-2 relative min-h-[200px] sm:min-h-[250px] md:min-h-[300px] lg:min-h-auto order-2 lg:order-2'>
                <div className='h-full w-full rounded-lg overflow-hidden absolute top-0 left-0'>
                    <Silk
                        speed={5}
                        scale={1}
                        noiseIntensity={1.5}
                        rotation={0}
                    />
                </div>
                <div className='h-full w-full relative z-30 flex items-center justify-center' onClick={copyEmail}>
                    <AnimatedDiv isDark={isDark} className='py-2 px-3'>
                        <div className='flex flex-row items-center justify-center gap-2 text-gray-300 cursor-pointer hover:text-white transition-colors duration-300 text-sm sm:text-base'>
                            {copiedEmail ? <CheckCircle className='w-4 h-4 sm:w-5 sm:h-5' /> : <CopyIcon className='w-4 h-4 sm:w-5 sm:h-5' />}
                            <span className='whitespace-nowrap'>{copiedEmail ? "Copied" : "Copy my Email"}</span>
                        </div>
                    </AnimatedDiv>
                </div>
            </div>

            {/* Skills Section */}
            <div className='col-span-1 lg:col-span-3 flex flex-wrap justify-center sm:justify-between gap-2 sm:gap-3 md:gap-4 order-3 lg:order-3 mt-4 lg:mt-0'>
                {
                    skills.map((skill, index) => (
                        skill.items && skill.items.length > 0 &&
                        skill.items.map((item, itemIndex) => (
                            <div key={`${index}-${itemIndex}`} className='flex-1 min-w-[120px] sm:min-w-[140px] md:min-w-fit text-center flex items-center justify-center gap-4 bg-gray-400/20 px-2 sm:px-3 py-2 sm:py-3 rounded-md hover:bg-gray-400/30 transition-colors duration-200'>
                                <span className='text-xs sm:text-sm md:text-base lg:text-lg  whitespace-nowrap overflow-hidden text-ellipsis'>{item}</span>
                            </div>
                        ))
                    ))
                }
            </div>
        </section>
    )
}

export default About