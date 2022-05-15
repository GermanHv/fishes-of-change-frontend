import { useEffect, useState, useRef } from "react";
const oilDrillFigure = '../assets/figures/oil-drill-1.png';
const oilDrop1 = "../assets/figures/oil-drop-1.png"
const fish = "../assets/figures/fish-2.png"

const randomBetween = (x1: number, x2: number) => (Math.floor(Math.random() * (x2 - x1)) + x1);
const store = [
    { price: 5000, id: 0, name: 'Tratar aguas' },
    { price: 300, id: 1, name: 'Mantenimiento Mensual' },
    { price: 1800, id: 2, name: 'Mantenimiento Anual' },
    { price: 50, id: 3, name: 'Mejorar Drill 1 (+1)' },
    { price: 150, id: 4, name: 'Mejorar Drill 2 (+5)' },
    { price: 400, id: 5, name: 'Mejorar Drill 3 (+15)' },
];

export default function Clicker() {

    //Resources
    const [clickCounter, setClickCounter] = useState(0);
    const [oilLiters, setOilLiters] = useState(0);
    const [fishesSpecimens, setFishesSpecimens] = useState(randomBetween(248, 369));

    // Parameters
    const [waterHealth, setWaterHealth] = useState(1);
    const [litersPerClick, setLitersPerClick] = useState(1);
    const [spillThreshold, setSpillThreshold] = useState(150);
    const [spillProbability, setSpillProbability] = useState(0.2);
    const [recoveryProbability, setRecoveryProbability] = useState(0.1);

    // Helper states
    const [clicksSinceLastSpill, setClicksSinceLastSpill] = useState(Infinity);
    const [clicksSinceLastRecovery, setClicksSinceLastRecovery] = useState(Infinity);
    const [oilDropsArray, setOilDropsArray] = useState([]);
    const [playing, setPlaying] = useState(true);

    function clickHandler() {
        if (!playing) return;

        setOilLiters(oilLiters + litersPerClick);
        setClickCounter(clickCounter + 1);

        // Events
        if (clickCounter > spillThreshold && Math.random() <= spillProbability) {
            setClicksSinceLastSpill(0);
            setWaterHealth(waterHealth - 20);
            setSpillProbability(spillProbability + 0.2);
        }
        else {
            setClicksSinceLastSpill(clicksSinceLastSpill + 1);
        }

        if (Math.random() > waterHealth) {
            let newFishSpecimens = fishesSpecimens - randomBetween(3, 10);
            newFishSpecimens = newFishSpecimens < 0 ? 0 : newFishSpecimens;
            setFishesSpecimens(newFishSpecimens);

            if (!newFishSpecimens) {
                setPlaying(false);
                alert("El ecosistema quedó devastado. No quedan más especimenes. Perdimos.")
            }
        }
        if (Math.random() <= recoveryProbability && waterHealth >= 0.8) {
            setFishesSpecimens(fishesSpecimens + randomBetween(2, 5));
            setClicksSinceLastRecovery(0);
        }
        else{
            setClicksSinceLastRecovery(clicksSinceLastRecovery + 1)
        }
        

        actionDropAnimation();
    }
    function storeHandler(id: number) {
        switch (id) {
            case 0:
                setOilLiters(oilLiters - store[id].price);
                setWaterHealth(waterHealth + 30);
                setRecoveryProbability(recoveryProbability + 20);
                break;

            case 1:
                setOilLiters(oilLiters - store[id].price);
                setSpillThreshold(spillThreshold + 150);
                break;

            case 2:
                setOilLiters(oilLiters - store[id].price);
                setSpillThreshold(spillThreshold + 500);
                break;

            case 3:
                setOilLiters(oilLiters - store[id].price);
                setLitersPerClick(litersPerClick + 1);
                break;

            case 4:
                setOilLiters(oilLiters - store[id].price);
                setLitersPerClick(litersPerClick + 5);
                break;

            case 5:
                setOilLiters(oilLiters - store[id].price);
                setLitersPerClick(litersPerClick + 15);
                break;

            default:
                break;
        }
    }
    function actionDropAnimation() {
        // @ts-ignore
        setOilDropsArray([...oilDropsArray, <div key={`div-${clickCounter}`} className="absolute"><div className={`w-12 top-5 absolute motion-drop-0`}><img src={oilDrop1} /></div><div className={`w-12 top-5 absolute motion-drop-1`}><img src={oilDrop1} /></div><div className={`w-12 top-5 absolute motion-drop-2`}><img src={oilDrop1} /></div><div className={`w-12 top-5 absolute motion-drop-3`}><img src={oilDrop1} /></div></div>]);

        setTimeout(() => {
            // @ts-ignore
            setOilDropsArray(oilDropsArray.slice(4));
        }, 200);
    }

    return (
        <div className="relative w-full flex-grow justify-center mt-4 pb-4 overflow-hidden">
            <div className="bg-ocean w-full h-full absolute" style={{ zIndex: -10, filter: `brightness(${1 - (0.55 * (1 - waterHealth))})` }}></div>
            <div className="relative max-w-7xl w-full flex flex-col items-center overflow-hidden mt-4">
                <div className="flex flex-col items-center transform hover:scale-105 hover:cursor-pointer select-none">
                    <div onClick={clickHandler} className="w-48 mt-16">
                        <img src={oilDrillFigure} />
                    </div>
                    <span className="font-bold">¡EXTRAER!</span>

                    {
                        oilDropsArray.map((i) => (i))
                    }
                </div>

                <table className="bg-sky-300/50 text-center text-2xl mt-7 rounded-lg">
                    <tbody>
                        <tr key={'oil'}>
                            <td className="px-4 py-1 border border-gray-500">
                                <img className="w-12" src={oilDrop1} />
                            </td>
                            <td className="px-4 py-1 border border-gray-500">{oilLiters} L</td>
                        </tr>
                        <tr key={'fishes'}>
                            <td className="px-4 py-1 border border-gray-500">
                                <img className="w-12" src={fish} />
                            </td>
                            <td className="px-4 py-1 border border-gray-500">{fishesSpecimens}</td>
                        </tr>
                    </tbody>
                </table>

                <div className="bg-gray-100 bg-opacity-60 flex flex-col p-3 items-center rounded-xl border border-blue-500 mt-6 md:absolute md:right-3">
                    <h2 className="font-bold mb-4">Tienda</h2>
                    <div className="flex flex-col items-center gap-y-3">
                        {
                            store.map( (i)=>(
                                <button disabled={oilLiters < i.price} onClick={()=>{storeHandler(i.id)}} className={`border border-black px-3 py-2 rounded-lg  transform ${oilLiters >= i.price? 'bg-blue-400 hover:scale-105 hover:font-bold' : 'bg-gray-200 '}`} key={`store-element-${i.id}`}>{`${i.name} - ${i.price}L`}</button>
                            ))
                        }
                    </div>
                </div>

                {
                    clicksSinceLastSpill < 2 && clicksSinceLastRecovery > clicksSinceLastSpill &&
                    <div className="bg-red-500 py-1 px-2 rounded-lg border border-black animate-bounce absolute mt-4">
                        <span className="font-bold ">
                            ¡OCURRIÓ UN DERRAME!
                        </span>
                    </div>
                }
                {
                    clicksSinceLastRecovery < 2 && clicksSinceLastSpill > clicksSinceLastRecovery &&
                    <div className="bg-green-500 py-1 px-2 rounded-lg border border-black animate-bounce absolute mt-4">
                        <span className="font-bold ">
                            EL MAR SE ESTÁ RECUPERANDO
                        </span>
                    </div>
                }
            </div>
        </div>
    );
}