import React from 'react'
import styles from './Swiper.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import MovieCard from '../movieCard/MovieCard';
import { Navigation } from "swiper";

function SwiperWindow({data}) {
  return (
    <>
    <Swiper
    slidesPerView={6}
    spaceBetween={20}
    navigation
    modules={[Navigation]}
    className={styles.swiper}
  >
    {
      data.map(item => {
        return (
          <SwiperSlide key={item.id}>
            <MovieCard item={item}/>
          </SwiperSlide>
        )
      })
    }
  </Swiper>
  </>
  )
}

export default SwiperWindow