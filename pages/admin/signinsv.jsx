import React from 'react'
import logo from '../../public/logodivine.png'
import svimg from '../../public/bgsvjp.png'
import Link from 'next/link'
const signinsv = () => {
    return (
        <div>
            <section class="text-gray-600 body-font min-h-screen relative">
                <img className='mx-auto w-4/4  lg:w-1/4  py-8' src={logo} alt='' />
                <div className=''>
                    <div className='flex justify-center py-8 z-40 '>
                        <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col  w-full mt-10 md:mt-0 z-40">
                            <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
                            <div class="relative mb-4">
                                <label for="full-name" class="leading-7 text-sm text-gray-600">Full Name</label>
                                <input type="text" id="full-name" name="full-name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div class="relative mb-4">
                                <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                                <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                
                            <Link  href={"/admin/adminpanel"} class="text-white bg-cyan-600 border-0 py-2 px-8 focus:outline-none hover:bg-cyan-800 rounded text-lg text-center">Login</Link>
                            <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
                        </div>
                    </div>
                </div>
              
                <img className='mx-auto w-4/4  lg:w-4/4  absolute bottom-0  ' src={svimg} alt='' />

            </section>
        </div>
    )
}

export default signinsv