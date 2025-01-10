import ExperienceSection from "./ExperienceSection"

type Props = {}

export default function Experience({ }: Props) {
    return (
        <div className="h-screen flex relative overflow-hidden
        flex-col text-left md:flex-row max-w-full px-10
        justify-evenly mx-auto items-center">
            <h3 className="absolute top-24 uppercase text-gray-500 tracking-[20px]
            text-2xl">Experience

            </h3>
            <div className="w-full flex space-x-5 scrollbar overflow-x-scroll s scrollbar-thumb-[#F7AB0A]/80 p-10 ">
                {/* <ExperienceCard /> */}
                <ExperienceSection />
                {/* <ExperienceCard /> */}
                {/* <ExperienceCard /> */}
            </div>
        </div>
    )
}