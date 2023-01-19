
import Link from 'next/link'
import React from 'react'


import styles from '../../../styles/Header.module.css'
const Navbar = () => {
  return (
<div className={styles.Navbar}>
<div className='mt-8'>
      <Link className='px-6 py-12 text-xl font-medium' href='/'>Home</Link>
      <Link className='px-6 py-12 text-xl font-medium' href='/category'>Category</Link>
      <Link className='px-6 py-12 text-xl font-medium' href='/subcategory'> Subcategory</Link>
      <Link className='px-6 py-12 text-xl font-medium' href='/contact'>Contact</Link>
      <hr className='text-6xl margin-auto p-6'/>
    </div></div>
  )
}

export default Navbar
