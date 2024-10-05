import { works } from "../constants"

const Works = () => {
  return (
    <section className="bg-[#080808] py-16 px-6 md:px-16 text-white mx-auto">
      <div className="text-center mb-14">
        <div className="flex justify-center items-center mb-4">
          <span className="text-orange-500 text-4xl mx-2">&#10022;</span>
          <span className="text-orange-500 text-2xl">&#10022;</span>
        </div>
        <h2 className="text-6xl font-semibold text-white">What we can help you do</h2>
        <div className="mt-4 w-24 h-1 bg-orange-500 mx-auto"></div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
          {works.map((work) => (
            <div key={work.title}
              className="bg-[#080808] text-white p-6 shadow-lg border
               border-[#333] hover:bg-black hover:border-[#666666] transition-all"
            >
              <div className="bg-black p-24 hover:bg-[#080808] trasnsition-all">
                <img src={work.image} className="mb-10 filter invert brightness-0 contrast-100" 
                  height={80} width={80} 
                />
                {/* <div className="absolute top-0 left-0 w-full h-full bg-orange-500"
                style={{ mixBlendMode: 'multiply' }}></div> */}
                <h3 className="text-4xl font-bold mb-14">{work.title}</h3>
                <p className="text-lg mb-6">{work.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Works
