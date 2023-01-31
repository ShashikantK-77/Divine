import React from 'react'
import Navbar from '../Home/Header/Navbar'
import Footer from '../Home/Footer/index'

import Header from '../reusablecompo/Header'
import Products from '../reusablecompo/products'

import imga from '../../public/category/templejewellary/Necklace/a.jpg'
import imgb from '../../public/category/templejewellary/Necklace/b.jpg'
import imgc from '../../public/category/templejewellary/Necklace/c.jpg'
import imgd from '../../public/category/templejewellary/Necklace/b.jpg'
const necklace = () => {
  const headheader = 'Temple Jwellery / Necklace';
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

export default necklace