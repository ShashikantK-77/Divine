import Image from 'next/image'
import React from 'react'
import styles from '../../../styles/Header.module.css'
import Imagebanner from '../../../public/compback.jpg'
const Banner = () => {
  return (
    <div className={styles.Bannerback}>

        <div className='grid grid-cols-2'>
                    <div className={styles.firstside}>
                    <div className={styles.boxbanner}>
                        <h2>Ex consectetur deserunt reprehenderit nostrud dolore aliqua eiusmod excepteur tempor exercitation et proident.</h2>
                        {/* <Image src={Imagebanner} alt=''/> */}
                          
                    </div>
                    </div>
                    <div className='second-side'>b</div>
        </div>
    </div>
  )
}

export default Banner