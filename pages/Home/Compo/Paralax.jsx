import React, { useEffect } from 'react'
import styles from '../../../styles/Home.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Paralax = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
   
    <div>
    <div className={styles.mainpara}>
        <div className={styles.chliedpara}  >
            <h2 className='font-bold text-7xl text-white' data-aos="fade-down" data-aos-easing="ease-in-back" data-aos-delay="500">Divine costumes</h2>
            <h5 className='font-semibold text-xl text-white' data-aos="fade-down" data-aos-easing="ease-in-back" data-aos-delay="700">Altering your dreams</h5>
        </div>
    </div>
    </div>
  )
}

export default Paralax