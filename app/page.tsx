"use client";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import RecentProjects from "@/components/RecentProjects";
import { IoHome, IoPerson, IoPaperPlaneOutline } from "react-icons/io5";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import ParallaxComponent from "@/components/ui/ParallaxComponent";
import Footer from "@/components/Footer";
import { IoMdContacts } from "react-icons/io";
// import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <ParallaxProvider scrollAxis="vertical">
      {/* <ParallaxComponent /> */}
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[
          { name: "Home", link: "/" , icon: <IoHome />},
          { name: "About", link: "#about" , icon: <IoPerson />},
          { name: "Projects", link: "#projects" , icon: <IoPaperPlaneOutline />},
          { name: "Contacts", link: "#contacts" , icon: <IoMdContacts />},
        ]}/>
        <Hero />
        <Grid />
        
        <RecentProjects />
        <Footer />
      </div>
      </ParallaxProvider>
    </main>
  );
}
