// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../assets/style/sellerSlider.css";

// import required modules
import { Pagination } from "swiper/modules";
import CommentCard from "./CommentCard";

export default function SellerSlider() {
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
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="pb-10 pt-5 md:py-10">
          <CommentCard />
        </SwiperSlide>
        <SwiperSlide className="pb-10 pt-5 md:py-10">
          <CommentCard />
        </SwiperSlide>
        <SwiperSlide className="pb-10 pt-5 md:py-10">
          <CommentCard />
        </SwiperSlide>
        <SwiperSlide className="pb-10 pt-5 md:py-10">
          <CommentCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
