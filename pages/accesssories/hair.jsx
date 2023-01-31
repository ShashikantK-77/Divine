import React from 'react'
import Navbar from '../Home/Header/Navbar'
import Footer from '../Home/Footer/index'

import Header from '../reusablecompo/Header'
import Products from '../reusablecompo/products'

import imga from '../../public/category/accessories/Hair/a.png'
import imgb from '../../public/category/accessories/Hair/b.png'
import imgc from '../../public/category/accessories/Hair/c.png'
import imgd from '../../public/category/accessories/Hair/d.png'

const hair = () => {
  const headheader = 'Accessories / Hair';
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

export default hair