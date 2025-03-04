const Footer =()=>{
    return(
        <div className="bg-[#071C3C] text-white py-12 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

          <div>
            <h2 className="text-lg font-bold text-[#38BDF8]">Logistics</h2>
            <ul className="mt-3 space-y-2 text-gray-300">
              <li>• Accommodation will be provided for teams near the hacker house venue in Lagos</li>
              <li>• Meals will be provided</li>
            </ul>
            <div className="flex items-center space-x-4 mt-12">
              <img src="/semicolon-logo.svg" alt="Semicolon Logo" className="h-6 cursor-pointer" />
              <span className="text-gray-400">|</span>
              <img src="/sui-logo.svg" alt="Sui Logo" className="h-6 cursor-pointer" />
            </div>
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#38BDF8]">Resources and Support</h2>
            <p className="mt-3 text-gray-300">
              Semicolon is providing free training on Sui Move, sponsored by the Sui Foundation. It isn’t too late to register for the current round of classes. Click on this link to register:
              <a href="https://bit.ly/SC-Sui-Training" target="_blank" rel="noopener noreferrer" className="text-[white] underline"> https://bit.ly/SC-Sui-Training</a>.
            </p>
            <p className="mt-4 text-gray-300">
              Semicolon is a workforce development company that is solving the problem of youth unemployment by training software engineers and techpreneurs. Through our one-year techpreneurship program, we help individuals develop required skills to compete as software engineers in the global market. To learn more about Semicolon, please visit
              <a href="https://www.semicolon.africa" target="_blank" rel="noopener noreferrer" className="text-[white] underline"> www.semicolon.africa</a>.
            </p>
          </div>

        </div>
      </div>
    )
}
export default Footer 