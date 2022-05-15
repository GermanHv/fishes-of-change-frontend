import { useState } from 'react';
import Image from "next/image";
import logo from "../assets/logo.png"

export default function voluntario() {
    const [ userData, setUserData ] = useState({name: '', last_name: '', email: '', phone: '', birthday: ''});

    const handlerChange = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();

        let newData = {...userData};

        // @ts-ignore
        newData[e.target.name] = e.target.value;

        // console.log(newData);
        setUserData(newData);
    };
    const handlerPhoneChange  = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();

        let newData = {...userData};
        let newString = "";

        // @ts-ignore
        let string = e.target.value.slice(0,14);     

        for(let char of string){
            if(!(char == "0") && !parseInt(char)) continue;

            newString += char;
        }

        if(newString.length > 0) newString = "(" + newString; 
        if(newString.length > 4) newString = newString.slice(0,4) + ") " +  newString.slice(4); 
        if(newString.length > 9) newString = newString.slice(0,9) + " " +  newString.slice(9); 


        newString = newString.slice(0,14);
        // @ts-ignore
        newData[e.target.name] = newString;

        setUserData(newData);
    };
    function guardado(){
        alert("Datos guardados");
    }




    return (
        <div className="flex flex-col items-center mb-6">
            <div>
                <Image src={logo}/>
            </div>
            <h1 className="font-bold text-2xl mt-7 mb-3 text-center">¡Conviertete en un voluntario!</h1>
            <p className="text-center max-w-lg mb-5">Siempre necesitamos manos, realizamos limpias en las costas, hacemos brigadas para cuidar nacimiento de tortugas ayudamos a limpiar en desastres por petroleo y mucho mas.</p>
            <form className="flex flex-col items-center gap-y-5 text-xl bg-blue-200 p-3 mx-2 sm:p-8 rounded-2xl">
                <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-x-4">
                    <label className="font-bold" htmlFor="name">Nombre: </label>
                    <input name="name" id="name" className="w-60 md:w-64 px-3 py-1" type="text" placeholder='Nombre' value={userData.name} onChange={handlerChange}/>
                </div>
                <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-x-4">
                    <label className="font-bold" htmlFor="last_name">Apellido: </label>
                    <input name="last_name" id="last_name" className="w-60 md:w-64 px-3 py-1" type="text" placeholder='Apellido' value={userData.last_name} onChange={handlerChange}/>
                </div>
                <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-x-4">
                    <label className="font-bold" htmlFor="email">Correo: </label>
                    <input name="email" id="email" className="w-60 md:w-64 px-3 py-1" type="email" placeholder='email@email.com' value={userData.email} onChange={handlerChange}/>
                </div>
                <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-x-4">
                    <label className="font-bold" htmlFor="phone">Teléfono: </label>
                    <input name="phone" id="phone" className="w-60 md:w-64 px-3 py-1" type="tel" placeholder='(123) 456 7890' value={userData.phone} onChange={handlerPhoneChange}/>
                </div>
                <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-x-4">
                    <label className="font-bold" htmlFor="birthday">Fecha de nacimiento: </label>
                    <input name="birthday" id="birthday" className="w-60 md:w-64 px-3 py-1" type="date" value={userData.birthday} onChange={handlerChange}/>
                </div>

                <button className="bg-gray-200 px-6 py-2 border border-gray-800 transform hover:scale-105 hover:border-red-800" onClick={guardado}>Enviar</button>
            </form>
        </div>
    )

}