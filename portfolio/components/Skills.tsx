"use client";
import { skills } from "@/data/skillsData";
import { motion } from "motion/react";
const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 200
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.06 * index,
        }

    })
};
export default function Skills() {
    // const {ref} =useSe
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
            text-2xl">Skills</h3>
            <ul className="flex flex-wrap justify-center gap-2 text-lg">
                {skills.map((skill, index) => (
                    <motion.li
                        initial="initial"
                        variants={fadeInAnimationVariants}

                        key={index}
                        whileInView="animate"
                        viewport={{
                            once: true,

                        }}
                        custom={index}

                        className="bh-white border border-[#182723]
                    rounded-xl px-5 py-3">{skill}</motion.li>
                ))}
            </ul>




        </motion.div>
    );
}