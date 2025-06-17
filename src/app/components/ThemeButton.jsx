'use client'
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes'
import React, { useEffect } from 'react'

function ThemeButton() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);
    useEffect(() => {
        // Ensure the component is mounted before accessing the theme
        setMounted(true);
    }, []);
    if(!mounted) {
        // Prevents hydration mismatch by returning null until mounted
        return null;
    }
    return (
        <button
            className="p-1 rounded-lg hover:bg-slate-700/20 duration-200"
            onClick={() => {
                setTheme(theme === 'dark' ? 'light' : 'dark');
            }}
            suppressHydrationWarning
        >
            {theme === 'dark' ? (
                <MoonIcon />
            ) : (
                <SunIcon />
            )}
        </button>
    )
}

export default ThemeButton
