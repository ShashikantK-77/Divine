import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Imagecards from '../../../public/headbg.jpg'

const Allcategory = () => {
  return (
    <div><div class="flex flex-col text-center w-full mb-0">
    <h2 class="text-xs text-rose-600 tracking-widest font-medium title-font  mb-1">ROOF PARTY POLAROID</h2>
    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-rose-700">All CATEGORY PRODUCTS</h1>
    <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
  </div>
  
  
  
 
  <section class="text-gray-600 body-font">
  <div class="container px-12  py-6 mx-auto">
    <div class="flex flex-wrap mx-auto">
    {/* <Link href="/subcategory">
    <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
        <Image className="h-40 rounded w-full object-cover object-center mb-6" src={Imagecards} alt='categories' />
       
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
    </Link> */}
    <Link href="/subcategory">
    <div class="xl:w-4/4 md:w-4/4 p-1 ">
        <div class="bg-gray-100 p-6 rounded-lg">
        <Image className="h-40 rounded w-full object-cover object-center mb-6" src={Imagecards} alt='categories' />
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Colosseum Roma</h2>
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      </Link>


      <Link href="/subcategory">
    <div class="xl:w-4/4 md:w-4/4 p-1">
        <div class="bg-gray-100 p-6 rounded-lg">
        <Image className="h-40 rounded w-full object-cover object-center mb-6" src={Imagecards} alt='categories' />
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Colosseum Roma</h2>
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      </Link>

      <Link href="/subcategory">
    <div class="xl:w-4/4 md:w-4/4 p-1">
        <div class="bg-gray-100 p-6 rounded-lg">
        <Image className="h-40 rounded w-full object-cover object-center mb-6" src={Imagecards} alt='categories' />
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Colosseum Roma</h2>
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      </Link>

      <Link href="/subcategory">
    <div class="xl:w-4/4 md:w-4/4 p-1">
        <div class="bg-gray-100 p-6 rounded-lg">
        <Image className="h-40 rounded w-full object-cover object-center mb-6" src={Imagecards} alt='categories' />
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Colosseum Roma</h2>
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      </Link>

      <Link href="/subcategory">
    <div class="xl:w-4/4 md:w-4/4 p-1">
        <div class="bg-gray-100 p-6 rounded-lg">
        <Image className="h-40 rounded w-full object-cover object-center mb-6" src={Imagecards} alt='categories' />
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Colosseum Roma</h2>
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      </Link>


    
     
      {/* <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
        <Image className="h-40 rounded w-full object-cover object-center mb-6" src={Imagecards} alt='categories' />
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div> */}


    </div>
  </div>
</section>
  
  </div>
    
  )
}

export default Allcategory