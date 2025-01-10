"use client";
import { motion } from "framer-motion";
import { useRef } from "react";

type Props = {};

export default function Projects({ }: Props) {
    const containerRef = useRef<HTMLDivElement>(null);

    const projects = [
        {
            image: "/project.png",
            title: "Management System for Chip Design",
            stack: "Node.js, MongoDB, Vue3",
            description:
                "I work as a full-stack developer and mainly focus on the Database and backend. It is a system that allows importing files, exporting files, creating new projects, editing, and publishing to others.",
        },
        {
            image: "/project2.png",
            title: "HMI for artificial arm",
            stack: "C++, ROS",
            description:
                "I work as a software engineer and mainly focus on the HMI. It is a system that allows users to control the artificial arm and monitor the status of the arm.",
        },
    ];

    return (
        <div
            className="h-screen relative flex overflow-hidden flex-col text-left 
            max-w-full justify-center mx-auto items-center z-0"
        >
            <h3
                className="absolute top-24 uppercase text-gray-500 tracking-[20px]
                text-2xl"
            >
                Projects
            </h3>

            <div
                ref={containerRef}
                className="w-full relative flex flex-col space-y-10 overflow-y-scroll
                overflow-x-hidden snap-y snap-mandatory z-20 scrollbar scrollbar-thin
                scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
            >
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="w-full flex-shrink-0 snap-center flex flex-col space-y-5
                        items-center justify-center p-20 md:p-44 h-screen"
                    >
                        <motion.img
                            className="flex-shrink-0 w-full lg:max-w-3xl"
                            initial={{ opacity: 0, y: -300 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.3 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            src={project.image} // 动态渲染图片
                            alt={project.title}
                        />

                        <div className="space-y-10 px-0 md:px-10 max-w-6xl ">
                            <h4 className="text-4xl font-semibold text-center">
                                <span className="underline decoration-[#F7AB0A]/50">
                                    {project.title}
                                </span>
                            </h4>
                            <p className="text-lg text-center">
                                Technical Stack: {project.stack}
                            </p>
                            <p className="text-base text-center py-1">
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div
                className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] 
                -skew-y-12"
            ></div>
        </div>
    );
}
