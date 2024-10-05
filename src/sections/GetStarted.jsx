import { seo } from "../assets/images"
import Buttons from "../components/Buttons"

const GetStarted = () => {
  return (
    <section className="bg-black text-white py-16 px-8 md:px-20 flex flex-col 
      md:flex-row justify-between items-center">
        <div className="md:w-1/2 flex flex-col items-start">
          <div className="text-orange-500 text-4xl">&#10077;</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Boost Your Online Presence with Expert SEO Services.
          </h1>
          <div className="mt-4 w-24 h-1 bg-orange-500 mb-6"></div>
          {/* <div className="border-t-2 border-orange-600 w-24 mt-2 mb-6"></div> */}
          <h3 className="text-base md:text-lg leading-relaxed mb-8">
            Rank Higher, Get More Traffic, and Grow Your Business with Proven SEO Strategies.
          </h3>
          <Buttons label="Get Started"
            className="bg-orange-600 text-white py-3 px-6 rounded-full hover:bg-orange-800 transition-all"
          />
        </div>

        <div className="md:w-1/2 text-left flex flex-col items-start md:ml-16 mt-8 md:mt-0">
          <img src={seo} alt="seo image" width={450} height={450} className="rounded-md" />
        </div>
    </section>
  )
}

export default GetStarted
