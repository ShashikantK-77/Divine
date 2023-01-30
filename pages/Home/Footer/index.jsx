import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import divinelogo from '../../../public/logodivine.png'


const index = () => {
  const today = new Date();
  return (
    <div>
   
    <footer class="text-gray-500 body-font bg-slate-100">
  <div class="container px-24 py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <Image className='m-auto' src={divinelogo} alt='logofooter'/>
      <p class="mt-2 text-sm text-gray-500">We at "Divine Costumes" design and supply Costumes for various Drama and Dance activities for all School and College Programs.</p>
    </div>
    <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase">Accesssories</h2>
        <nav class="list-none mb-10">
        <li><Link className="text-gray-600 hover:text-gray-800"  href={"/accesssories/flowers"}>Flowers</Link></li>  
   <li><Link className="text-gray-600 hover:text-gray-800"  href={"/accesssories/ghungroo"}>Ghungroo</Link></li>
   <li><Link className="text-gray-600 hover:text-gray-800"  href={"/accesssories/hair"}>Hair</Link></li>  
   <li><Link className="text-gray-600 hover:text-gray-800"  href={"/accesssories/hairrings"}>Hair Rings</Link></li>
   <li><Link className="text-gray-600 hover:text-gray-800"  href={"/accesssories/Kunjalam"}>Kunjalam</Link></li>  
   <li><Link className="text-gray-600 hover:text-gray-800"  href={"/accesssories/Nattuvangam"}>Nattuvangam </Link></li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase">Ornaments</h2>
        <nav class="list-none mb-10">
        <li><Link className="text-gray-600 hover:text-gray-800" href={"/ornaments/belts"}>Belts </Link></li>  
   <li><Link className="text-gray-600 hover:text-gray-800"  href={"/ornaments/CentreMattiSingleChutti"}>Centre Matti/Single Chutti</Link></li>
   <li><Link className="text-gray-600 hover:text-gray-800"  href={"/ornaments/earornaments"}>Ear Ornaments </Link></li>  
   <li><Link className="text-gray-600 hover:text-gray-800"  href={"/ornaments/handornaments"}>Hand Ornaments</Link></li>
  
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase">Temple Jwellery</h2>
        <nav class="list-none mb-10">
        <li><Link className="text-gray-600 hover:text-gray-800" href={"/templejwellery/earornaments"}>Ear Ornaments </Link></li>  
   <li><Link className="text-gray-600 hover:text-gray-800" href={"/templejwellery/headset"}>Headset </Link></li>
   <li><Link className="text-gray-600 hover:text-gray-800" href={"/templejwellery/necklace"}>Necklace </Link></li>  
   <li><Link className="text-gray-600 hover:text-gray-800"  href={"/templejwellery/longchain"}>Long Chain</Link></li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase">Costumes</h2>
        <nav class="list-none mb-10">
        <li><Link className="text-gray-600 hover:text-gray-800"  href={"/costumes/bharatanatyam"}>Bharatanatyam</Link></li>  
   <li><Link className="text-gray-600 hover:text-gray-800"  href={"/costumes/Kuchipudi"}>Kuchipudi</Link></li>
   <li><Link className="text-gray-600 hover:text-gray-800" href={"/costumes/mohiniyattam"}>Mohiniyattam </Link></li>  
        </nav>
      </div>
    </div>
  </div>
  <div class="bg-slate-200">
    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p class="text-gray-500 text-sm text-center sm:text-left">© {today.getFullYear()} Shashikantkamthe —
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">@hirvenitin</a>
      </p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a class="text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>
    </div>
  )
}

export default index
