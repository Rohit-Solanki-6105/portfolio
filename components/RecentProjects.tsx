import React from 'react'
import { SparklesCore } from './ui/Sparkles'
import { AuroraBackground } from './ui/AuroraBackground'
import { CardBody, CardContainer, CardItem } from './ui/3dCard'
import MagicButton from './ui/MagicButton'
import { IoLogoGithub, IoEarthOutline } from 'react-icons/io5'
import { projects } from '@/data'
import Image from 'next/image'

const RecentProjects = () => {
  return (
    <div className='min-h-[100vh] mt-10' id='projects'>
        {/* <AuroraBackground className='absolute inset-0 z-0' children=""/> */}
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={10}
          className="w-full h-full absolute -left-10"
          particleColor="#FFFFFF"
          
        />
        <h1 className='text-blue'>My Recent Projects</h1>
        <div className="grid grid-cols-* gap-3 sm:grid-cols-1 md:grid-cols-2">
        {projects.map((project) => (
          <div key={project.id} >
            <CardContainer className="inter-var py-5">
              <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-transparent dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {project.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {project.des}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src={project.img}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    // href="https://twitter.com/mannupaaji"
                    // target="__blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal flex justify-center items-center"
                  >
                    {typeof(project.icon) == "string" && (
                      project.icon
                    )}
                    {typeof(project.icon) != "string" && (
                      project.icon
                    )}
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    href={project.link}
                    // href="https://github.com/Rohit-Solanki-6105/Line-Printer-Management-System"
                    target="_blank"
                    // as="button"
                    className="px-4 py-4 rounded-xl text-xs font-bold flex flex-col gap-3"
                  >
                    <a href={project.link} target='_blank'>
                      <MagicButton title={'Github Code'} icon={<IoLogoGithub/>} position={'left'} />
                    </a>
                    {
                      project.demoLink &&
                      <a href={project.demoLink} target='_blank' title="Demo">
                        <MagicButton title={'Demo'} icon={<IoEarthOutline/>} position={'left'} />
                      </a>
                    }
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        ))}
          {/* <div>
          <CardContainer className="inter-var py-5">
            <CardBody className="relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-transparent dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                LPMS
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Hover over this card to unleash the power of CSS perspective
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src='https://repository-images.githubusercontent.com/695523802/cf949ae4-0cbb-4dad-8744-a02542e05125'
                  // src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  
                  href="https://twitter.com/mannupaaji"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-bold"
                >
                  Sign up
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
          </div>
          <div>
          <CardContainer className="inter-var py-5">
            <CardBody className="relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-transparent dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                Make things float in air
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Hover over this card to unleash the power of CSS perspective
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  
                  href="https://twitter.com/mannupaaji"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  // as="button"
                  className="px-4 py-2 rounded-xl text-xs font-bold"
                >
                  <span>
                  <MagicButton title={'Github'} icon={<IoLogoGithub />} position={'left'} />
                  </span>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
          </div>
          <div>
          <CardContainer className="inter-var py-5">
            <CardBody className="relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-transparent dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                Make things float in air
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Hover over this card to unleash the power of CSS perspective
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  
                  href="https://twitter.com/mannupaaji"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-bold"
                >
                  Sign up
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
          </div> */}
        </div>
    </div>
  )
}

export default RecentProjects
