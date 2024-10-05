import { works } from "../constants"

const Services = () => {
  return (
    <section className="bg-[#080808] text-white py-8 px-2 mt-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mt-5 mb-10">Our Services</h2>
        <div className="">
          {works.map((work) => (
            <div key={work.title} className="flex flex-col md:flex-row justify-center mb-7 gap-20">
              <img src={work.decImage} alt="key research" width={500} height={450} />
              <div className="flex flex-col gap-3">
                <h3 className="text-xl text-orange-500 font-semibold">{work.title}</h3>
                <p className="text-m">{work.description}</p>
                {work.contents.map((content) => (
                  <div key={content.name} className="flex flex-col gap-2">
                    <h4 className="font-bold text-lg">{content.name}</h4>
                    <ul className="list-disc list-inside">
                      {content.list.split('. ').map((item, idx) => (
                        <li key={idx} className="text-m">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
