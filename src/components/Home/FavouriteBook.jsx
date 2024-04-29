import { Link } from "react-router-dom";
import favBook from "../../assets/img/favouritebook.jpg";

export default function FavouriteBook() {
  return (
    <div className="mt-5 md:mt-10 px-4 md:px-24 flex flex-col md:flex-row">
      <div className="w-full md:w-1/2">
        <img src={favBook} className="w-full h-[350px] md:h-[600px]" />
      </div>

      <div className="w-full md:w-1/2 pt-5 md:pt-0 md:pl-20 flex flex-col justify-center gap-4 md:gap-8">
        <div className="flex flex-col gap-2 md:gap-5">
          <h1 className="text-3xl md:text-5xl font-bold">
            Find your favourite
          </h1>
          <h1 className="text-3xl md:text-5xl font-bold text-blue-600">
            book here!
          </h1>
          <h1 className="text-base font-thin">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            rem, doloremque ipsam quam vel placeat obcaecati consequuntur illo
            iste inventore?
          </h1>
        </div>

        <div className="flex md:gap-10 justify-between md:justify-normal">
          <div>
            <h1 className="text-xl md:text-3xl font-bold">800+</h1>
            <h1 className="text-base md:text-lg font-semibold">Book listing</h1>
          </div>
          <div>
            <h1 className="text-xl md:text-3xl font-bold">550+</h1>
            <h1 className="text-base md:text-lg font-semibold">
              Register user
            </h1>
          </div>
          <div>
            <h1 className="text-xl md:text-3xl font-bold">1200+</h1>
            <h1 className="text-base md:text-lg font-semibold">
              PDF downloaded
            </h1>
          </div>
        </div>

        <Link to="/books">
          <button className="bg-blue-600 px-4 md:px-6 py-2 md:py-3 text-white font-bold rounded">
            Explore Now
          </button>
        </Link>
      </div>
    </div>
  );
}
