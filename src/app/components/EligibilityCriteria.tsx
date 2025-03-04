const EligibilityCriteria =()=>{
    return(
        <div className=" bg-[#F6F6F6] flex flex-col md:flex-row justify-center items-center py-8 md:py-12 px-4 md:px-6 h-[500px]">
        <div className="grid md:grid-cols-2 items-center justify-center bg-[#001437] text-white p-6 rounded-xl md:p-10 md:gap-8 w-full md:w-[65%] relative md:min-h-[300px]">
          
          <div className="flex-1  md:text-left z-10 sm:gap-4 md:gap-0">
            <h2 className="text-xl md:text-2xl font-bold text-[#00D1D1] mb-3 md:mb-4">
              Eligibility Criteria
            </h2>
            <div className="sm:gap-2 md:gap-0">
              <p className="text-sm md:text-base w-64">
                <span className="font-semibold text-[#00D1D1]">Team Size: </span>
                Between 2-4 members
              </p>
              <p className="text-sm md:text-base">
                <span className="font-semibold text-[#00D1D1]">Age: </span>
                18+ years old
              </p>
              <p className="text-sm md:text-base w-64">
                <span className="font-semibold text-[#00D1D1]">Participants: </span>
                Open to developers, designers, entrepreneurs, and blockchain enthusiasts
              </p>
            </div>
          </div>

          <div className="md:absolute relative w-full md:w-1/2 h-[200px] md:h-[390px] md:-translate-y-[90px] -bottom-4 md:bottom-auto md:right-0 md:top-0 z-0">
            <img
              src='/eligibility-image.svg'
              alt="Eligibility Criteria"
              className="w-full h-full object-contain md:object-cover rounded-lg"

            />
          </div>
        </div>
      </div>
    )
}
export default EligibilityCriteria