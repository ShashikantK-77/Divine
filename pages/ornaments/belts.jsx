import React from 'react'
import Navbar from '../Home/Header/Navbar'
import Footer from '../Home/Footer/index'
import Header from '../reusablecompo/Header'
import Products from '../reusablecompo/products'

import imga from '../../public/category/ornament/belts/a.jpg'
import imgb from '../../public/category/ornament/belts/b.jpg'
import imgc from '../../public/category/ornament/belts/c.jpg'
import imgd from '../../public/category/ornament/belts/d.jpg'

const belts = () => {
  const headheader = 'Ornaments / Hand Ornaments';
  const paraheader = 'Here Are the Products available in Ornaments / Belts';

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

export default belts