import Head from 'next/head';
import '../styles/globals.css';
import Script from 'next/script';
import Layout from '../components/layout/layout';

function MyApp({ Component, pageProps }) {
  return (
    
  <>
  <Head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" 
  integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />

  </Head>
  <Layout>
  <Component {...pageProps} />
  </Layout>
  <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
   integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"
   ></Script>
  </>
  )
}

export default MyApp;
