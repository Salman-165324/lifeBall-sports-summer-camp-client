import { useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import "./Gallery.css";
import { Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/keyboard"; 
import SectionTitle from "../../utils/SectionTitle";
import { EffectCoverflow, Pagination, Keyboard } from "swiper";

import galleryBg from "../../../assets/galleryBg.webp";

const Gallery = () => {
  const backgroundStyles = {
    backgroundImage: `url(${galleryBg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center bottom",
  };

  return (
    <div
      className=" h-[40vh] md:h-[60vh] lg:h-[80vh] xl:h-[85vh] bg-fixed flex items-center relative "
      style={backgroundStyles} 
    >
      <div className="absolute top-3 md:top-8 lg:top-10 left-[35%] md:left-[40%] xl:left-[45%] text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white text-center">
          Gallery
        </h2>
      </div>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        loop={true}
        slidesPerView={"3"}
        coverflowEffect={{
          rotate: 2,
          stretch: 0,
          depth: 200,
          modifier: 2.5,
        }}
        modules={[FreeMode, EffectCoverflow, Pagination, Navigation, Keyboard]}
        keyboard={{ enabled: true}} 
        className="mySwiper mt-[2vh]"
      >
        <SwiperSlide>
          <img
            className="border-4 border-white"
            src={"https://i.ibb.co/8c8zdML/chess-Class.jpg"}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="border-4 border-white"
            src={"https://i.ibb.co/vh3yRPm/tennis-Class.jpg"}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="border-4 border-white"
            src={"https://i.ibb.co/sV3WQ10/hockey-Class.jpg"}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="border-4 border-white"
            src={"https://i.ibb.co/kMq5Gzd/gymnastics-Class.jpg"}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="border-4 border-white"
            src={"https://i.ibb.co/ypSmd07/swimming-Class.jpg"}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="border-4 border-white"
            src={"https://i.ibb.co/8c8zdML/chess-Class.jpg"}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="border-4 border-white"
            src={"https://i.ibb.co/vh3yRPm/tennis-Class.jpg"}
            alt=""
          />
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Gallery;
