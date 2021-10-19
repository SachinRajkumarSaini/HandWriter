import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment } from 'react';
import Head from 'next/head';


function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.6.1/font/bootstrap-icons.css" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
