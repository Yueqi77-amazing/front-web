// components/ExperienceCard.jsx
"use client";

import { motion } from 'framer-motion';

type Props = {
    title: string;
    company: string;
    date: string;
    duties?: string[];
    image: string;
    logo: string;
}

export default function ExperienceCard({ title, company, date, duties, image, logo }: Props) {
    return (
        <article className='flex flex-col rounded-lg space-y-7 flex-shrink-0 
        items-center w-[500px] xl:w-[900px] snap-center bg-[#292929] p-10 md:w-[600px] cursor-pointer 
        hover:opacity-100 opacity-40 transition-opacity duration-200 overflow-hidden' >
            <motion.img
                initial={{ opacity: 0, y: -100 }}
                viewport={{ once: true }}
                transition={{ duration: 1.3 }}
                whileInView={{ opacity: 1, y: 0 }}
                src={image}
                alt={`${title} Logo`}
                className="w-32 h-32 rounded-full xl:w-[200px]
                           xl:h-[200px] object-cover object-center"
            />

            <div className="px-0 md:px-10" >
                <h4 className="text-4xl font-light">
                    {title}
                </h4>
                <p className='font-bold mt-1 text-2xl'>
                    {company}
                </p>
                <div className='flex space-x-2 my-2'>
                    <img src={logo} alt="Good Icon" className="w-10 h-10 rounded-full" />
                    <img src={logo} alt="Good Icon" className="w-10 h-10 rounded-full" />
                    <img src={logo} alt="Good Icon" className="w-10 h-10 rounded-full" />
                </div>
                <p className='uppercase py-5 text-gray-300'>
                    {date}
                </p>
                <ul className="list-disc space-y-4 ml-5 text-lg">
                    {duties.map((duty, index) => (
                        <li key={index}>{duty}</li>
                    ))}
                </ul>
            </div>

        </article>
    );
}
