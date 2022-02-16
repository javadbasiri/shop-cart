import React, { useRef, useState } from "react";
import {useNavigate} from "react-router-dom"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import slide1 from "../images/slide1.jpg"
import slide4 from "../images/slide4.jpg"
import slide3 from "../images/slide5.png"
import slide2 from "../images/slide2.jpg"

// Import Swiper styles
import "swiper/swiper.min.css";
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/navigation/navigation.min.css'

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {

  const navigate = useNavigate();
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide" onClick={()=>navigate("/products")}>
            <img src={slide1} />
            <h2>mens clothing</h2>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide" onClick={()=>navigate("/products")}>
            <img src={slide4} />
            <h2>womens clothing</h2>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide" onClick={()=>navigate("/products")}>
            <img src={slide3} />
            <h2>jewellry</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide" onClick={()=>navigate("/products")}>
            <img src={slide2} />
            <h2>electronics</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
