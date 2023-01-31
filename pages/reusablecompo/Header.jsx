import React from 'react'
import { useEffect } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = (props) => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
   <div className='p-8 md:p-14 lg:px-12 lg:py-24 m-auto text-center'> 
   <h2 data-aos="fade-down" data-aos-easing="ease-in-back" data-aos-delay="500" className='text-5xl mb-4 text-slate-600 font-semibold'>{props.mainhead}</h2>
   <p className='text-xl'>{props.para}</p>
   </div>
    </div>
  )
}

export default Header