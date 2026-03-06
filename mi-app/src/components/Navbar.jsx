import { Link } from "react-router-dom"


function Narvar(){
    return(
        <div className="menu">
            <Link to="/">login</Link>
            <Link to="register">Registrar</Link>
            <Link to="users">Usuarios</Link>
        </div>
    )
}


export default Narvar