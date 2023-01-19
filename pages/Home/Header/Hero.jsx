import React from 'react'
import styles from '../../../styles/Header.module.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay, Pagination, Navigation } from "swiper"
import abslimg from '../../../public/headhero.png'

import Image from 'next/image';

const Hero = () => {
  return (
    <div className={styles.mainhead}>
      <div className="grid grid-cols-1 lg:grid-cols-2" >

        <div className={styles.ab}>
        <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
    >
      <SwiperSlide className={styles.heada}>aaa</SwiperSlide>
      <SwiperSlide className={styles.headb}>bbb</SwiperSlide>
      <SwiperSlide className={styles.headc}>ccc</SwiperSlide>
    
    </Swiper>

        </div>
        <div className={styles.cd}>
        <div className={styles.cdchiled}>
        <h2 className='text-8xl text-white italic font-semibold'>The Art</h2>
        <h2 className='text-4xl text-white font-medium'>Of Innovation</h2>
        </div>
      
        </div>

    
  
      </div>
      <div className={styles.ef}>
  
        <Image src={abslimg}  alt='headcurve' />
      </div>
      
    </div>
  )
}

export default Hero
