"use client"
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./BackGroundGredientAnimation";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import MagicButton from "./MagicButton";
import { IoCheckmarkDone, IoCopyOutline } from "react-icons/io5";
import { useState } from "react";
import { TextGenerateEffect } from "./TextGenerateEffect";
import { FlipWords } from "./FlipWords";
import { Parallax } from "react-scroll-parallax";


export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  id,
  img,
  imgClassName,
  spareImg,
  spareImgClassName,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  spareImg?: string;
  spareImgClassName?: string;
}) => {
  // const [copy, setCopy] = useState(false);

  // const handleCopy = async () => {
  //   try {
  //     await navigator.clipboard.writeText("solanki.rohit.harishbhai@gmail.com");
  //     setCopy(true);
  //     setTimeout(() => setCopy(false), 2000); // Reset after 2 seconds
  //   } catch (err) {
  //     console.error("Failed to copy!", err);
  //   }
  // };
  let [copied , setCopied] = useState(false);
  // let copy = false;
  const handleCopy = () => {
    // alert("hi")
    navigator.clipboard.writeText("solanki.rohit.harishbhai@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
    // copy = true;
  };
  return (
    <div
      className={cn(
        "overflow-hidden row-span-1 relative rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 ",
        className
      )
      }
      style={{
        background: 'transparent'
      }}
    >
      {id==3 && (
      // <div>

      // </div>
      <div>
        <BackgroundGradientAnimation className="m-0 rounded-2xl" hwClassName="min-h-[50px] h-full w-full rounded-2xl absolute z-0" />
        <div className="flex flex-col justify-center items-center space-x-2">
          {/* <FlipWords words={["Contact", "Project", "Email"]} className="text-2xl"/> */}
          <div className="flex flex-row justify-center items-center space-x-2 z-100">
            {/* <h1>Email me for project development together</h1> */}
            <TextGenerateEffect words={"Email me for project development together"} className="text-xl z-10 text-center"/>
          </div>
          <div className="flex flex-row justify-center items-center space-x-2">
          <MagicButton
          title={ copied ? "Email Copied !" : "Copy my Email"} 
          icon={copied ? <IoCheckmarkDone />: <IoCopyOutline />} 
          position={"left"}
          handleClick={handleCopy}
          >
          </MagicButton>
          </div>
        </div>
      </div>
    )}
      {header}
      
      {id==1 && (
        <div className="flex flex-col gap-1 lg:gap-5 w-full absolute overflow-hidden">
      <div className="flex flex-row gap-3 lg:gap-8 w-full overflow-hidden">
        {["React JS", "Next JS", "Flutter", "MERN"].map((value) => (
          <span key={value} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-black-200 group-hover:scale-150 w-1/4">
            {value}
          </span>
        ))}
      </div>
      <div className="flex flex-row gap-3 lg:gap-8">
        {["Design", "C/C++", "Python", "MongoDB", "MySQL"].map((value) => (
          <span key={value} className=" py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-black-200 group-hover:scale-150 w-1/4">
            {value}
          </span>
        ))}
      </div>
      <div className="flex flex-row gap-3 lg:gap-8">
        {["Beck-end", "Front-end", "Cyber Security", "Cloud Computing"].map((value) => (
          <span key={value} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-black-200 group-hover:scale-150 w-1/4 mb-8">
            {value}
          </span>
        ))}
      </div>
      <div className="h-[50px]"></div>
    </div>
      )}
      
      <div className={`${id === 6 && 'flex justify-center h-full'}`}>
        <div className="w-full h-full absolute">
          {img && (
            <img 
              src={img}
              alt={img}
              className={cn(imgClassName, 'object-cover object-center')}
            />
          )}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id===5 && 'w-full opacity-80'}`}>
          {spareImg && (
            <img 
            src={spareImg}
            alt={spareImg}
            className={('object-cover object-center w-full h-full')}
          />
          )}
        </div>
      </div>
      
      { id!=3 && (<div className="z-50 group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 z-50">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300 z-50">
          {description}
        </div>
      </div>)}
    </div>
  );
};
