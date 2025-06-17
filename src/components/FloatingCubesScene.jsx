'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef, Suspense, useMemo } from 'react'
import * as THREE from 'three'

export default function FloatingCubesScene({isDark}) {
    
    return (
        <Canvas
            camera={{ position: [0, 0, 15], fov: 60 }}
            style={{ width: '99vw', height: '100vh', background: isDark ? '#0d0d0d' : '#a0a0a0' }}
        >
            <ambientLight intensity={0.3} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <fog attach="fog" args={['#0d0d0d', 10, 25]} />
            <Suspense fallback={null}>
                <Cubes isDark={isDark} />
                {/* <Beams /> */}
            </Suspense>
            <OrbitControls enableZoom={false} />
        </Canvas>
    )
}

function Cubes({isDark}) {
    const cubes = Array.from({ length: 150 }, () => ({
        position: [
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20,
        ],
        scale: Math.random() * 4 + 0.5,
        rotationSpeed: [
            Math.random() * 0.005,
            Math.random() * 0.005,
            Math.random() * 0.005,
        ],
        floatSpeed: Math.random() * 0.5 + 0.5,
        floatOffset: Math.random() * Math.PI * 2,
    }))

    return (
        <>
            {cubes.map((props, index) => (
                <FloatingCube key={index} {...props} isDark={isDark} />
            ))}
        </>
    )
}

function FloatingCube({ position, scale, rotationSpeed, floatSpeed, floatOffset, isDark }) {
    const ref = useRef()

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime()
        ref.current.rotation.x += rotationSpeed[0]
        ref.current.rotation.y += rotationSpeed[1]
        ref.current.rotation.z += rotationSpeed[2]
        ref.current.position.y = position[1] + Math.sin(t * floatSpeed + floatOffset) * 0.5
    })

    return (
        <mesh ref={ref} position={position} scale={scale}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial
                color={isDark ? "#111111" : "#f0f0f0"} // base color (e.g., dark gray for dark mode, light gray for light mode)
                emissive={isDark ? "#0f0f0f" : "#a0a0a0"}       // glowing color (e.g., indigo)
                emissiveIntensity={1.5}  // brightness of glow
                roughness={0.5}
                metalness={0.2}
            />
        </mesh>
    )
}

function Beams() {
    const groupRef = useRef();
    const beamCount = 20;

    const beams = useMemo(() => {
        return Array.from({ length: beamCount }, () => {
            const angle = Math.random() * Math.PI * 2;
            const z = -Math.random() * 50;
            const x = Math.cos(angle) * 1.5;
            const y = Math.sin(angle) * 1.5;
            return {
                position: new THREE.Vector3(x, y, z),
                speed: 0.2 + Math.random() * 0.1,
            };
        });
    }, []);

    useFrame(() => {
        if (!groupRef.current) return;
        groupRef.current.children.forEach((line) => {
            line.position.z += line.userData.speed;
            if (line.position.z > 3) {
                line.position.z = -50;
            }
        });
    });

    return (
        <group ref={groupRef}>
            {beams.map((beam, i) => (
                <mesh
                    key={i}
                    position={beam.position.clone()}
                    userData={{ speed: beam.speed }}
                >
                    <cylinderGeometry args={[0.02, 0.02, 2, 8]} />
                    <meshStandardMaterial
                        color="#4f46e5"
                        emissive="#4f46e5"
                        emissiveIntensity={6}
                        metalness={1}
                        roughness={0.1}
                    />
                </mesh>
            ))}
        </group>
    );
}
