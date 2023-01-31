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
          <Splide
            options={{
              rewind: true,
              width: 1600,
              autoplay: 'true',
              type: 'loop',
              rewindSpeed: 8000,
            }}
            aria-label="My Favorite Images"
          >
            <SplideSlide className={styles.heada}>aaa  </SplideSlide>
            <SplideSlide className={styles.headb}>aaa  </SplideSlide>
            <SplideSlide className={styles.headc}>aaa  </SplideSlide>
          </Splide>
        </div>
        <div className={styles.cd}>
          <div  className={styles.cdchiled}>
            <h2 data-aos="zoom-out"  className='text-8xl text-white italic font-semibold'>The Art</h2>
            <h2 data-aos="zoom-out"  className='text-4xl text-white font-medium'>Of Innovation</h2>
          </div>
        </div>
      </div>
      <div className={styles.ef}>
        <Image src={abslimg} alt='headcurve' />
      </div>

    </div>
  )
}

export default Hero
