import React from 'react'
import styles from '../../../styles/Header.module.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Imagebannera from '../../../public/products/a.jpg'
import Imagebannerb from '../../../public/products/b.jpg'
import Imagebannerc from '../../../public/products/c.jpg'
import Imagebannerd from '../../../public/products/d.jpg'
import Image from 'next/image';
import Link from 'next/link'

// Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';


const Categories = () => {
  return (
    <div>
    <div className='flex flex-wrap  '>

        <div className='m-auto'>
                <h2 className='text-xl text-gray-400'>  Shop by </h2>
                <h1 className='text-6xl mb-6 text-gray-600'>categories</h1>
                <Link href="/category" className="inline-flex text-white bg-rose-500 border-0 py-2 px-6 focus:outline-none hover:bg-rose-600  text-lg ">View All</Link>
                         

        </div>

 
            
        <Splide 
      options={ {
        rewind: true,
        gap   : '1rem',
        width: '70%',
        height:'30%',
        perPage    : 4,
       
        breakpoints: {
		640:{
			perPage: 1,
            width: '100%',
		},
            } 
      }}
      aria-label="My Favorite Images"
    >
     
      <SplideSlide>
      <Link href='/category'>
      <div className={styles.parentcat}>
      <Image src={Imagebannera} className="w-3/3" alt="Image 1"/>
      </div>
      <div className={styles.chiledcat}> 
      <h2 className='px-10 py-2 text-gray-600 text-lg '>Product</h2>
      </div>
      </Link>
      </SplideSlide>

      <SplideSlide>
        <Link href='/category'>
      <div className={styles.parentcat}>
      <Image src={Imagebannerb} className="w-3/3" alt="Image 1"/>
      </div>
      <div className={styles.chiledcat}> 
      <h2 className='px-10 py-2 text-gray-600 text-lg '>Product</h2>
      </div>
      </Link>
      </SplideSlide>

      <SplideSlide>
       <Link href='/category'>
      <div className={styles.parentcat}>
      <Image src={Imagebannerc} className="w-3/3" alt="Image 1"/>
      </div>
      <div className={styles.chiledcat}> 
      <h2 className='px-10 py-2 text-gray-600 text-lg '>Product</h2>
      </div>
      </Link>
      </SplideSlide>

      <SplideSlide>
        <Link href='/category'>
      <div className={styles.parentcat}>
      <Image src={Imagebannerd} className="w-3/3" alt="Image 1"/>
      </div>
      <div className={styles.chiledcat}> 
      <h2 className='px-10 py-2 text-gray-600 text-lg '>Product</h2>
      </div>
      </Link>
      </SplideSlide>

      <SplideSlide>
      <Link href='/category'>
      <div className={styles.parentcat}>
      <Image src={Imagebannerc} className="w-3/3" alt="Image 1"/>
      </div>
      <div className={styles.chiledcat}> 
      <h2 className='px-10 py-2 text-gray-600 text-lg '>Product</h2>
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