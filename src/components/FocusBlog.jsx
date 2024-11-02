
const FocusBlog = () => {
    const focus = "https://media.istockphoto.com/id/186758451/photo/painstaking-research.webp?a=1&b=1&s=612x612&w=0&k=20&c=REcONaU2iuqwM9vHbnfn5SzidzsKBj_6txhIFmEGHZo="
  return (
    <div className="mt-5 mb-10 px-4 sm:px-6 lg:px-8 border-b border-[#fff]">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">Focus on long-tail keywords</h2>
        <p className="text-sm sm:text-base lg:text-lg mb-7">
            Targeted traffic comes from ranking for long-tail keywords. It’s the best way to do it. 
            These are specific, longer phrases. They have lower search volumes but often convert better. 
            Long-tail keywords let you target niche audiences. They are likely further along the buyer’s journey and ready to act.
        </p>
        <p className="text-sm sm:text-base lg:text-lg mb-7">
            Instead of competing for the broad keyword &ldquo;SEO,&ldquo; try more specific phrases. 
            Use &ldquo;best SEO tools for small business owners&ldquo; or &ldquo;how to optimize local SEO for small businesses.&ldquo; 
            They will have less competition and attract a more relevant audience.
        </p>
        <p className="mt-10 text-sm sm:text-base lg:text-lg mb-10">
            <span className="font-bold">Bonus Tips:</span>
            Use free tools like 
            <a href="https://ads.google.com/intl/en_ng/home/tools/keyword-planner/" className="text-orange-500"> Google Keyword Planner</a>, 
            <a href="https://ads.google.com/intl/en_ng/home/tools/keyword-planner/" className="text-orange-500"> Ubersuggest</a>, 
            <a href="https://answerthepublic.com/" className="text-orange-500"> AnswerThePublic</a>,
            <a href="https://www.semrush.com/" className="text-orange-500"> SEMrush</a>, 
            <a href="https://www.ahrefs.com/" className="text-orange-500"> Ahrefs</a>, and 
            <a href="https://moz.com/explorer" className="text-orange-500"> Moz Keyword Explorer</a>. 
            They can help you find long-tail keywords. These tools show related searches. They help you find your audience’s questions about your topic.
        </p>
        <img src={focus} className="mx-auto w-full sm:w-2/3 lg:w-1/2 mb-5" alt="" />
    </div>

  )
}

export default FocusBlog
