import React from 'react'
import Navbar from '../Home/Header/Navbar'
import Footer from '../Home/Footer/index'
import Header from './Compo/Header'
import Allsubcategory from './Compo/Allsubcategory'

const index = () => {
  return (
    <div>
    <Navbar/>
    <Header/>
    <Allsubcategory/>
    <Footer/>
    </div>
  )
}

export default index