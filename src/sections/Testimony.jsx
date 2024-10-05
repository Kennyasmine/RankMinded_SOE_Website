import { reviews } from "../constants"

const Testimony = () => {
  return (
    <section className="bg-[#080808] py-16 px-6 md:px-16 text-white mx-auto">
        <div className="text-center mb-14">
            <div className="flex justify-center items-center mb-4">
                <span className="text-orange-500 text-4xl mx-2">&#10022;</span>
                <span className="text-orange-500 text-2xl">&#10022;</span>
            </div>
            <h2 className="text-6xl font-semibold text-white">What Clients Says About Us</h2>
            <div className="mt-4 w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>
        <div className="bg-[#080808] py-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {reviews.map((review) => (
                    <div key={review.author} className="max-w-md mx-auto">
                        <div className="bg-black p-8 shadow-lg text-white cursor-pointer
                            border border-[#333] max-w-3xl mx-auto hover:border-[#555] transition-all">
                            <p className="text-gray-300 mb-6">
                                <span className="text-orange-500 text-4xl">&#10077; </span>
                                {review.text}
                            </p>
                            <div className="flex flex-col items-center gap-1">
                                <h4 className="text-xl font-bold">{review.author}</h4>
                                {/* <span className="">|</span> */}
                                <p className="text-orange-500">{review.job}</p>
                            </div>
                        </div>
                        <div className="text-right text-blue-900 text-6xl mt-10">
                            {/* &#10077; */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Testimony
