

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../../styles/Header.module.css'
import logodivine from '../../../public/logodivine.png'

const Navbar = () => {
  return (
    <div className={styles.header}>
       <input type="checkbox" className={styles.menubar} />
       <label for="menubar">Menu</label>
       <Link  href={"/Vibehealth"} >

   
       <Image className="logo" src={logodivine} alt='logo' />
     
       
       </Link>
       <nav className={styles.navbar}>
           <ul>

   <li><Link  href={"/Vibehealth"}>Home</Link></li>  

   <li><Link  href={"/about"}>Accesssories</Link>
   <ul>
   <li><Link  href={"/Vibehealth"}>Flowers</Link></li>  
   <li><Link  href={"/about"}>Ghungroo</Link></li>
   <li><Link  href={"/Vibehealth"}>Hair </Link></li>  
   <li><Link  href={"/about"}>Hair Rings</Link></li>
   <li><Link  href={"/Vibehealth"}>Kunjalam</Link></li>  
   <li><Link  href={"/about"}>Nattuvangam </Link></li>
   </ul>
   </li> 

   <li><Link  href={"/Vibehealth"}>Ornaments</Link>
   <ul>
   <li><Link  href={"/Vibehealth"}>Belts </Link></li>  
   <li><Link  href={"/about"}>Centre Matti/Single Chutti</Link></li>
   <li><Link  href={"/Vibehealth"}>Ear Ornaments </Link></li>  
   <li><Link  href={"/about"}>Hand Ornaments</Link></li>
  
   </ul>
   </li> 

   <li><Link  href={"/global"}>Practice Sarees</Link>
   
   </li> 

   <li><Link  href={"/product"}>Temple Jwellery</Link>
   <ul>
   <li><Link  href={"/Vibehealth"}>Ear Ornaments </Link></li>  
   <li><Link  href={"/about"}>Headset </Link></li>
   <li><Link  href={"/Vibehealth"}>Necklace </Link></li>  
   <li><Link  href={"/about"}>Long Chain</Link></li>
  
   </ul>
   </li>

   <li><Link  href={"/contact"}> Costumes</Link>
   <ul>
   <li><Link  href={"/Vibehealth"}>Bharatanatyam</Link></li>  
   <li><Link  href={"/about"}>Kuchipudi</Link></li>
   <li><Link  href={"/Vibehealth"}>Mohiniyattam </Link></li>  
   </ul>
   </li>

   <li><Link  href={"/contact"}> Order Costume</Link></li>

   <li><Link  href={"/contact"}> Blog</Link></li>


              
           </ul>
       </nav>
  
   </div>
  )
}

export default Navbar
