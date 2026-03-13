import { Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function MenuVertical() {
  return (
    <Navbar bg="dark" variant="dark" className="flex-column vh-100 p-3">
      <Navbar.Brand>Menu</Navbar.Brand>

      <Nav className="flex-column w-100">
        <Nav.Link as={Link} to="/">Inicio</Nav.Link>
        <Nav.Link as={Link} to="/inicioRB">InicioRB</Nav.Link>
        <Nav.Link as={Link} to="/cardRB">CardRB</Nav.Link>
      </Nav>

    </Navbar>
  )
}