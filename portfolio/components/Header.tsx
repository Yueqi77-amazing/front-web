// import { motion } from "motion/react";
"use client"
import Link from 'next/link';

import { motion } from "motion/react";
import { SocialIcon } from 'react-social-icons';
type Props = {};

export default function Header({ }: Props) {
    return (
        <header className='sticky top-0 z-20 p-5 flex justify-between max-w-7xl mx-auto xl:items-center'>
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }}

                animate={{
                    x: 0
                    , opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.2
                }}



                className="flex flex-row items-center">
                <SocialIcon url="https://www.linkedin.com/in/qiqizhang7777/" fgColor="pink"
                    bgColor="transparent" />
                <SocialIcon url="https://github.com/Yueqi77-amazing" fgColor="pink"
                    bgColor="transparent" />
                <SocialIcon url="https://www.xiaohongshu.com/user/profile/5d3db84b000000001202ecd6" fgColor="pink"
                    bgColor='transparent' />
                <SocialIcon url="https://space.bilibili.com/511356361" label="bilibili" fgColor="pink"
                    bgColor='transparent' />

            </motion.div>
            <Link href="#contact" passHref>
                <motion.a
                    initial={{
                        x: 500,
                        opacity: 0,
                        scale: 0.5,
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        duration: 1.2,
                    }}
                    className="flex flex-row items-center text-grey-300 cursor-pointer"
                >
                    <SocialIcon
                        className="cursor-pointer"
                        network="email"
                        fgColor="pink"
                        bgColor="transparent"
                    />
                    <p className="uppercase hidden md:inline-flex text-sm text-grey-400">
                        GET IN TOUCH
                    </p>
                </motion.a>
            </Link>
        </header>
    )
}