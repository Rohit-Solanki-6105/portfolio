import React from 'react'
import AnimatedDiv from '../../components/AnimatedDiv'
import { Github, Linkedin, Mail, SendIcon } from 'lucide-react'
import { emails, githubLink, linkedinLink } from '../../data'
import Link from 'next/link';

function Contact({isDark}) {
    
    const emailList = emails.join(', ');
    return (
        <section id='contact' className='flex flex-col lg:flex-row p-4 justify-center items-center min-h-screen w-full max-w-[99vw] relative top-0 left-0 gap-4'>

            <div 
            
            className='flex flex-col items-center justify-center gap-4 '>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold'>Contact Me</h2>
                <p className='text-sm sm:text-base md:text-lg text-gray-300'>Feel free to reach out</p>
                <div className='flex flex-col gap-3'>
                {emails.map((email, index) => (
                    <Link key={index} href={`mailto:${email}`} className='flex items-center gap-2 hover:text-blue-500 transition-colors duration-300'>
                        <Mail className='w-5 h-5' />
                        {email}
                        </Link>
                ))}

                <Link href={githubLink} className='flex items-center gap-2 hover:text-blue-500 transition-colors duration-300'>
                    <Github />
                    Rohit-Solanki-6105
                </Link>
                <Link href={githubLink} className='flex items-center gap-2 hover:text-blue-500 transition-colors duration-300'>
                    <Linkedin />
                    Rohit Solanki
                </Link>
                </div>
            </div>
            {/* contact form */}
            <form 
            style={{
                background: "rgba(255, 255, 255, 0.05)",
            }}
            className='flex backdrop-blur-md rounded-lg flex-col gap-4 w-full max-w-md' action={`mailto:${emailList}`} encType='text/plain'>
                <div className='relative group'>
                    <input
                        type='text'
                        name='name'
                        placeholder='Your Name'
                        className='w-full p-3 rounded-lg bg-transparent outline-none  placeholder-white/70 transition-all duration-300 focus:placeholder-white/90 focus:scale-[1.02] border border-transparent focus:border-white/20'
                        required
                        suppressHydrationWarning
                    />
                    <div className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-500 group-focus-within:w-full'></div>
                </div>
                <div className='relative group'>
                    <input
                        type='email'
                        name='email'
                        placeholder='Your E-mail'
                        className='w-full p-3 rounded-lg bg-transparent outline-none  placeholder-white/70 transition-all duration-300 focus:placeholder-white/90 focus:scale-[1.02] border border-transparent focus:border-white/20'
                        required
                        suppressHydrationWarning
                    />
                    <div className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-500 group-focus-within:w-full'></div>
                </div>

                <div className='relative group'>
                    <textarea
                        name='msg'
                        placeholder='Message'
                        className='w-full p-3 rounded-lg max-w-lg max-h-lg bg-transparent outline-none  placeholder-white/70 transition-all duration-300 focus:placeholder-white/90 focus:scale-[1.02] border border-transparent focus:border-white/20'
                        required
                        suppressHydrationWarning
                    />
                    <div className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-500 group-focus-within:w-full'></div>
                </div>
                <button type='submit' className='bg-gray-700/20 rounded-lg'
                suppressHydrationWarning
                >
                    <AnimatedDiv isDark={isDark} className='px-4 py-3'>
                        <div className='flex flex-row gap-2 justify-center items-center'>
                            Send <SendIcon />
                        </div>
                    </AnimatedDiv>
                </button>
            </form>
        </section>
    )
}

export default Contact
