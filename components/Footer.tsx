import React from 'react'
import MagicButton from './ui/MagicButton'
import { IoLogoGithub, IoMail, IoMailOpenOutline } from 'react-icons/io5'
import Link from 'next/dist/client/link'

const Footer = () => {
  return (
    
    <footer className='w-full pt-20 pb-10 z-10 relative' id='contacts'>
      <div className='w-full flex flex-col items-center justify-center'>
        <h1 className='heading w-screen p-2 text-center'>
          Stay Engaged with My Creative Adventures - <span className='text-sky-200'>Connect, Collaborate, and Inspire!</span>
        </h1>
        <h3 className='p-1 text-center'>
          Whether you're looking to start a new project, need some advice, or just want to chat, I'm here. Connect with me on social media or send an email. Let's create something amazing together!
        </h3>
        <a href="mailto:solanki.rohit6105@gmail.com" className='my-4'>
          <MagicButton title={'Get in Touch'} icon={<IoMail />} position={'left'} />
        </a>
        <hr className='w-full border-gray-600 my-4' />
        <div className='flex md:flex-row flex-col items-center justify-center p-2 gap-2'>
          <span className='text-sky-200 p-2'>&copy; 2024 Rohit Solanki</span>
          <a href="https://github.com/Rohit-Solanki-6105" target="_blank" rel="noopener noreferrer" className='flex flex-row items-center justify-center'>
            <IoLogoGithub size={30} className='mr-2' />
            Rohit-Solanki-6105
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
