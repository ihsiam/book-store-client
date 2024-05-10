export default function About() {
  return (
    <div className="mt-5 md:mt-10 px-4 md:px-24">
      <h1 className="text-center text-3xl font-bold">About Book Store</h1>
      <div className="mt-5 md:mt-10 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 lg:w-1/3 flex justify-center">
          <img
            src="https://res2.weblium.site/res/5e5e0e8d2f5ab6002175c447/5e6a0bad5620b60021fd91cb_optimized.webp"
            className="w-[250px] md:w-[350px]"
          />
        </div>
        <div className="mt-5 md:mt-0 w-full md:w-1/2 lg:w-2/3 md:px-10 flex flex-col justify-normal md:justify-around gap-5 md:gap-2 lg:gap-0">
          <h1 className="text-2xl md:text-3xl lg:text-5xl text-[#AF9962] font-semibold">
            We make books great again. Just kidding, books were always great!
          </h1>
          <h1 className="text-base font-thin">
            Every month, we send our subscribers a box with the five best books
            of the month. These are bestsellers and classic books that deserve
            to be read and placed on your bookshelf. We select books according
            to the preferences of our customers. In addition, you can always
            attend our events, join the book club or just visit our offline
            store in New York.
          </h1>
        </div>
      </div>
    </div>
  );
}
