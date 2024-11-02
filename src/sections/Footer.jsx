// import { Link } from "react-router-dom"
// import { footer } from "../constants"

import { facebook, instagram, twitter } from "../assets/icons"


const Footer = () => {
  return (
    <section className="bg-[#080808] -mt-10 text-white p-6">
        <div className="flex justify-between items-center mx-auto max-w-5xl border-b border-b-[#666]">
            <h3 className="text-white font-bold text-2xl">
                Rank
                <span className="text-orange-600">Minded</span>
            </h3>
            <div className="flex gap-3 w-5 h-5 mr-28 filter invert brightness-0 contrast-100 cursor-pointer">
              <img src={facebook} alt="" />
              <img src={twitter} alt="" />
              <img src={instagram} alt="" />
              {/* {footer.map((item) => (
                <div key={item.alt}>
                  <Link to={item.href}>
                    <img src={item.icon} alt={item.alt} className="w-5 h-5
                      filter invert brightness-0 contrast-100 cursor-pointer" />
                      <p className="text-sm">{item.alt}</p>
                  </Link>
                </div>
              ))} */}
            </div>
        </div>
        <div>
          <p className="text-center font-bold text-[#666]">Copyright © 2024 All right reserved</p>
        </div>
    </section>
  )
}

export default Footer
