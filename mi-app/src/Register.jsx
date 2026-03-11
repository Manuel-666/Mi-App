import { useState } from "react";

function Register() {

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  const registrar = () => {
    console.log("Nombre:", nombre);
    console.log("Correo:", correo);
    console.log("Password:", password);
  };

  return (
    <div>

      <h1>Registro</h1>

      <div>

        <input
          type="text" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)}
        />

        <input
          type="email" placeholder="Correo" onChange={(e) => setCorreo(e.target.value)}
        />

        <input
          type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={registrar}>Registrar</button>

      </div>

    </div>
  );
}

export default Register;