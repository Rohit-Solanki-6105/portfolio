import AnimatedDiv from '../../components/AnimatedDiv'

import { SendIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Hero({isDark}) {
    return (
        <div className='w-full h-screen z-10 flex items-center justify-center' id='home'>
            <div className='flex flex-col items-center justify-center text-center gap-2'>
                <h3 className={`tracking-[10px] z-10 ${isDark ? "text-gray-400" : "text-slate-900"}` }>DEVELOPER & DESIGNER</h3>
                <h1 className={`font-bold bg-clip-text text-5xl z-10 h-full p-1 ${isDark ? "text-slate-50" : "text-slate-900"}`}>
                    Diving in the Ocean of Knowledge
                </h1>
                <h3 className={`text-lg font-light tracking-widest z-10 text-slate-${isDark ? "50" : "900"}`}>Hi, I&apos;m Rohit Solanki</h3>
                <div className='w-full flex justify-start items-start pt-4 z-10'>
                    <Link href={'#projects'} className='px-6 py-2 relative cursor-pointer rounded-lg'>
                        <AnimatedDiv isDark={isDark} className='text-lg font-semibold py-3 px-4' borderRadius='lg'>
                            <div className='flex flex-row gap-2'>
                                View Projects <SendIcon />
                            </div>
                        </AnimatedDiv>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero
