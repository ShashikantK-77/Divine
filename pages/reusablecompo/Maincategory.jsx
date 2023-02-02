import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
const Maincategory = (props) => {





  return (
    <div>
     <div>
    

    <section class="text-gray-600 body-font">
  <div class="container px-24 py-4 mx-auto">
    <div class="flex flex-wrap -m-4">
    
     
    

      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
      <Link href={props.subcata}>
        <a class="block relative h-48 rounded overflow-hidden">
      
          <Image alt="ecommerce" width={100} height={100}  class="object-cover object-center w-full h-full block" src= {props.imga}/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium uppercase">{props.subcata}</h2>
          <p class="mt-1">$16.00</p>
        </div>
        </Link>
      </div>

      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
      <Link href={props.subcatb}>
        <a class="block relative h-48 rounded overflow-hidden">
      
          <Image alt="ecommerce" width={100} height={100}  class="object-cover object-center w-full h-full block" src= {props.imgb}/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium uppercase">{props.subcatb}</h2>
          <p class="mt-1">$16.00</p>
        </div>
        </Link>
      </div>

      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
      <Link href={props.subcatc}>
        <a class="block relative h-48 rounded overflow-hidden">
      
          <Image alt="ecommerce" width={100} height={100}  class="object-cover object-center w-full h-full block" src= {props.imgc}/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium uppercase">{props.subcatc}</h2>
          <p class="mt-1">$16.00</p>
        </div>
        </Link>
      </div>

      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
      <Link href={props.subcatd}>
        <a class="block relative h-48 rounded overflow-hidden">
      
          <Image alt="ecommerce" width={100} height={100}  class="object-cover object-center w-full h-full block" src= {props.imgd}/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium uppercase">{props.subcatd}</h2>
          <p class="mt-1">$16.00</p>
        </div>
        </Link>
      </div>

      



    

    

   

    </div>
  </div>
</section>
    </div>
    
    </div>
  )
}

export default Maincategory