const Participation =()=>{
    return(
        
      <div className="bg-[#F6F6F6] ">
      <div className="bg-white rounded-lg p-6 md:p-8 flex flex-col md:flex-row gap-4 md:gap-0  items-center  max-w-6xl mx-auto">
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/participation-requirement-image.png"
            alt="Participation Requirements"
            className="w-full max-w-sm md:max-w-md rounded-lg object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2">
          <h2 className="text-lg md:text-2xl font-bold text-blue-600">
            Participation Requirements
          </h2>
          <ul className="mt-4 space-y-3 text-gray-700">
            <div className="flex items-center gap-3">
              <div className="flex h-6 aspect-square items-center justify-center rounded-full bg-cyan-500 text-white">✓</div>
              <p>Teams must be physically present at the venue in Lagos throughout the duration of the hacker house (March 24-29).</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-6 aspect-square items-center justify-center rounded-full bg-cyan-500 text-white">✓</div>
              <p>Teams should ensure they can be fully engaged and attentive to their projects throughout this period.</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-6 aspect-square items-center justify-center rounded-full bg-cyan-500 text-white">✓</div>
              <p>All participants will be required to adhere to the event guidelines and code of conduct.</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-6 aspect-square items-center justify-center rounded-full bg-cyan-500 text-white">✓</div>
              <p> Intellectual property created by teams during the hacker house will be retained by those teams.</p>
            </div>
          </ul>
        </div>
      </div>

    </div>
    )
}
export default Participation