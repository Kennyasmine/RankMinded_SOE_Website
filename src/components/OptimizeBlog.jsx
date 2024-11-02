
const OptimizeBlog = () => {
    const onpage = "https://plus.unsplash.com/premium_photo-1661270415926-37a9d24aff30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8b3B0aW1pemF0aW9ufGVufDB8fDB8fHww"
  return (
    <div className="mt-5 mb-10 px-4 sm:px-6 lg:px-8 border-b border-[#fff]">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">Optimize on-page SEO for better rankings</h2>
        <p className="text-sm sm:text-base lg:text-lg mb-7">
            On-page SEO is about the elements you can control on your website. They can improve its ranking potential. 
            You must optimize your pages for the right keywords to rank high in search results. 
            You must use your focus keyword in key places. These include titles, Meta descriptions, and headers.
        </p>
        <h4 className="font-bold text-base sm:text-lg lg:text-xl mb-7">Breakdown of Key On-Page SEO Tactics</h4>
        <ul className="list-disc list-inside space-y-2">
            <li className="text-sm sm:text-base">
                Put your target keyword in the title tag, Meta description, URL, and headers (H1, H2, and H3). Don’t overstuff.
            </li>
            <li className="text-sm sm:text-base">
                <span className="font-bold">Internal Linking</span>: Linking to related articles on your site helps keep users longer. It also signals to Google that your content is well connected.
            </li>
            <li className="text-sm sm:text-base">
                <span className="font-bold">Readability</span>: To enhance your content’s readability, break it into smaller paragraphs. Use bullet points and add headings for easier navigation.
            </li>
        </ul>
        <img src={onpage} className="mx-auto w-full sm:w-2/3 lg:w-1/2" alt="research" />
        <p className="mt-10 font-bold text-sm sm:text-base lg:text-lg mb-10">
            To use your target keyword, &ldquo;SEO strategy,&ldquo; include it in your blog’s title, the first paragraph, and the 
            content. It should feel organic. Your Meta description should provide a clear outline of what users can 
            expect from your post. Your headers (H2, H3) should also include keyword variations. Internal links can 
            guide users to related content. Examples are &ldquo;local SEO tips&ldquo; and &ldquo;on-page SEO best practices.&ldquo;
        </p>
    </div>
  )
}

export default OptimizeBlog
