import { introBg } from "../assets/images"
import Buttons from "../components/Buttons"

const Hero = () => {
  return (
    <section className="relative bg-right md:bg-[length:170%_auto] 
      bg-cover h-[650px] t-[86px] overflow-hidden mt-16" 
      style={{ backgroundImage: `url(${introBg})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      <div className="flex flex-col text-white z-20 relative font-bold items-end
        justify-center h-full px-8 md:px-32">
        <h1 className="uppercase text-8xl">rank minded</h1>
        <p className="w-full md:w-[750px] mt-10 font-serif mb-5">
          At Rank<span className="text-orange-600">Minded</span>, we believe that SEO is more than just rankings - it`s about connecting
          your business with right audience at the right time. With a focus on data-driven strategies
          and industry best practices, we work closely with clients to create personalized SEO solutions
          that deliver measurable results.
        </p>
        <div className="w-full md:w-auto flex justify-center md:justify-end">
          <Buttons
            label="check out what we do"
            className="uppercase p-5 bg-orange-600 hover:bg-orange-800"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
