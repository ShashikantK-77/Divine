import React from 'react'
import styles from '../../../styles/Header.module.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';


// Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';

import abslimg from '../../../public/headhero.png'

import Image from 'next/image';

const Hero = () => {
  return (
    <div className={styles.mainhead}>
      <div className="grid grid-cols-1 lg:grid-cols-2" >

        <div className={styles.ab}>
        {/* <Swiper
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
    
    </Swiper> */}

    <Splide 
      options={ {
        rewind: true,
        width : 1600,
        autoplay: 'true',
        type     : 'loop',
        rewindSpeed: 10000,
      }}
      aria-label="My Favorite Images"
    >
  
      <SplideSlide className={styles.heada}>aaa  </SplideSlide>
      <SplideSlide className={styles.headb}>aaa  </SplideSlide>
      <SplideSlide className={styles.headc}>aaa  </SplideSlide>
    </Splide>

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
