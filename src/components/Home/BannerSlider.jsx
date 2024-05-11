// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../assets/img/banner-books/book1.png";
import img2 from "../../assets/img/banner-books/book2.png";
import img3 from "../../assets/img/banner-books/book3.png";
import img4 from "../../assets/img/banner-books/book4.png";
import img5 from "../../assets/img/banner-books/book5.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "../../assets/style/BannerSlider.css";

// import required modules
import { EffectCards } from "swiper/modules";

export default function BannerSlider() {
  return (
    <div className="bannerSlider">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
