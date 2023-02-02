import React from 'react'
import Navbar from '../Home/Header/Navbar'
import Footer from '../Home/Footer/index'
import Products from '../reusablecompo/products'


import imga from '../../public/category/accessories/Flowers/a.jpg'
import imgb from '../../public/category/accessories/Ghungroo/a.png'
import imgc from '../../public/category/accessories/Hair/a.png'
import imgd from '../../public/category/accessories/HairRings/a.jpg'
import imge from '../../public/category/accessories/Kunjalam/a.jpg'
import imgf from '../../public/category/accessories/Nattuvangam/a.jpg'

import Header from '../reusablecompo/Header'
import Maincategory from '../reusablecompo/Maincategory'

const index = () => {
  const headheader = 'Accessories';
  const paraheader = `Here Are the Products available in ${headheader}` ;


  const imaga = imga;
  const imagb = imgb;
  const imagc = imgc;
  const imagd = imgd;
  const image = imgd;
  const imagf = imgd;

  const subcata =    '/accesssories/flowers'; 
  const subcatb =    '/accesssories/ghungroo'; 
  const subcatc =    '/accesssories/hair'; 
  const subcatd =    '/accesssories/hairrings'; 
  const subcate =    '/accesssories/Kunjalam'; 
  const subcatf =    '/accesssories/Nattuvangam'; 

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