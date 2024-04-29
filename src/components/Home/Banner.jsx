import BannerSlider from "./BannerSlider";

export default function Banner() {
  return (
    <div className="bg-teal-100 px-4 md:px-24 pt-12 pb-8 md:py-20 flex flex-col-reverse md:flex-row justify-between items-center">
      <div className="w-full md:w-1/2 mt-10 md:mt-0">
        <h1 className="text-3xl md:text-5xl font-bold">
          Buy and sell your books
        </h1>
        <h1 className="text-3xl md:text-5xl font-bold text-blue-600 my-3 md:my-5">
          for the best prices
        </h1>
        <h1 className="text-base text-slate-600">
          Find and read more books you will love, and keep track of the books
          you want to read. Be part of the books lover community.
        </h1>
      </div>
      <div className="w-full md:w-1/2">
        <BannerSlider />
      </div>
    </div>
  );
}
