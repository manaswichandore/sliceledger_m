// import '../styles/globals.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss'
// import '../styles/pages/main.scss'
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import * as React from 'react';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import fav from '../public/favicon.png'
import Script from 'next/script';
function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [Toggle, setToggle] = useState(false)
  useEffect(() => {
    if (router.pathname === "/slice_index" || router.pathname === "/dashboard/buyToken" || router.pathname === "/dashboard/staking") {
      setToggle(true)
    } else {
      setToggle(false)
    }
  }, [router])

  return (
    <>
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-231495804-1"></script>
        <link rel="shortcut icon" href={fav.src} />
        <meta name="google-site-verification" content="JGYRpNI_HS35RAFPVw8mxrwXkly8AIrdaAD45uKL5vg" />
      </Head>
      <Script id='googleTagManager'>
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());
          gtag('config', 'UA-231495804-1');`}
      </Script>
      <div className='wrapper_content'>
        {Toggle ? '' : <Header />}
        <Component {...pageProps} />
      </div>
      {Toggle ? '' : <Footer />}
    </>
  )
}

export default MyApp
