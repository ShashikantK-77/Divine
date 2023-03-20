import React from 'react';
import axios from 'axios';

import Navbar from '../Home/Header/Navbar'
import Footer from '../Home/Footer/index'

import Header from '../reusablecompo/Header'
import Products from '../reusablecompo/products'

import imga from '../../public/category/accessories/Flowers/a.jpg'
import imgb from '../../public/category/accessories/Flowers/b.jpg'
import imgc from '../../public/category/accessories/Flowers/c.jpg'
import imgd from '../../public/category/accessories/Flowers/d.jpg'

const flowers = ({products}) => {
  // console.log("products : ",products);
  // debugger;
  const headheader = 'Accessories / Flowers';
  const paraheader = `Here Are the Products available in ${headheader}`;

  const imaga = imga;
  const imagb = imgb;
  const imagc = imgc;
  const imagd = imgd;
  return (
    <div>
      <Navbar />
      <Header mainhead={headheader} para={paraheader} />
      <Products pdetails={products} imga={imaga} imgb={imagb} imgc={imagc} imgd={imagd} />
      <Footer />
    </div>
  )
}
export default flowers

export async function getStaticProps() {

  // const response =  await axios.get('/api/getFlowers');


  const res = await fetch('http://localhost:3000/api/getFlowers')
  const response = await res.json()
  

  return {
    props: {
      products: response
    }
  }

}