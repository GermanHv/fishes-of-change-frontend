
export default function voluntario(){
    return(
        <div className="flex-direction column items-center space-x-20">
            <h1 className="font-bold text-2xl">¡Conviertete en un voluntario!</h1>
            <div>
            <label>Nombre: 
                <input className="border-color:blue" type="text" name="nombre"/>
            </label>
            </div>
            <div>
            <label>Correo:
                <input className="border-color blue" type="email" name="email"/>
            </label>
            </div>
            <div>
            <label>Teléfono:
                <input className="border-color blue" type="tel" name="telefono"/>
            </label>
            </div>
            <div>
            <label>Edad:
                <input className="background-color:blue" type="date" name="edad" />
            </label>
            </div>
            <button className="hover: border-color:blue ">Enviar</button>
        </div>
    )

}