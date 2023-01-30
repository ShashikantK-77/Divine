import React from 'react'
import Header from '../pages/Home/Header'
import Footer from '../pages/Home/Footer'

import Banner from './Home/Compo/Banner'
import Introduct from './Home/Compo/Introduct'
import Cards from './Home/Compo/Cards'
import Categories from './Home/Compo/Categories'
import Upperfooter from './Home/Footer/Upperfooter'
import Paralax from './Home/Compo/Paralax'

// import Navbar from './Header/Navbar'

const Home = () => {
  return (
    <div >
      <Header/>
  <Introduct/>
  <Categories/>
  <Paralax/>
      {/* <Banner/> */}
      <Cards/>




      <Upperfooter/>
    <Footer/>
    </div>
  )
}

export default Home
