import React from 'react'
import Navbar from '../Home/Header/Navbar'
import Footer from '../Home/Footer/index'
import Products from '../reusablecompo/products'


import imga from '../../public/category/ornament/belts/a.jpg'
import imgb from '../../public/category/ornament/CentreMattiSingle/a.jpg'
import imgc from '../../public/category/ornament/EarOrnaments/a.jpg'
import imgd from '../../public/category/ornament/HandOrnaments/a.jpg'
import imge from '../../public/category/ornament/headset/a.jpg'


import Header from '../reusablecompo/Header'
import Maincategory from '../reusablecompo/Maincategory'

const index = () => {
  const headheader = 'Ornaments';
  const paraheader = `Here Are the Products available in ${headheader}` ;


  const imaga = imga;
  const imagb = imgb;
  const imagc = imgc;
  const imagd = imgd;
  const image = imgd;
  const imagf = imgd;

  const subcata =    '/ornaments/belts'; 
  const subcatb =    '/ornaments/CentreMattiSingleChutti'; 
  const subcatc =    '/ornaments/earornaments'; 
  const subcatd =    '/ornaments/handornaments'; 
  const subcate =    '/ornaments'; 
  const subcatf =    '/ornaments'; 

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