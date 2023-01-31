import '../styles/globals.css'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';


function MyApp({ Component, pageProps }) {

  useEffect(() => {
    Aos.init({ duration: 300 });

}, [])

  return <Component {...pageProps} />
}

export default MyApp
