import { useState } from "react"


function Login(){

    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")

    const ingresar=(e)=>{
        e.preventDefault()
        console.log(email)
        console.log(password)
    }

    return(
        <div>
            <h2>Login</h2>

            <form onSubmit={ingresar}>

                <input type="email" placeholder="correo" value={email} onChange={(e)=>setEmail(e.target.value)} />
                <input type="password" placeholder="Contraseña" value={password} onChange={(e)=>setPassword(e.target.value)} />   
                

                <button>Ingresar</button>
                
            </form>

        </div>
    )
}


export default Login