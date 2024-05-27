import { gridItems } from '@/data'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { BackgroundBeams } from './ui/BackgroundBeams'
import { Parallax } from 'react-scroll-parallax'

const Grid = () => {
  return (
    <section id='about'>
      
    {/* <Parallax translateX={[10, 0]} speed={50}> */}
        
      {/* <BackgroundBeams className='inset-0 z-10 h-[100vh] absolute' /> */}
        <BentoGrid>
            {gridItems.map(
                (item) => (
                    
                    <BentoGridItem 
                    id={item.id}
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    className={item.className}
                    header={item.header}
                    icon={item.icon}
                    // img={item.img}
                    // imgClassName={item.imgClassName}
                    
                    />
                ))}
        </BentoGrid>
      {/* </Parallax> */}
    </section>
  )
}

export default Grid
