

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
       <Link  href={"/"} >

   
       <Image className="logo" src={logodivine} alt='logo' />
     
       
       </Link>
       <nav className={styles.navbar}>
           <ul>

   <li><Link  href={"/"}>Home</Link></li>  

   <li><Link  href={"/accesssories"}>Accesssories</Link>
   <ul>
   <li><Link  href={"/accesssories/flowers"}>Flowers</Link></li>  
   <li><Link  href={"/accesssories/ghungroo"}>Ghungroo</Link></li>
   <li><Link  href={"/accesssories/hair"}>Hair</Link></li>  
   <li><Link  href={"/accesssories/hairrings"}>Hair Rings</Link></li>
   <li><Link  href={"/accesssories/Kunjalam"}>Kunjalam</Link></li>  
   <li><Link  href={"/accesssories/Nattuvangam"}>Nattuvangam </Link></li>
   </ul>
   </li> 

   <li><Link  href={"/ornaments"}>Ornaments</Link>
   <ul>
   <li><Link  href={"/ornaments/belts"}>Belts </Link></li>  
   <li><Link  href={"/ornaments/CentreMattiSingleChutti"}>Centre Matti/Single Chutti</Link></li>
   <li><Link  href={"/ornaments/earornaments"}>Ear Ornaments </Link></li>  
   <li><Link  href={"/ornaments/handornaments"}>Hand Ornaments</Link></li>
  
   </ul>
   </li> 

   <li><Link  href={"/global"}>Practice Sarees</Link>
   
   </li> 

   <li><Link  href={"/templejwellery"}>Temple Jwellery</Link>
   <ul>
   <li><Link  href={"/templejwellery/earornaments"}>Ear Ornaments </Link></li>  
   <li><Link  href={"/templejwellery/headset"}>Headset </Link></li>
   <li><Link  href={"/templejwellery/necklace"}>Necklace </Link></li>  
   <li><Link  href={"/templejwellery/longchain"}>Long Chain</Link></li>
  
   </ul>
   </li>

   <li><Link  href={"/costumes"}> Costumes</Link>
   <ul>
   <li><Link  href={"/costumes/bharatanatyam"}>Bharatanatyam</Link></li>  
   <li><Link  href={"/costumes/Kuchipudi"}>Kuchipudi</Link></li>
   <li><Link  href={"/costumes/mohiniyattam"}>Mohiniyattam </Link></li>  
   </ul>
   </li>

   <li><Link  href={"/contact"}> Order Costume</Link></li>

   <li><Link  href={"/contact"}> Blog</Link></li>

   <li><Link  href={"/contact"}> Contact</Link></li>


              
           </ul>
       </nav>
  
   </div>
  )
}

export default Navbar
