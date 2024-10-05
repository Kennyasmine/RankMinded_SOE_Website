const TimeSlot = () => {
    return (
      <div className="p-6 bg-white rounded-lg shadow-lg max-w-xs">
        {/* Header Section */}
        <div className="flex gap-4 justify-between items-center mb-4">
          <p className="text-gray-700 font-bold">Mon 23</p>
          <div className="flex gap-2">
            <button className="bg-gray-200 px-4 py-1 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-300 transition">
              12h
            </button>
            <button className="bg-gray-200 px-4 py-1 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-300 transition">
              24h
            </button>
          </div>
        </div>
  
        {/* Time Slots List */}
        <div className="overflow-y-scroll h-64 border-t border-gray-300 pt-4">
          <ul className="space-y-2">
            {/* Dummy Time Slots */}
            <li className="p-2 text-center border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-200 transition cursor-pointer">
              9:00am
            </li>
            <li className="p-2 text-center border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-200 transition cursor-pointer">
              9:30am
            </li>
            <li className="p-2 text-center border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-200 transition cursor-pointer">
              10:00am
            </li>
            <li className="p-2 text-center border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-200 transition cursor-pointer">
              10:30am
            </li>
            <li className="p-2 text-center border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-200 transition cursor-pointer">
              11:00am
            </li>
            <li className="p-2 text-center border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-200 transition cursor-pointer">
              11:30am
            </li>
            <li className="p-2 text-center border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-200 transition cursor-pointer">
              12:00pm
            </li>
            <li className="p-2 text-center border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-200 transition cursor-pointer">
              12:30pm
            </li>
            <li className="p-2 text-center border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-200 transition cursor-pointer">
              1:00pm
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default TimeSlot;
  