// components/ExperienceSection.tsx
"use client";

import { useRef } from 'react';
import ExperienceCard from './ExperienceCard';

export default function ExperienceSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    const handleMouseEnter = (index: number) => {
        const container = containerRef.current;
        const card = cardRefs.current[index];
        if (container && card) {
            const containerWidth = container.offsetWidth;
            const cardWidth = card.offsetWidth;
            const cardLeft = card.offsetLeft;
            const scrollLeft = cardLeft - (containerWidth / 2) + (cardWidth / 2);

            container.scrollTo({
                left: scrollLeft,
                behavior: 'smooth'
            });
        }
    };

    const experiences = [
        {
            title: 'DevOps Engineer',
            company: 'Infineon Technologies',
            date: '2024.1 - 2024.10',
            duties: [
                'Developed and maintained CI/CD pipelines using Jenkins and GitLab CI.',
                'Automated infrastructure deployment using Terraform and Ansible.',
                'Monitored and maintained Kubernetes clusters using Prometheus and Grafana.',
                'Collaborated with development teams to ensure the quality of software releases.'
            ],
            image: '/infineon-logo.png',
            logo: '/good.png'
        },
        {
            title: 'software Developer',
            company: 'Huawei Technologies',
            date: '2023.6 - 2023.12',
            duties: [
                'Operating System Research: Researched and gathered information on operating systems, focusing on OpenHarmony.',
                'Application Development: Developed applications and demos for OpenHarmony.',
                'Deploy on Board: worked with the DAYU200 board to develop and deploy apps.',
                'Ensured application security and data protection.'
            ],
            image: '/huawei.png',
            logo: '/good-job.png'
        },
        {
            title: 'software Developer',
            company: 'Dopamining',
            date: '2023.7 - 2023.12',
            duties: [
                'Flutter App Development: Developed an app using Flutter',
                'designed user flows',
                'implemented UI',
                'conducted unit tests'
            ],
            image: '/dopamining.png',
            logo: '/good-job1.png'
        }

        // 添加更多经验项
    ];

    return (
        <div className="w-full flex space-x-5 p-10" ref={containerRef}>
            {experiences.map((exp, index) => (
                <div
                    key={index}
                    onMouseEnter={() => handleMouseEnter(index)}
                    className="transition-transform duration-300 hover:scale-110"
                    ref={(el) => cardRefs.current[index] = el}
                >
                    <ExperienceCard
                        title={exp.title}
                        company={exp.company}
                        date={exp.date}
                        duties={exp.duties}
                        image={exp.image}
                        logo={exp.logo}
                    />
                </div>
            ))}
        </div>
    );
}
