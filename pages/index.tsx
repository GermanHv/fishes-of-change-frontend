import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/footer'
import Header from '../components/header'
import Clicker from '../components/clicker'
import { useEffect, useState } from 'react'

const Home: NextPage = () => {
  const [ messageCounter, setMessageCounter ] = useState(0);
  const messageArray = ["Sed non semper lectus. Vestibulum dictum nibh eleifend turpis aliquam, non posuere urna fringilla. Mauris finibus, urna ornare venenatis lacinia, nibh nisi sodales justo.","Quisque in consectetur orci. Aenean eu diam vel eros congue dapibus. Sed interdum auctor purus, non vehicula urna faucibus in. Cras suscipit velit ut aliquet scelerisque. ","Etiam nibh nisi, mollis quis quam a, consequat condimentum diam. In suscipit vitae felis eget porta. Nullam tincidunt sem non sem posuere, tempus viverra augue tincidunt.","In sit amet dictum lacus. Integer malesuada vulputate ante, et venenatis massa dictum in. Nullam lorem odio, iaculis at diam eget, pretium maximus eros. Proin congue elementum tincidunt."];

  useEffect(()=>{
    setTimeout(()=>{

      setMessageCounter((messageCounter + 1) % messageArray.length);
    }, 2000);
  },[messageCounter]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Head>
        <title>Click the oil</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header/>
      
      <div className='w-full flex-grow'>
        <div className=' border border-gray-700 rounded flex flex-col items-center p-3  mt-3 ml-3 mx-3 lg:absolute lg:max-w-md'>
          <h2 className='font-bold underline'>¿Sabías que...?</h2>
          <p>{messageArray[messageCounter]}</p>
        </div>
        <Clicker/>
      </div>

      <Footer/>
      
    </div>
  )
}

export default Home
