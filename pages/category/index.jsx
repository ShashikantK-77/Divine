import React from 'react'
import Navbar from '../Home/Header/Navbar'
import Footer from '../Home/Footer/index'
import Header from './Compo/Header'
import Allcategory from './Compo/Allcategory'

const index = () => {
  return (
    <div>
    <Navbar/>
    <Header/>
    
    <Allcategory/>
    <Footer/>
    </div>
  )
}

export default index