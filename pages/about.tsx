import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/footer'
import Header from '../components/header'
import AboutUs from '../components/aboutUs/aboutUs'

const about: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Head>
          <title>Click the Oil</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      
      <AboutUs/>
      
      <Footer/>
      
    </div>
  )
}

export default about;
