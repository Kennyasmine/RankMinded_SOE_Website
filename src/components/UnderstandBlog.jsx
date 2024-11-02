
const UnderstandBlog = () => {
    const research = "https://media.istockphoto.com/id/1160735561/photo/keyword-research-text-concept-on-blue-directional-sign.webp?a=1&b=1&s=612x612&w=0&k=20&c=ocqjJ0aG-uyrMrcQhhY7trK4o77BrQT9Uwe4m4UHXyU="
  return (
    <div className="mt-5 mb-10 px-4 sm:px-6 lg:px-8 border-b border-[#fff]">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">Understand search intent before anything else</h2>
        <p className="text-sm sm:text-base lg:text-lg mb-7">
            The most important step in keyword research and content creation is to understand search intent. 
            Search intent is the underlying reason why a user types a certain query into Google. 
            Knowing what your audience is searching for helps you tailor your content to match their needs. 
            Google wants to give the most relevant results. So, it rewards content that aligns with users’ intent.
        </p>
        <h4 className="font-bold text-base sm:text-lg lg:text-xl mb-7">Search Intent</h4>
        <ul className="list-disc list-inside space-y-2">
            <li className="text-sm sm:text-base">
                <span className="font-bold">Informational</span>: The user is seeking information. For example, &ldquo;How does SEO work?&ldquo;
            </li>
            <li className="text-sm sm:text-base">
                <span className="font-bold">Navigational</span>: The user is looking for a specific website or brand, such as &ldquo;Neil Patel’s SEO blog.&ldquo;
            </li>
            <li className="text-sm sm:text-base">
                <span className="font-bold">Transactional</span>: The user is ready to make a sale or complete an action. An example might be &ldquo;buy SEO tools online.&ldquo;
            </li>
        </ul>
        <p className="mt-10 font-bold text-sm sm:text-base lg:text-lg mb-10">
            If you’re writing about &ldquo;best SEO tools,&ldquo; users might want to buy them. They are likely ready to compare tools. 
            Your content must inform. Also, provide links or recommendations. They should help users take the next step.
        </p>
        <img src={research} className="mx-auto w-full sm:w-2/3 lg:w-1/2 mb-5" alt="research" />
    </div>

  )
}

export default UnderstandBlog
