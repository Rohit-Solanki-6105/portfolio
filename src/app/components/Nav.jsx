'use client';
import { X, Menu } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

function Nav() {
    const [isOpen, setIsOpen] = React.useState(false);
    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full flex justify-between items-center z-50 text-white bg-transparent">
            {/* Brand */}
            <Link
                href="/"
                className="py-4 px-6 -skew-x-[45deg] rounded-br-lg"
                style={{
                    boxShadow: '1px 1px 0px white',
                }}
            >
                <h2 className="skew-x-[45deg]">Rohit Solanki</h2>
            </Link>

            {/* Toggle button */}
            <button
                className="lg:hidden p-4 z-50 fixed top-0 right-10 text-white "
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Navigation menu */}
            <div
                className={`
          ${isOpen ? 'flex' : 'hidden'} 
          absolute top-full right-0 w-full flex-col items-center 
          bg-black lg:bg-transparent lg:static lg:flex lg:flex-row 
          lg:skew-x-[45deg] rounded-bl-lg lg:w-fit
        `}
                style={{
                    boxShadow: '-1px 1px 0px white',
                }}
            >
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 py-4 px-4 lg:px-6 skew-x-0 lg:-skew-x-[45deg] w-full lg:w-auto">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="hover:text-gray-400 transition-colors duration-300 text-white text-center"
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
