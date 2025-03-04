import CalendarIcon from "../../../public/CalendarIcon"
import DeadlineIcon from "../../../public/DeadlineIcon"
import LocationIcon from "../../../public/LocationIcon"

const Banner = () => {
    return (
        <div className=" flex flex-col rounded-bl-[12%] relative bg-[#001437] text-white sm:h-[700px]  md:h-[600px] items-center justify-center">
            <div className="flex items-center space-x-4 my-12">
                <img src="/semicolon-logo.svg" alt="Semicolon Logo" className="h-6 cursor-pointer" />
                <span className="text-gray-400">|</span>
                <img src="/sui-logo.svg" alt="Sui Logo" className="h-6 cursor-pointer" />
            </div>
            <div className=""><img src="/woman image.svg" alt="Web3 Icon" className="w-[500px] h-[300px] mr-2" /></div>
            <div className="text-semibold text-center text-3xl italic text-cyan-400 mb-8">Road to Sui overflow</div>
            <div className="relative text-center ">

                <div className="translate-y-12 mx-auto mt-8 w-full max-w-4xl px-4">
                    <div className="rounded-xl bg-white p-6 shadow-lg">
                        <div className="grid gap-6 md:gap-12 md:grid-cols-3">

                            <div className="flex gap-3">
                                <CalendarIcon></CalendarIcon>
                                <div className ="flex flex-col items-start">
                                    <p className="font-bold text-gray-800">March 24-29,</p>
                                    <p className="font-bold text-gray-800">2025</p>
                                </div>
                            </div>

                            <div className="flex  gap-3">
                                <LocationIcon></LocationIcon>
                                <div className ="flex flex-col items-start">
                                    <p className="font-bold text-gray-800">312 Herbert Macaulay,</p>
                                    <p className="font-bold text-gray-800">Sabo, Yaba, Lagos,</p>
                                    <p className="font-bold text-gray-800">Nigeria</p>
                                </div>
                            </div>
                            <div className="flex  gap-3">
                                <DeadlineIcon></DeadlineIcon>
                                <div className ="flex flex-col items-start">
                                    <p className="font-bold text-gray-800">Application Deadline:</p>
                                    <p className="font-bold text-gray-800">March 12, 2025</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
export default Banner