// core version + navigation, pagination modules:
import styles from "./Carousel.module.css";
// import Swiper from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import MediaCard from "../MediaCard/MediaCard";
import Box from "@mui/material/Box";

// init Swiper:

export default function Carousel({ title, albums }) {
  //   const swiper = new Swiper(".swiper", {
  //     // Optional parameters
  //     direction: "vertical",
  //     loop: true,

  //     // If we need pagination
  //     pagination: {
  //       el: ".swiper-pagination",
  //     },

  //     // Navigation arrows
  //     navigation: {
  //       nextEl: ".swiper-button-next",
  //       prevEl: ".swiper-button-prev",
  //     },

  //     // And if we need scrollbar
  //     scrollbar: {
  //       el: ".swiper-scrollbar",
  //     },
  //   });
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        navigation
        // pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className={styles.swiper}
        style={{ color: "#ffffff" }}
        spaceBetween={20}
        slidesPerView={8}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 6,
            spaceBetween: 40,
          },
        }}
        sx={{ margin: "0px 100px" }}
      >
        {albums.map((album) => (
          <SwiperSlide key={album.id} className={styles.swiperSlide}>
            <MediaCard album={album} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
