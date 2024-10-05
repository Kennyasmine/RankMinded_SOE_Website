import { introBg } from "../assets/images"

const Meeting = () => {
  return (
    <div className="">
        <img src={introBg} alt="profile picture" className="w-10 h-10 rounded-full" />
        <p className="text-gray-800 font-semibold mt-3">Rank Minded</p>
        <p className="text-gray-900 font-bold mb-5">30 Min Meeting</p>
        <div className="flex items-center gap-2 text-gray-700 mb-4 cursor-pointer font-semibold">
            <span>🕒</span>
            <p>30m</p>
        </div>
        <div className="flex items-center gap-2 text-gray-700 mb-4 cursor-pointer font-semibold">
            <span>📹</span>
            <p>Call Video</p>
        </div>
        <div className="flex items-center gap-2 text-gray-700 mb-4 cursor-pointer font-semibold">
            <span>🌍</span>
            <p>Africa/Lagos</p>
        </div>
    </div>
  )
}

export default Meeting
