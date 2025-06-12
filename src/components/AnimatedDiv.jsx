"use client"
import React from 'react'
import { motion } from 'framer-motion'

// type ButtonProps = {
//     children: React.ReactNode;
//     onClick?: () => void;
//     className?: string;
//     borderRadius?: "sm" | "md" | "lg" | "full" | "none" | `[${string}]`;
// } & React.ButtonHTMLAttributes<HTMLButtonElement>;

function AnimatedDiv({ children, onClick=() => {}, className='', borderRadius="lg",  ...props }) {
    return (
        <motion.div className={`relative cursor-pointer rounded-${borderRadius} ${className}`}
            {...props}
            initial={{
                "--angle": "0deg",
            }}
            animate={{
                "--angle": "360deg",  // Rotating the gradient
            }}
            transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 3,
                ease: "linear",
            }}
            onClick={onClick}
        >
            <span className={`rounded-${borderRadius}`}>
                {children}
            </span>
            <span className={`inset-0 absolute block rounded-${borderRadius} linear-overlay p-[0.5px]`} />
        </motion.div>
    )
}

export default AnimatedDiv
