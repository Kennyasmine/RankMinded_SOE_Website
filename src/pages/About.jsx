import { myImage } from "../assets/images"

const About = () => {
  return (
    <section className="bg-[#080808] text-white py-8 px-2">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start mt-44">
        <div className="relative lg:w-1/2">
          <img src={myImage} alt="About Me" className="w-full h-[500px] object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
        </div>
        <div className="lg:w-1/2 lg:-ml-32 z-10">
          <div className="flex justify-center items-center mb-4">
            <span className="text-orange-500 text-4xl mx-2">&#10022;</span>
            <span className="text-orange-500 text-2xl">&#10022;</span>
          </div>
          <h2 className="text-4xl font-bold">
            A Little Story About Myself
          </h2>
          <div className="mt-4 w-24 h-1 bg-orange-500 mx-auto"></div>
          <p className="bg-black p-7 text-xl leading-relaxed mb-6 mt-10">
            At RankMinded, we believe that SEO is more than just rankings—it’s about connecting
            your business with the right audience at the right time. With a focus on data-driven
            strategies and industry best practices, We work closely with clients to create personalized
            SEO solutions that deliver measurable results.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
