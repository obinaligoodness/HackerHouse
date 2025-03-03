const About =()=>{
    return(
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto px-12 py-16">
        <div className="tw-justify-center items-center">
          <div className="relative w-[350px] h-[350px] bg-[#0A1739] rounded-full overflow-hidden flex items-center justify-center">
            <img
              className="w-[100%] h-[100%] object-cover"
              src="/about-sui-image.svg"
              alt="person"
            />
            <div className="absolute top-4 left-4 bg-white text-black text-sm px-3 py-1 rounded-lg flex items-center shadow-md">
              <img src="/icon-web3.svg" alt="Web3 Icon" className="w-4 h-4 mr-2" />
              Web 3.0
            </div>

            <div className="absolute bottom-4 right-4 bg-white text-black text-sm px-3 py-1 rounded-lg flex items-center shadow-md">
              <img src="/icon-blockchain.svg" alt="Blockchain Icon" className="w-4 h-4 mr-2" />
              Blockchain Tech
            </div>
          </div>
        </div>



        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-start space-y-4 text-black">
          <h2 className="mb-6 text-2xl font-bold text-blue-600">
            About SUI Lagos Hacker House
          </h2>

          <p className="text-12 sm:text-16 leading-relaxed">
            <span className="font-semibold text-blue-600">Sui Lagos Hacker House</span>  is a 6-day event that is designed to bring together developers, engineers, builders, innovators, and blockchain enthusiasts who are interested in building on the <span className="font-semibold"> Sui blockchain.</span>
          </p>

          <p className="text-12 sm:text-16 leading-relaxed">
            The event will feature workshops, mentorship and coaching sessions, hacking, and networking opportunities to encourage innovation and collaboration. Attendees will learn about the Sui blockchain, develop skills to build robust solutions using Sui and prepare for the <span className="font-semibold text-blue-600 underline"> Sui Overflow 2023 Hackathon,</span> a global competition with over $500,000 in combined prizes.
          </p>

          <p className="text-12 sm:text-16 leading-relaxed">
            The Sui Lagos Hacker House is implemented by <span className="font-semibold underline">  Semicolon</span> and sponsored by <span className="font-semibold underline">  Sui Foundation.</span>
          </p>
        </div>
      </div>
    )
}
export default About