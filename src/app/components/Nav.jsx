'use client';
import { X, Menu } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import ThemeButton from './ThemeButton';

function Nav({isDark}) {
    const [isOpen, setIsOpen] = React.useState(false);
    
    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];


    return (
        <nav className={`fixed top-0 left-0 p-0 w-full flex justify-between  z-50 text-${isDark ? 'white' : 'black'} bg-transparent `}>
            {/* Brand */}
            <Link
                href="/"
                className={`py-4 px-6 h-fit pl-12 -translate-x-8 -skew-x-[45deg] rounded-br-lg backdrop-blur-xl`}
                style={{
                    boxShadow: `1px 1px 0px ${isDark ? 'white' : 'black'}`,
                    // backdropFilter: `blur(${isScrolled ? '15' : '0' }px)`
                }}
            >
                <h2 className="skew-x-[45deg]">Rohit Solanki</h2>
            </Link>

            {/* Toggle button */}
            <button
                className="lg:hidden p-4 z-50 fixed top-0 right-10 "
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Navigation menu */}
            <div
                className={`
          ${isOpen ? 'flex' : 'hidden'} 
          absolute top-full right-0 w-full flex-col items-center 
           lg:bg-transparent lg:static lg:flex lg:flex-row 
          lg:skew-x-[45deg] rounded-bl-lg lg:w-fit backdrop-blur-xl pr-12 translate-x-8
        `}
                style={{
                    boxShadow: `-1px 1px 0px `+ (isDark ? 'white' : 'black'),
                    
                }}
            >
                
                <div className="flex flex-col justify-center items-center lg:flex-row gap-4 lg:gap-6 py-4 px-4 lg:px-6 skew-x-0 lg:-skew-x-[45deg] w-full lg:w-auto">
                    <ThemeButton />
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="hover:text-gray-400 transition-colors duration-300  text-center"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}

export default Nav;
