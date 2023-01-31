import Image from 'next/image'
import React, { useEffect } from 'react'
// import Imageitro from '../../../public/herointro.jpg'
import Imageitro from '../../../public/Imgintro2.jpg'




const Introduct = () => {

  return (
    <div>
      <section class="text-gray-600 body-font ">
        <div class="container  flex px-36 py-10 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            {/* <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/> */}
            <Image class="object-cover object-center rounded w-4/4" alt="hero" src={Imageitro} />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-600" data-aos="fade-left" data-aos-easing="ease-in-back" data-aos-delay="500">Indian Dance Costumes</h1>
            <p class="mb-8 leading-relaxed">We at "Divine Costumes" design and supply Costumes for various Drama and Dance activities for all School and College Programs, We are situated in Pune, Maharashtra, India. We provide one stop solution for all dance needs including brand new Costumes stitched as per the design and measurement of customers and also supply all types of Ornaments, Ghungroos and Dance Accessories.</p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-rose-500 border-0 py-2 px-6 focus:outline-none hover:bg-rose-600  text-lg">Button</button>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Introduct