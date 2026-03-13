import { Container, Button } from "react-bootstrap"

export default function InicioRB() {
  return (
    <Container className="bg-white p-4 border">
      <h1 className="text-success">React Bootstrap</h1>
      <Button variant="danger">Aceptar</Button>
    </Container>
  )
}