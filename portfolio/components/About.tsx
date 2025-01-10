"use client"
import { motion } from "motion/react"

type Props = {}

export default function About({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 200 }}
            transition={{ duration: 1.3 }}
            whileInView={{ opacity: 1, y: 0 }}
            id="about"
            className="h-screen relative flex flex-col text-center
        md:text-left md:flex-row max-w-7xl px-10 justify-center mx-auto
        items-center">
            <h3 className="absolute top-24 uppercase text-gray-500 tracking-[20px]
            text-2xl">About

            </h3>
            <motion.img
                initial={{ opacity: 0, x: -200 }}
                viewport={{ once: true }}
                transition={{ duration: 1.3 }}
                whileInView={{ opacity: 1, x: 0 }}
                src="/body.jpg"
                className="-md-20 md:mb-0 flex-shrink-0 w-56 h-56 
                rounded-full object-cover md:rounded-lg md:w-64 
                md:h-96 xl:w-[390px] xl:h-[600px]"
            />
            <div className="space-y-10 px-0 md:px-10">
                <h4 className="text-4xl font-semibold">
                    Here is a <span className="underline decoration-[#F7AB0A]">little</span>{" "} bit about me

                </h4>
                <p className="text-base">
                    I am a software engineer with a passion for web development and
                    design. I have experience working with React, Node.js, and
                    TypeScript. I am also familiar with Python and Java. I am
                    currently looking for opportunities to work on projects that
                    challenge me and help me grow as a developer.</p>
            </div>
        </motion.div>
    )
}