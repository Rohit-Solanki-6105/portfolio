import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { AuroraBackground } from './ui/AuroraBackground'
import { BackgroundBeams } from './ui/BackgroundBeams'
import { motion } from 'framer-motion'
import { Parallax } from 'react-scroll-parallax'
import { FlipWords } from './ui/FlipWords'

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
      {/* <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple'/>
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue'/>

      </div> */}

      
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.07] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0 ">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <AuroraBackground className='absolute inset-0 z-0' children=""/>
      {/* <BackgroundBeams className='absolute inset-0 z-10' /> */}
      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
            {/* Rohit Solanki's Portfolio */}
            Developer & Designer
          </h2>
          {/* <Parallax scale={[0.1, 1.5]} speed={1}> */}

            <TextGenerateEffect
              className='text-center text-[40px] md:text-5xl lg:text-6xl'
              words='Sailing in Computerized Ocean'
            />
          {/* </Parallax> */}

          <p className='text-center flex flex-row md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl justify-center items-center'>
            <span className='text-center flex justify-center items-center'>Hi, I&apos;m Rohit Solanki
            </span>
            {/* <span className='text-center flex justify-center items-center'>
              <img src="https://readme-typing-svg.herokuapp.com?font=sans&size=25&pause=1000&random=false&width=420&height=40&lines=Full+Stack+Developer;Software+Engineer;Android%2FIOS+App+Developer" alt="Typing SVG" className='object-cover'/>
            </span> */}
          </p>
          <div className='flex flex-row text-sm md:text-lg lg:text-2xl text-sky-200'>
          <span>
            <FlipWords words={[
              "Full ",
              "Software ",
              "Android/IOS "]} className='text-sky-200'/>
            </span>
            <span>
            <FlipWords words={[
              "stack ",
              "engineer",
              "app "]} className='text-sky-200'/>
            </span>
            <span>
            <FlipWords words={[
              "developer",
              " ",
              "developer"]} className='text-sky-200'/>
            </span>
          </div>
        </div>
      </div>

      <a href="#about">
        <MagicButton
          title='My Work'
          icon={<FaLocationArrow />}
          position='right'
        />
      </a>
      
    </div>
    
  )
}

export default Hero
