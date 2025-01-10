// components/SkillCard.jsx
import { motion } from 'framer-motion';

type SkillCardProps = {
  title: string;
  skills: string[];
}

export default function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-[#292929] rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <h3 className="text-2xl font-semibold mb-4 text-center">{title}</h3>
      <ul className="list-disc list-inside space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="text-gray-300">{skill}</li>
        ))}
      </ul>
    </motion.div>
  );
}
