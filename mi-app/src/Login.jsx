import { useState } from "react";

function Login() {

  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  const ingresar = () => {
    console.log("Correo:", correo);
    console.log("Password:", password);
  };

  return (
    <div>

      <h1>Login</h1>

      <div>

        <input
          type="email" placeholder="Correo" onChange={(e) => setCorreo(e.target.value)}
        />

        <input
          type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={ingresar}>Ingresar</button>

      </div>

    </div>
  );
}

export default Login;