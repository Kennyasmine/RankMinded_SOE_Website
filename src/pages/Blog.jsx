import AssessBlog from "../components/AssessBlog"
import CreateBlog from "../components/CreateBlog"
import FocusBlog from "../components/FocusBlog"
import LeverageBlog from "../components/LeverageBlog"
import OptimizeBlog from "../components/OptimizeBlog"
import UnderstandBlog from "../components/UnderstandBlog"

const Blog = () => {
  const seowork = "https://images.unsplash.com/photo-1562577309-2592ab84b1bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG93JTIwc2VvJTIwd29ya3N8ZW58MHx8MHx8fDA%3D"
  return (
    <div className="bg-[#080808] text-white py-8 px-2 mt-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mt-5 mb-10 border-b border-[#fff]">
          6 Effectives Guidelines on How to Rank for
          Keywords that Drive Traffic on Google
        </h2>
        <h2 className="text-2xl text-orange-500 font-bold text-center mt-5 mb-10">Introduction</h2>
        <p>
            Struggling to rank your website or business on Google despite putting in hours of effort? You’re not alone. 
            The problem isn’t usually a lack of effort but a lack of strategy. It’s tough to rank for the right keywords in today’s digital space. 
            They drive traffic, but it’s a competitive market. It’s more than writing content and hoping for the best. 
            It’s about being intentional. You must target keywords using data and strategy. 
            Let’s explore the steps to rank for keywords. They should drive traffic to your website, YouTube channel, or business.
        </p>
        <img src={seowork} className="mx-auto w-full sm:w-2/3 lg:w-1/2 mt-7" alt="research" />
        <UnderstandBlog />
        <FocusBlog />
        <OptimizeBlog />
        <CreateBlog />
        <LeverageBlog />
        <AssessBlog />
      </div>
    </div>
      
  )
}

export default Blog
