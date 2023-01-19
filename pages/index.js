import React from 'react'
import Home from './Home'
import Head from 'next/head'

const index = () => {
  return (
    <div>


      <Head>
        <meta charset="UTF-8" />
        <meta name="description" content="Free Web tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="author" content="Shashikant kamthe" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Shashi</title>
      </Head>

      <Home />

    </div>
  )
}

export default index