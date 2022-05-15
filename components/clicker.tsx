import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import oilDrillFigure from '../assets/figures/oil-drill-1.png';
import oilDrop from "../assets/figures/oil-drop.png"

const randomBetween = (x1:number, x2:number) => ( Math.floor(Math.random() * (x2 - x1)) + x1 );

export default function Clicker(){
    const [clickCounter, setClickCounter] = useState(0);
    const [spillCounter, setSpillCounter] = useState(0);
    const [clicksSinceLastSpill, setClicksSinceLastSpill] = useState(Infinity);
    const [oilLitters, setOilLitters] = useState(0);
    const [threshold, setThreshold] = useState( randomBetween(100, 200) );
    const [marineSpeciesArray, setMarineSpeciesArray] = useState([{ species: 'Peces', key: "fish", quantity: 334 }, { species: 'Tortugas', key: "turtle", quantity: 38 }, { species: 'Tiburones', key: "sharks", quantity: 24 }]);
    const [oilDropsArray, setOilDropsArray] = useState([]);

    function clickHandler(){
        setOilLitters(oilLitters + 10);
        setClickCounter((clickCounter + 1));
        // @ts-ignore
        setOilDropsArray([...oilDropsArray, <div key={`div-${clickCounter}`} className="absolute"><div className={`w-12 top-5 absolute motion-drop-0`}><Image src={oilDrop}/></div><div className={`w-12 top-5 absolute motion-drop-1`}><Image src={oilDrop}/></div><div className={`w-12 top-5 absolute motion-drop-2`}><Image src={oilDrop}/></div><div className={`w-12 top-5 absolute motion-drop-3`}><Image src={oilDrop}/></div></div>]);

        setTimeout(()=>{
            // @ts-ignore
            setOilDropsArray(oilDropsArray.slice(4));
        }, 200);

        setClicksSinceLastSpill(clicksSinceLastSpill + 1);
    }
    useEffect(()=>{
        if(oilLitters <= threshold) return;
        // alert('Ocurrio un derrame');

        let totalSpecimens = 0;
        let newMarineSpeciesArray = marineSpeciesArray.map( (element) => {
            let newQuantity = Math.floor(element.quantity* randomBetween( 60, 80 ) / 100);
            totalSpecimens += newQuantity;

            return { ...element, quantity:  newQuantity}; 
        });

        setMarineSpeciesArray( newMarineSpeciesArray );
        setThreshold( randomBetween(threshold + 10, threshold + 50) );
        setSpillCounter(spillCounter + 1);
        setClicksSinceLastSpill(0);

        if(!totalSpecimens) alert("Haz arrazado con el ecosistema. Perdimos.");
    },[oilLitters]);


    return(
        <div className="relative w-full flex-grow justify-center mt-4 pb-4 overflow-hidden">
            <div className="bg-ocean w-full h-full absolute" style={{zIndex: -10, filter: `brightness(${ (1-spillCounter*0.15) < 0.45? 0.45 : (1-spillCounter*0.15) })`}}></div>
            <div className="max-w-7xl w-full flex flex-col items-center overflow-hidden mt-4">
                <div className="flex flex-col items-center transform hover:scale-105 hover:cursor-pointer select-none">
                    <div onClick={clickHandler} className="w-48 mt-16">
                        <Image src={oilDrillFigure}/>
                    </div>
                    <span className="font-bold">¡EXTRAER!</span>

                    {
                        oilDropsArray.map((i)=>(i))
                    }
                </div>

                <table className="bg-white text-center text-2xl mt-7">
                    <thead>
                        <tr>
                            <th className="px-4 py-1 border border-gray-500">Elemento</th>
                            <th className="px-4 py-1 border border-gray-500">Cantidad</th>
                        </tr>
                    </thead>
                   
                    <tbody>
                        <tr key={'oil'}>
                            <td  className="px-4 py-1 border border-gray-500">Petroleo</td>
                            <td  className="px-4 py-1 border border-gray-500">{oilLitters} L</td>
                        </tr>
                        {
                            marineSpeciesArray.map((element) => (
                                <tr key={element.key}>
                                    <td  className="px-4 py-1 border border-gray-500">{element.species}</td>
                                    <td  className="px-4 py-1 border border-gray-500">{element.quantity}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

                {
                    clicksSinceLastSpill < 2 && 
                    <div className="bg-red-500 py-1 px-2 rounded-lg border border-black animate-bounce absolute ">
                        <span className="font-bold ">
                            ¡OCURRIÓ UN DERRAME!
                        </span>
                    </div>
                }
            </div>
        </div>
    );
}