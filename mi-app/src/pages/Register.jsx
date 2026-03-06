import { useState } from "react"

function Register(){

    const[nombre,setNombre]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")

    const registrar=(e)=>{
        e.preventDefault()
        console.log(nombre)
        console.log(email)
        console.log(password)
    }

    return(

        <div>

            <h2>Registro</h2>

            <form onSubmit={registrar}>

                <input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e)=>setNombre(e.target.value)}
                />

                <input
                type="email"
                placeholder="Correo"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />

                <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />

                <button>Registrar</button>

            </form>

        </div>

    )
}

export default Register