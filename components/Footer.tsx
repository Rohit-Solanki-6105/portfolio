import React from 'react'
import MagicButton from './ui/MagicButton'
import { IoLogoGithub, IoMail, IoMailOpenOutline } from 'react-icons/io5'

const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10 z-10' id='contacts'>
        {/* <div>
            <img 
            src="/footer-grid.svg" 
            alt="grid" 
            className='w-full h-full opacity-100' />
        </div> */}
        <div className='w-full h-full left-0 h-100'>
            <div className='flex-col flex items-center justify-center h-100'>
                <h1 className='heading w-screen p-2'>
                    Stay Engaged with My Creative Adventures - <span className='text-sky-200'>Connect, Collaborate, and Inspire!</span>
                </h1>
                <h3 className='p-1'>
                Whether you're looking to start a new project, need some advice, or just want to chat, I'm here. Connect with me on social media or send an email. Let's create something amazing together!
                </h3>
                <a href="mailto:solanki.rohit6105@gmail.com">
                    <MagicButton title={'Get in Touch'} icon={<IoMail />} position={'left'} />
                </a>
                <hr className='w-full border-black-300 m-2 ' />
                <div className='grid grid-cols-2 items-center justify-center p-2 gap-2 content-between w-screen '>
                    
                    <span className='text-sky-200 p-2 ml-1'>&copy; 2024 Rohit Solanki</span>

                    <a href="https://github.com/rohit6105" target="_blank">
                        <span className='flex flex-row items-center justify-center'>
                            <IoLogoGithub size={30}/>
                            Rohit-Solanki-6105
                        </span>
                    </a>
                    {/* <div>
                        <a href="https://github.com/Rohit-Solanki-6105">
                            <MagicButton title={'Rohit-Solanki-6105'} icon={<IoLogoGithub size={20}/>} position={'left'} />
                        </a>
                    </div> */}
                    {/* <div> */}
                        {/* <a href=""> */}
                            {/* <MagicButton title={'solanki.rohit6105@gmail.com'} icon={<IoMail />} position={'left'} /> */}
                        {/* </a> */}
                    {/* </div> */}
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
