import { Link } from "react-router-dom";
import awardImg from "../../assets/img/awardbooks.png";

export default function AwradBanner() {
  return (
    <div className="flex gap-2 md:gap-5 items-center mt-5 md:mt-10 py-4 md:py-16 px-4 md:px-24 bg-teal-100">
      <div className="w-2/3 flex flex-col gap-3 md:gap-5">
        <h1 className="text-normal md:text-3xl font-bold">
          2023 National Book Awards for Fiction Shortlist
        </h1>
        <Link to="/about">
          <button className="bg-blue-600 px-4 md:px-6 py-2 md:py-3 w-fit text-white font-bold rounded">
            About Us
          </button>
        </Link>
      </div>

      <div className="w-1/3 flex justify-end">
        <img src={awardImg} className="h-28 w-28 md:h-48 md:w-48" />
      </div>
    </div>
  );
}
