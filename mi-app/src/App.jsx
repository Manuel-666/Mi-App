import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Login from "./Login";
import Register from "./Register";
import Usuario from "./Usuario";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/usuario" element={<Usuario />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;