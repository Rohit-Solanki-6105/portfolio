import { Parallax } from "react-scroll-parallax";
import React from 'react';

const ParallaxComponent = () => {
    return (
        // <div className="relative h-[500px] overflow-hidden">
            <Parallax speed={100} translateX={[-20, 10]}  className="fixed inset-0">
                <img 
                    src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Parallax Image" 
                    className="w-full h-full object-cover"
                />
            </Parallax>
        //     <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10">
        //         <h1 className="text-4xl text-white">Parallax Effect</h1>
        //     </div>
        // </div>
    );
}

export default ParallaxComponent;
