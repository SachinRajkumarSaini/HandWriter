import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment } from 'react';
import Head from 'next/head';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';


function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        {/* Responsive Meta tag */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Custom Fonts */}
        {/* Favicon */}
        <link rel="shortcut icon" href="/favicon.png" />
        {/* Bootstrap-Icon CDN Link */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.6.1/font/bootstrap-icons.css" />
      </Head>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  )
}

export default MyApp
