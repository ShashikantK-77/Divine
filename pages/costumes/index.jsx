import React from 'react'
import Navbar from '../Home/Header/Navbar'
import Footer from '../Home/Footer/index'
import Products from '../reusablecompo/products'


import imga from '../../public/category/templejewellary/EarOrnaments/a.jpg'
import imgb from '../../public/category/templejewellary/Headset/a.jpg'
import imgc from '../../public/category/templejewellary/LongChain/a.jpg'
import imgd from '../../public/category/templejewellary/Necklace/a.jpg'
import imge from '../../public/category/templejewellary/Necklace/a.jpg'


import Header from '../reusablecompo/Header'
import Maincategory from '../reusablecompo/Maincategory'

const index = () => {
  const headheader = 'Costumes';
  const paraheader = `Here Are the Products available in ${headheader}` ;


  const imaga = imga;
  const imagb = imgb;
  const imagc = imgc;
  const imagd = imgd;
  const image = imgd;
  const imagf = imgd;

  const subcata =    '/costumes/bharatanatyam'; 
  const subcatb =    '/costumes/Kuchipudi'; 
  const subcatc =    '/costumes/mohiniyattam'; 
  const subcatd =    '/costumes/mohiniyattam'; 
  const subcate =    '/costumes'; 
  const subcatf =    '/costumes'; 

  return (
    <div>
 <Navbar/>
 <Header mainhead={headheader} para={paraheader} />
    
      <Maincategory 
      
      subcata={subcata} subcatb={subcatb} subcatc={subcatc} subcatd={subcatd} subcate={subcate} subcatf={subcatf} 
      imga={imaga}      imgb={imagb}      imgc={imagc}      imgd={imagd}      imge={image}      imgf={imagf}


      
      
       />
 <Footer/>
    </div>
  )
}

export default index