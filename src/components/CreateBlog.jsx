
const CreateBlog = () => {
  return (
    <div className="mt-5 mb-10 px-4 sm:px-6 lg:px-8 border-b border-[#fff]">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">Create quality content for humans, not for search engines</h2>
        <p className="text-sm sm:text-base lg:text-lg mb-7">
            Keyword optimization is vital. But, Google’s algorithm values content that is more useful and friendly to 
            readers. Google wants to provide users with the best possible answers to their queries. So, even with a 
            perfect page, it won’t rank if the content is shallow or irrelevant.
        </p>
        <h4 className="font-bold text-base sm:text-lg lg:text-xl mb-7">Guidelines for Creating High-Quality Content</h4>
        <ul className="list-disc list-inside space-y-2">
            <li className="text-sm sm:text-base">
                Your content should provide a clear response to the reader’s question or need. Avoid fluff and focus on providing clear, actionable insights.
            </li>
            <li className="text-sm sm:text-base">
                <span className="font-bold">Use multimedia</span>: Images, videos, and infographics can boost engagement and rankings.
            </li>
            <li className="text-sm sm:text-base">
                <span className="font-bold">Keep it scanable</span>: Most users don’t read every word. Use short paragraphs, subheadings, bullet points, and visuals. These will help readers find what they need.
            </li>
        </ul>
        <p className="mt-10 font-bold text-sm sm:text-base lg:text-lg mb-10">
            If your article is about “SEO for beginners,” don’t explain the concept of SEO. Break down actionable steps 
            that beginners can take to improve their rankings. Add screenshots or videos of SEO tools in action. 
            They will make the learning process more engaging.
        </p>
    </div>
  )
}

export default CreateBlog
