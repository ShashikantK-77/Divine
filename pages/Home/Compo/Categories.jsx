import React, { useEffect } from 'react'
import styles from '../../../styles/Header.module.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Imagebannera from '../../../public/products/a.jpg'
import Imagebannerb from '../../../public/products/b.jpg'
import Imagebannerc from '../../../public/products/c.jpg'
import Imagebannerd from '../../../public/products/d.jpg'
import Image from 'next/image';
import Link from 'next/link'
import clirclebg from '../../../public/circle-helf1.png'

// Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';

import AOS from 'aos';
import 'aos/dist/aos.css';






const Categories = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='relative'>
      <Image className='absolute top-12 left-5 z-0'  src={clirclebg} alt='bgcircle' />
      <div className='flex flex-wrap   z-10 '>

        <div className='m-auto' data-aos="fade-down" data-aos-easing="ease-in-back" >
          <h2 className='text-xl text-gray-400 z-10'>  Shop by </h2>
          <h1 className='text-6xl mb-6 text-gray-600 z-10'>categories</h1>
          <Link href="/category" className="inline-flex text-white bg-rose-500 border-0 py-2 px-6 focus:outline-none hover:bg-rose-600 cursor-pointer  text-lg ">View All</Link>
        </div>



        <Splide
          options={{
            rewind: true,
            gap: '1rem',
            width: '70%',
            height: '30%',
            perPage: 4,

            breakpoints: {
              640: {
                perPage: 1,
                width: '100%',
              },
            }
          }}
          aria-label="My Favorite Images"
        >

<SplideSlide>
            <Link href='/accesssories'>
              <div className={styles.parentcat}>
                <Image src={Imagebannerd} className="w-3/3" alt="Image 1" />
              </div>
              <div className={styles.chiledcat}>
                <h2 className='px-10 py-2 text-gray-600 text-lg '>Accessaries</h2>
              </div>
            </Link>
          </SplideSlide>

          <SplideSlide>
            <Link href='/ornaments'>
              <div className={styles.parentcat}>
                <Image src={Imagebannerc} className="w-3/3" alt="Image 1" />
              </div>
              <div className={styles.chiledcat}>
                <h2 className='px-10 py-2 text-gray-600 text-lg '>Ornaments</h2>
              </div>
            </Link>
          </SplideSlide>

          <SplideSlide>
            <Link href='/global'>
              <div className={styles.parentcat}>
                <Image src={Imagebannerc} className="w-3/3" alt="Image 1" />
              </div>
              <div className={styles.chiledcat}>
                <h2 className='px-10 py-2 text-gray-600 text-lg '>Practice Sarees</h2>
              </div>
            </Link>
          </SplideSlide>

          <SplideSlide>
            <Link href='/templejwellery'>
              <div className={styles.parentcat}>
                <Image src={Imagebannerd} className="w-3/3" alt="Image 1" />
              </div>
              <div className={styles.chiledcat}>
                <h2 className='px-10 py-2 text-gray-600 text-lg '>temple Jwellery</h2>
              </div>
            </Link>
          </SplideSlide>

          <SplideSlide>
            <Link href='/costumes'>
              <div className={styles.parentcat}>
                <Image src={Imagebannerc} className="w-3/3" alt="Image 1" />
              </div>
              <div className={styles.chiledcat}>
                <h2 className='px-10 py-2 text-gray-600 text-lg '>Costumes</h2>
              </div>
            </Link>
          </SplideSlide>
        </Splide>
      </div>




      {/* <div>
    <Splide aria-label="My Favorite Images">
  <SplideSlide>
  <Image src={Imagebanner} className="w-1/3" alt="Image 1"/>
  </SplideSlide>
  <SplideSlide>
  <Image src={Imagebanner} className="w-1/3" alt="Image 2"/>
  </SplideSlide>
  <SplideSlide>
  <Image src={Imagebanner} className="w-1/3" alt="Image 2"/>
  </SplideSlide>
</Splide>
    </div> */}

      <div>

      </div>

    </div>

  )
}

export default Categories