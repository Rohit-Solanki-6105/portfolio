"use client"
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Nav from "./components/Nav";
import About from "./components/About";
import Contact from "./components/Contact";
import BG from "./components/BG";
import Footer from "./components/Footer";
import { useTheme } from "next-themes";
import { Suspense, useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return null; // Prevents hydration mismatch
  }
  return (
    <Suspense fallback={(
      <div className={`${isDark ? "text-white" : "text-black"}`}>
        <Loader2  />
      </div>
    )}>
      <main className={`${isDark ? "text-slate-50" : "text-slate-900"}`}>
        {/* <SplashCursor /> */}
        <Nav isDark={isDark} />
        <BG isDark={isDark} />
        <div className={`w-full h-screen z-50`}>
          <Hero isDark={isDark} />
          <About isDark={isDark} />
          <Projects isDark={isDark} />
          <Contact isDark={isDark} />
          <Footer />
        </div>
      </main>
    </Suspense>
  );
}
