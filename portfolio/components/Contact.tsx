import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/16/solid"

type Props = {}

export default function Contact({ }: Props) {
    return (
        <div className='flex relative flex-col text-center md:text-left md:flex-row max-w-7xl
        px-10 justify-evenly mx-auto items-center h-screen'>
            <h3 className='absolute top-24 uppercase text-gray-500 text-2xl tracking-[20px]'>Contact Me</h3>
            <div className='flex flex-col space-y-10 px-0 md:px-10'>
                <h4 className="text-4xl font-semibold text-center">I have got what you need!
                    <span className="underline decoration-[#F7AB0A]"> Lets Talk</span>
                </h4>
                <div className="space-y-10">
                    <div className="flex items-center space-x-5">

                        <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                        <p className="text-2xl">+49 1774411022</p>
                    </div>
                    <div className="flex items-center space-x-5">

                        <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                        <p className="text-2xl">qiqi.zhang@tum.de</p>
                    </div>
                    <div className="flex items-center space-x-5">

                        <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                        <p className="text-2xl">Munich Germany</p>
                    </div></div>
            </div>
        </div>
    )
}