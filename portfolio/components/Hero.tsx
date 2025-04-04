"use client"
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
type Props = {}

export default function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hello, I am Yueqi Zhang",
            "full-stack developer",
            "Coding-Learning-Traveling",
            "Looking for a job",],
        loop: true,
        delaySpeed: 2000,


    });
    return (
        <div className="h-screen flex flex-col space-y-8 justify-center items-center
        text-center overflow-hidden">
            <BackgroundCircle />
            <img className="z-10 relative rounded-full h-32 w-32 mx-auto object-cover"
                src="/photo.jpg" alt=""
            />

            <div className="z-20">
                <h2 className="text-sm uppercase text-grey-500 pb-2 tracking-[15px]">Software Engineer</h2>

                <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10">
                    <span className="mr-3">{text}</span>
                    <Cursor cursorColor="orange" />
                </h1>
                <div className="pt-5">
                    <Link href="#about">
                        <button className="heroButton">About</button>
                    </Link>
                    <Link href="#experience">
                        <button className="heroButton">Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className="heroButton">Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className="heroButton">Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    )

}

