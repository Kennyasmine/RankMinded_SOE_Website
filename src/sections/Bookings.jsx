import Calender from "../components/Calender";
import Meeting from "../components/Meeting";
import TimeSlot from "../components/TimeSlot";

const Bookings = () => {
  return (
    <section className="bg-[#080808] py-16 px-6 md:px-16 text-white mx-auto">
      <div className="bg-[#FF6F61] mx-auto max-w-5xl py-16 px-6 md:px-16 flex flex-col justify-center items-center">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 text-white">
          Booking a Free Strategy Call
        </h2>
        <div className="max-w-6xl w-full bg-white rounded-lg shadow-lg p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row gap-5 text-gray-800">
            <div className="flex-1">
              <Meeting />
            </div>
            <div className="flex-1">
              <Calender />
            </div>
            <div className="flex-1">
              <TimeSlot />
            </div>
          </div>
        </div>
        <h2 className="mt-5 text-[#080808] font-bold text-lg sm:text-xl lg:text-2xl -mb-10">
          RankMinded.com
        </h2>
      </div>
    </section>
  );
};

export default Bookings;
