import Image from "next/image";
import logo from "../assets/logo.png"
import petro from "../../assets/plataformas-petroleras.jpg"
import oceans from "../../assets/World_ocean.gif"
import MemberResume from "./memberResume";

const members = [   {userName: 'GermanHv',          name: 'Germán HV',          src: 'https://avatars.githubusercontent.com/u/65383128?v=4'},
                    {userName: 'Beto-Cpu',          name: 'Alberto Munguia',    src: 'https://avatars.githubusercontent.com/u/62979859?v=4'},
                    {userName: 'jorgeAngelus',      name: 'Jorge Casas',        src: 'https://avatars.githubusercontent.com/u/16961656?v=4'},
                    {userName: 'JavierPortada',     name: 'Javier Portada',     src: 'https://avatars.githubusercontent.com/u/78836557?v=4'},
                    {userName: 'Buwar88',           name: 'Irving Jaramillo',   src: 'https://avatars.githubusercontent.com/u/45946572?v=4'}];

export default function aboutUs() {
    return (
        <div className="flex flex-col items-center w-full max-w-3xl mx-3 px-3 md:px-0 mb-7">
            <div className="flex flex-col items-center w-full mb-16 text-center">
                <h1 className="font-bold text-3xl my-3 text-center">Acerca de Nosotros</h1>
                <div className="flex flex-col md:flex-row justify-center md:justify-between gap-x-4 w-full mb-8">
                    <div className="flex flex-col  mt-4 md:mt-14 items-center max-w-sm mx-auto mb-3 text-lg md:text-xl">
                        <h2 className="font-bold text-2xl">Misión</h2>
                        <p>Concientizar de una forma divertida y llamativa acerca de la problematíca que conlleva la explotación petrolera en nuestros oceanos</p>
                    </div>
                    <div>
                        <Image className="object-fit " src={oceans} alt="oceanos" />
                    </div>
                </div>
                <div className="flex flex-col-reverse  md:flex-row justify-between gap-x-4 w-full">
                    <div>
                        <Image className="object-fit " src={petro} alt="plataformasPetroleras" />
                    </div>
                    <div className="flex flex-col mt-6 items-center max-w-sm mx-auto mb-3 text-lg md:text-xl">
                        <h2 className="font-bold text-2xl">Visión</h2>
                        <p>Generar un impacto tal que obligue a las petroleras a cuidar de los oceanos, tanto en la extracción, como en el cuidado periódico del mismo</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center w-full max-w-3xl">
                <h1 className="font-bold text-3xl my-3">Miembros</h1>
                <div className="flex flex-row max-w-2xl flex-wrap justify-center gap-x-8 gap-y-7">
                    {
                        members.map((element)=>(
                            <MemberResume key={`${element.userName}-div`} userName={element.userName} memberName={element.name} src={element.src}/>
                        ))
                    }
                </div> 
            </div>
        </div>
    )
};
