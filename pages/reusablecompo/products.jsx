import Image from 'next/image'
import React from 'react'
import abcde from '../../public/category/ornament/belts/a.jpg'

const products = ({pdetails,...props}) => {
  const product = pdetails[0]
  return (
    <div>
    

    <section class="text-gray-600 body-font">
  <div class="container px-24 py-4 mx-auto">
    <div class="flex flex-wrap -m-4">
    
     
    
     
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
      
          <Image alt="ecommerce" width={100} height={100}  class="object-cover object-center w-full h-full block" src= {props.imga}/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{product.category}</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">{product.p_name}</h2>
          <p class="mt-1">{product.p_cost}</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
        <Image alt="ecommerce" width={100} height={100}  class="object-cover object-center w-full h-full block" src= {props.imgb}/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
          <p class="mt-1">$21.15</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
        <Image alt="ecommerce" width={100} height={100}  class="object-cover object-center w-full h-full block" src= {props.imgc}/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Neptune</h2>
          <p class="mt-1">$12.00</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
        <Image alt="ecommerce" width={800} height={800}  class="object-cover  object-center w-full h-full block" src= {props.imgd}/>
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
  )
}

export default products