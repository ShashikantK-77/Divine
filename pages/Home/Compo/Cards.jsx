import Image from 'next/image'
import React from 'react'
import Imagecards from '../../../public/headbg.jpg'

const Cards = () => {
  return (
    <div><section class="text-gray-600 body-font bg-slate-50">
    <div class="container px-12 py-24 mx-auto">

    <div class="flex flex-col text-center w-full mb-4">
      <h2 class="text-xs text-rose-600 tracking-widest font-medium title-font  mb-1">ROOF PARTY POLAROID</h2>
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-rose-700">FEATURED PRODUCTS</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
    </div>

   
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-4 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
        <Image class="lg:h-48 md:h-36 w-full object-cover object-center hover:brightness-75" width="500" height="500" src={Imagecards}/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
          <p class="mt-1">$16.00</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
        <Image class="lg:h-48 md:h-36 w-full object-cover object-center hover:brightness-75" width="500" height="500" src={Imagecards}/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
          <p class="mt-1">$21.15</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
        <Image class="lg:h-48 md:h-36 w-full object-cover object-center hover:brightness-75" width="500" height="500" src={Imagecards}/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Neptune</h2>
          <p class="mt-1">$12.00</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
        <Image class="lg:h-48 md:h-36 w-full object-cover object-center hover:brightness-75" width="500" height="500" src={Imagecards}/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
          <p class="mt-1">$18.40</p>
        </div>
      </div>
   
    
   
    
    </div>
  </div>
</section>

    </div>
  </section>
  </div>
  )
}

export default Cards