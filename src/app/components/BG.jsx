import AnimatedHelix from '../../components/AnimatedHelix'
import FloatingCubesScene from '../../components/FloatingCubesScene'

import React from 'react'

function BG({isDark}) {
    return (
        <div className='w-full h-screen fixed top-0 left-0 z-0'>
            <section className="relative top-0 left-0">
                <div className="absolute top-0 left-0 w-full h-full z-2">
                    <AnimatedHelix />
                </div>
                <div className="absolute top-0 left-0 w-full h-full z-0">
                    <FloatingCubesScene isDark={isDark}/>
                </div>
            </section>
        </div>
    )
}

export default BG
