import '../styles/globals.css'
import Router from 'next/router'
import Head from 'next/head'
import NProgress from 'nprogress'
import { ChakraProvider } from '@chakra-ui/react'

import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>

      </Head>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps}/> 
          {/* these are the children of the layout component */}
        </Layout>
      </ChakraProvider>
    
    </>
  )
}

export default MyApp
