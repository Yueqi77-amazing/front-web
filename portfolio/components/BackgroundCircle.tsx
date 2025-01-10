import { motion } from "motion/react"

type Props = {}

export default function BackgroundCircle({ }: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0,

            }}

            animate={{
                scale: [1, 2, 2, 3, 1],
                opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
                borderRadius: ["20%", "20%", "50%", "80%", "20%"],
            }}
            transition={{
                duration: 2.5,
            }}
            className='relative flex justify-center items-center'>

            <div className='absolute border border-[rgba(159,149,149,0.33)] mt-52
        w-[200px] h-[200px] rounded-full animate-ping'></div>
            <div className='rounded-full absolute border border-[#bcb6b612] mt-52
        w-[300px] h-[300px]  animate-pulse '></div>
            <div className='rounded-full absolute border border-[#9994940a] mt-52
        w-[500px] h-[500px]  '></div>
            <div className='rounded-full absolute border border-[#93939010] mt-52
        w-[700px] h-[700px]  animate-pulse'></div>
            <div className='rounded-full absolute border border-[#535050d4] mt-52
        w-[900px] h-[900px]  '></div>
        </motion.div>
    )
}