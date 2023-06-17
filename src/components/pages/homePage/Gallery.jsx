import { useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import SectionTitle from "../../utils/SectionTitle";
const Gallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div>
      <div className="mb-12">
        <SectionTitle  title={"Gallery"}></SectionTitle>
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src={"https://i.ibb.co/8c8zdML/chess-Class.jpg"} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"https://i.ibb.co/vh3yRPm/tennis-Class.jpg"} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"https://i.ibb.co/sV3WQ10/hockey-Class.jpg"} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"https://i.ibb.co/kMq5Gzd/gymnastics-Class.jpg"} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"https://i.ibb.co/ypSmd07/swimming-Class.jpg"} alt="" />
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default Gallery;
