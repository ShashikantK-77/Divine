import React from 'react'
import Navbar from '../Home/Header/Navbar'
import Footer from '../Home/Footer/index'

import Header from '../reusablecompo/Header'
import Products from '../reusablecompo/products'

import imga from '../../public/category/costume/Mohiniyattam/a.jpg'
import imgb from '../../public/category/costume/Mohiniyattam/b.jpg'
import imgc from '../../public/category/costume/Mohiniyattam/c.jpg'
import imgd from '../../public/category/costume/Mohiniyattam/d.jpg'
const mohiniyattam = () => {
  const headheader = 'Temple Jwellery / Mohiniyattam';
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

export default mohiniyattam