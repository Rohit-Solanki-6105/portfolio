"use client";
import React, { useEffect, useRef } from "react";

const AnimatedHelix = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;

        canvas.width = width;
        canvas.height = height;

        // const waveConfigs = [
        //     { color: "teal", height: 60, frequency: 0.008, speed: 0.015, spacing: 20, length: 10 },
        //     { color: "skyblue", height: 40, frequency: 0.012, speed: 0.02, spacing: 25, length: 15 },
        //     { color: "cyan", height: 50, frequency: 0.01, speed: 0.018, spacing: 22, length: 12 },
        //     { color: "deepskyblue", height: 35, frequency: 0.014, speed: 0.022, spacing: 28, length: 18 },
        //     { color: "aqua", height: 55, frequency: 0.009, speed: 0.017, spacing: 26, length: 14 },
        //     { color: "slate", height: 52, frequency: 0.007, speed: 0.017, spacing: 30, length: 17 },
        // ];
        const waveConfigs = [
            { color: "#004d40", height: 100, frequency: 0.006, speed: 0.015, spacing: 30, length: 15 },
            { color: "#62748e", height: 80, frequency: 0.010, speed: 0.02, spacing: 35, length: 20 },
            { color: "#37474f", height: 110, frequency: 0.008, speed: 0.018, spacing: 32, length: 17 },
            { color: "deepskyblue", height: 75, frequency: 0.012, speed: 0.022, spacing: 38, length: 24 },
            { color: "grey-700", height: 95, frequency: 0.007, speed: 0.017, spacing: 36, length: 19 },
            { color: "slate", height: 92, frequency: 0.005, speed: 0.017, spacing: 40, length: 22 },
            // { color: "emerald", height: 72, frequency: 0.008, speed: 0.015, spacing: 37, length: 21 },
        ];

        const waves = waveConfigs.map((config) => ({
            angle: 0,
            lines: [],
            ...config,
        }));

        function generateLines() {
            waves.forEach((wave) => {
                wave.lines.length = 0;

                for (let x = -wave.length; x < width; x += wave.spacing) {
                    const speed = Math.random() * 2 + 1; // Random forward speed
                    wave.lines.push({
                        x1: x,
                        y1: height / 2 + Math.sin(wave.angle + x * wave.frequency) * wave.height,
                        x2: x + wave.length,
                        y2: height / 2 + Math.sin(wave.angle + (x + wave.length) * wave.frequency) * wave.height,
                        speed,
                    });
                }
            });
        }

        function drawLines() {
            if (!ctx) return;
            ctx.clearRect(0, 0, width, height);

            waves.forEach((wave) => {
                ctx.strokeStyle = wave.color;
                ctx.lineWidth = 1;

                wave.lines.forEach((line) => {
                    ctx.beginPath();
                    ctx.moveTo(line.x1, line.y1);
                    ctx.lineTo(line.x2, line.y2);
                    ctx.stroke();
                });
            });
        }

        function animate() {
            waves.forEach((wave) => {
                wave.angle += wave.speed; // Keep waves moving

                wave.lines.forEach((line) => {
                    line.x1 += line.speed;
                    line.x2 += line.speed;

                    // Update y position to stay in the wave
                    line.y1 = height / 2 + Math.sin(wave.angle + line.x1 * wave.frequency) * wave.height;
                    line.y2 = height / 2 + Math.sin(wave.angle + line.x2 * wave.frequency) * wave.height;

                    // Reset position when off-screen
                    if (line.x1 > width) {
                        line.x1 = -wave.length;
                        line.x2 = line.x1 + wave.length;
                    }
                });
            });

            drawLines();
            requestAnimationFrame(animate);
        }

        generateLines();
        animate();

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            generateLines();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
    <div>
        <canvas ref={canvasRef} className="h-screen w-[99vw] block z-0" />
    </div>
    )
};

export default AnimatedHelix;
