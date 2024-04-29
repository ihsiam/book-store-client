import { Link } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../../utility/utility";
// Import Swiper React components
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../assets/style/sellerSlider.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function SellerSlider({ start, end }) {
  const { data } = useSWR(
    "https://book-store-server-delta.vercel.app/allBooks",
    fetcher,
    {
      suspense: true,
    }
  );

  const bestBook = data.slice(start, end);

  return (
    <div className="sellerSlider">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {bestBook.map((book) => (
          <SwiperSlide
            key={book._id}
            className="pb-10 pt-5 md:py-10 flex flex-col border-none"
          >
            <Link to={`/book/${book._id}`}>
              <div className="p-2 md:p-5 h-84 w-full bg-slate-100 rounded">
                <img src={book.imageURL} className="rounded" />
              </div>
              <div className="text-start w-full py-2">
                <h1 className="font-bold">{book.bookTitle}</h1>
                <h1 className="font-thin">{book.authorName}</h1>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

SellerSlider.propTypes = {
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
};
