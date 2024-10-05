import { emailIcon, linkBuild, linkIcon, location, optimization, phone, research, roadMap, seoSearch } from "../assets/icons";
import { build, content, keyResearch, onPage, technical } from "../assets/images";

export const navLinks = [
    { href: "/", label: "Home" },
    { href: "blog", label: "Blog" }, 
    { href: "service", label: "Service" },   
    { href: "about", label: "About" },
    { href: "contact", label: "Contact" },
];

export const works = [
    {
      image: research,
      title: "Keyword Research",
      description: "Keyword research is the foundation of any successful SEO strategy. I dive deep into understanding your target audience and industry to identify the most relevant and high-traffic keywords that can drive qualified traffic to your site. Using advanced tools and techniques, I analyze search volume, competition, and user intent to create a targeted keyword list that aligns with your business goals.",
      decImage: keyResearch,
      contents: [
        {
          name: "Benefits",
          list: "Uncover hidden opportunities that competitors may have overlooked. Target long-tail keywords for higher conversion rates. Align your content with what your audience is actively searching for.",
        },
        {
          name: "Approach",
          list: "Comprehensive competitor analysis. Use of top-tier tools like SEMrush, Ahrefs, and Google Keyword Planner. Creation of a strategic keyword roadmap tailored to your business needs.",
        },
      ],
    },
    {
      title: "On-Page Optimization",
      description: "On-page optimization is about enhancing the elements on your website to improve search engine visibility and user experience. From optimizing title tags, meta descriptions, and headers to ensuring that your content is relevant and structured for both readers and search engines, on-page SEO is a critical component of ranking success.",
      image: optimization,
      decImage: onPage,
      contents: [
        {
          name: "Benefits",
          list: "Improve search engine rankings. Boost user experience with better-structured content. Increase the relevance of your pages for specific keywords.",
        },
        {
          name: "Approach",
          list: "Optimization of title tags, meta descriptions, headers, and content structure. Keyword optimization for each page element. Implementation of SEO best practices for improved on-page visibility.",
        },
      ],
    },
    {
      title: "Technical SEO",
      description: "Technical SEO focuses on the behind-the-scenes elements that affect your website’s performance in search engines. I ensure your website is fast, mobile-friendly, secure, and easy for search engines to crawl and index. By resolving technical issues, your site will be well-equipped to rank higher and provide a seamless experience to users.",
      image: seoSearch,
      decImage: technical,
      contents: [
        {
          name: "Benefits",
          list: "Improved crawlability and indexing by search engines. Faster loading times and better mobile performance. Enhanced security and user experience.",
        },
        {
          name: "Approach",
          list: "Website audit to identify and resolve technical issues. Implementation of structured data, site speed improvements, and mobile optimization. Ensuring compliance with Google’s core web vitals.",
        },
      ],
    },
    {
      title: "Link Building",
      description:
        "Link building is essential for establishing your website’s authority and credibility. I employ white-hat link-building strategies to earn high-quality backlinks from reputable websites, helping to boost your site’s search rankings and drive referral traffic.",
      image: linkBuild,
      decImage: build,
      contents: [
        {
          name: "Benefits",
          list: "Increase domain authority with high-quality backlinks. Boost search engine rankings through external validation. Drive referral traffic from authoritative websites.",
        },
        {
          name: "Approach",
          list: "Use of white-hat link-building techniques. Outreach to reputable websites for backlinks. Creation of linkable content and resources to attract natural backlinks.",
        },
      ],
    },
    {
      title: "Content Strategy",
      description:
        "Content is at the heart of SEO. I help you create engaging, valuable, and optimized content that resonates with your audience and aligns with search engine algorithms. From blog posts and articles to landing pages and product descriptions, I ensure every piece of content serves a purpose in your overall SEO strategy.",
      image: roadMap,
      decImage: content,
      contents: [
        {
          name: "Benefits",
          list: "Create content that speaks directly to your audience’s needs. Rank higher for targeted keywords. Build authority and trust through valuable, well-structured content.",
        },
        {
          name: "Approach",
          list: "Comprehensive content audit and strategy development. Creation of keyword-optimized blog posts, articles, and landing pages. Consistent content calendar to align with business goals and SEO objectives.",
        },
      ],
    },
  ];
  

export const reviews = [
    {
        text: "Working with RankMinded has been a game-changer for our online visibility. Our organic traffic has doubled within three months, and we’re now ranking on the first page for multiple high-value keywords. Highly recommended!",
        author: "John Peterson",
        job: "Founder of TechWave Solutions",
    },
    {
        text: "RankMinded delivered beyond our expectations. Not only did we see a significant boost in our rankings, but their guidance on content strategy helped us engage our audience better. Professional, knowledgeable, and always ready to help!",
        author: "Sarah Williams",
        job: "Owner of Bloom Marketing",
    },
    {
        text: "RankMinded’s SEO expertise transformed our business. From a detailed SEO audit to ongoing optimizations, the results have been incredible. We’ve seen a 150% increase in qualified leads and a noticeable boost in sales.",
        author: "Michael Brown",
        job: "CEO of PureHealth Supplements",
    },
    {
        text: "Partnering with RankMinded was one of the best decisions we made. Their deep understanding of SEO and clear communication set them apart. Our website’s performance has improved drastically, and we’re getting more inquiries than ever.",
        author: "Emma Rodriguez",
        job: "Marketing Director at EcoFashion Hub",
    },
    {
        text: "RankMinded is an absolute SEO wizard! They identified key issues with our site and implemented changes that led to a 300% growth in our search engine traffic. The insights and results are invaluable. If you need SEO, look no further.",
        author: "David Nguyen",
        job: "Founder of Bright Ideas Digital",
    },
]

export const contacts = [
  {
      icon: location,
      text: "16, joseph street, Ota Efun, Osogbo, Osun, Nigeria.",
      href: "/"
  },
  {
      icon: phone,
      text: "+2347036297095, +234915514063",
      href: "/"
  },
  {
      icon: emailIcon,
      text: "fathiaibidun0@gmail.com",
      href: "fathiaibidun0@gmail.com"
  },
  {
      icon: linkIcon,
      text: "www.upwork.com",
      href: "https://www.upwork.com/freelancers/~01c362567a5b8c2475?mp_source=share"
  },
]