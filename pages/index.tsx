import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/footer'
import Header from '../components/header'
import Clicker from '../components/clicker'
import { useEffect, useState } from 'react'

const Home: NextPage = () => {
  const [ messageCounter, setMessageCounter ] = useState(0);
  const messageArray = ["El 3 de junio de 1979 en pozo Ixtoc I, a unos 80 kilómetros del estado mexicano de Campeche. Tomó nueve meses frenar el vertido de crudo. En total, 461.000 toneladas del petróleo mancharon el agua del mar en esa ocasión.", "La cantidad de petróleo que se fugó tras el accidente de Ixtoc I sólo ha sido superada por la que derramaron las fuerzas iraquíes durante su retirada de Kuwait tras la primera guerra de Irak en 1991.", "Se estima que entre 1,4 millones y 1,5 millones de toneladas de crudo se perdieron en el Golfo Pérsico. Pero hay que tener en cuenta que a veces el que el escape sea grande no implica que sea el más destructivo para el medioambiente.","El buque cisterna Exxon Valdez, que encayó en Alaska en 1989, causó muchísimo daño ecológico al matar miles de aves marinas así como focas, ballenas y peces. El lugar en el que ocurrió el accidente acentuó los problemas. Así, el impacto total de un derrame de petróleo no puede ser medido solamente por su tamaño: las condiciones climáticas, el tipo de crudo y el tiempo que se tarde en frenar el flujo son algunos de los muchos factores que deben considerarse."];

  useEffect(()=>{
    setTimeout(()=>{

      setMessageCounter((messageCounter + 1) % messageArray.length);
    }, 7000);
  },[messageCounter]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Head>
        <title>Click the oil</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header/>
      
      <div className='w-full flex-grow'>
        <div className=' border border-gray-700 bg-sky-200/75 rounded flex flex-col items-center p-3  mt-3 ml-3 mx-3 lg:absolute lg:max-w-md'>
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
