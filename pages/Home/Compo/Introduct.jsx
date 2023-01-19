import Image from 'next/image'
import React from 'react'
// import Imageitro from '../../../public/herointro.jpg'
import Imageitro from '../../../public/Imgintro2.jpg'

const Introduct = () => {
  return (
    <div>
        <section class="text-gray-600 body-font ">
  <div class="container  flex px-36 py-10 md:flex-row flex-col items-center">
  <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      {/* <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/> */}
      <Image class="object-cover object-center rounded w-4/4" alt="hero" src={Imageitro}/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-600">Before they sold out
        <br class="hidden lg:inline-block"/>readymade gluten
      </h1>
      <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork lorem ipsumQui veniam mollit sint et qui occaecat sunt amet laborum nostrud nostrud irure. pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
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