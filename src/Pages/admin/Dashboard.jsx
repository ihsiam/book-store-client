import { visitorDes } from "../../utility/utility";

export default function Dashboard() {
  return (
    <div className="bg-gray-50 md:shadow rounded px-2 py-3 md:px-10 md:py-5">
      <h1 className="text-3xl md:text-5xl font-bold text-center mt-1 md:mt-5">
        DashBoard
      </h1>
      <div className="flex justify-around mt-3 md:mt-8 gap-2">
        {visitorDes.map((des) => (
          <div
            key={Math.random()}
            className="bg-[#FFFFFF] flex flex-col md:flex-row text-center px-2 md:px-5 py-2 md:py-4 rounded-lg shadow gap-1 md:gap-2"
          >
            <h1 className=" text-sm md:text-base font-semibold md:font-bold">
              {des.title}:
            </h1>
            <h1 className="text-sm md:text-base font-semibold md:font-bold text-red-600">
              {des.visitor}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}
