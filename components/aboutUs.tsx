import Image from "next/image";
import logo from "../assets/logo.png"
import petro from "../assets/plataformas-petroleras.jpg"
import oceans from "../assets/World_ocean.gif"

export default function aboutUs(){
    return (
        <div className="flex min-h-screen flex col items center justify-between">
            <body className="display-block">
                <h1 className="font-bold text-2xl">Misión</h1>
                <div className="flex flex-col sm:flex-row items-center space-x-5">                    
                    <li>Concientizar de una forma divertida y llamativa <br /> acerca de la problematíca que conlleva <br /> la explotación petrolera en nuestros oceanos</li>
                    <Image src= {oceans} className="w-24 transform hover:scale-105" alt="oceanos"/>
                </div>
                <h1 className="font-bold text-2xl">Visión</h1>
                <div className="flex flex-col sm:flex-row items-center space-x-5">
                    <li>Generar un impacto tal que obligue a las petroleras <br /> a cuidar de los oceanos, tanto en la extracción, <br /> como en el cuidado periódico del mismo</li>
                    <Image src={petro} className="w-24 transform hover:scale-105" alt="plataformasPetroleras"/>
                </div>
                <h1 className="font-bold text-2xl">Equipo</h1>
                <div className="flex flex-col sm:flex-row items-center space-x-5">
                    <p>*Alberto Munguía <br />*Juan Javier <br />*Jorge Maldonado <br />*German Horta <br />*Irving Jaramillo</p>
                    <Image src={logo} className="w-24 transform hover:scale-105" alt="logoNuestro" />
                </div>
            </body>
        </div>
    )
};
