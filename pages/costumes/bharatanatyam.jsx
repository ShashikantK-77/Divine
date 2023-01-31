import React from 'react'
import Navbar from '../Home/Header/Navbar'
import Footer from '../Home/Footer/index'

import Header from '../reusablecompo/Header'
import Products from '../reusablecompo/products'

import imga from '../../public/category/costume/Bharatanatyam/a.png'
import imgb from '../../public/category/costume/Bharatanatyam/b.png'
import imgc from '../../public/category/costume/Bharatanatyam/c.jpg'
import imgd from '../../public/category/costume/Bharatanatyam/d.jpg'
const bharatanatyam = () => {
  const headheader = 'Temple Jwellery / Bharatanatyam';
  const paraheader = `Here Are the Products available in ${headheader}` ;

  const imaga = imga;
  const imagb = imgb;
  const imagc = imgc;
  const imagd = imgd;
  return (
    <div>
     <Navbar/>
     <Header mainhead={headheader} para={paraheader} />
      <Products imga={imaga} imgb={imagb} imgc={imagc} imgd={imagd} />
        <Footer/>
    </div>
  )
}

export default bharatanatyam