import MenuVertical from "./MenuVertical"
import InicioRB from "./InicioRB"
import CardRB from "./CardRB"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Container, Button } from "react-bootstrap"
import Home from "./home"


function App() {
  return (
    <BrowserRouter>
      <div className="d-flex vh-100">

        <div style={{ width: "220px" }}>
          <MenuVertical />
        </div>

        <div className="bg-light w-100 p-4">

          <Routes>

            <Route
              path="/" element={
                <>
                  <Home/>
          
                </>
              }
            />

            <Route path="/inicioRB" element={<InicioRB />} />
            <Route path="/cardRB" element={<CardRB />} />

          </Routes>

        </div>

      </div>
    </BrowserRouter>
  )
}

export default App