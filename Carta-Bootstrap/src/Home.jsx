import { Container, Button } from "react-bootstrap"

 function Home() {
  return (
    <Container className="bg-white p-4 border">
      <h1 className="text-success">Hola Binevenido a Inicio</h1>
      <Button variant="primary">Entrar</Button>
    </Container>
  )
}

export default Home