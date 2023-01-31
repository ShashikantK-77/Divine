import React from 'react'
import Navbar from '../Home/Header/Navbar'
import Footer from '../Home/Footer/index'

import Header from '../reusablecompo/Header'
import Products from '../reusablecompo/products'

import imga from '../../public/category/ornament/EarOrnaments/a.jpg'
import imgb from '../../public/category/ornament/EarOrnaments/b.jpg'
import imgc from '../../public/category/ornament/EarOrnaments/c.jpg'
import imgd from '../../public/category/ornament/EarOrnaments/d.jpg'
const earornaments = () => {
  const headheader = 'Ornaments / Ear Ornaments';
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

export default earornaments