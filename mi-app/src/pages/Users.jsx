


function Users (){


    const usuarios=[
        {id:1,nombre:"Juan",correo:"juan@gmail.com"},
        {id:2,nombre:"Maria",correo:"maria@gmail.com"},
        {id:3,nombre:"Manuel",correo:"manuel@gmail.com"},
    ]


    return(
        <div>

            <h2>Tabla de Usuarios</h2>

            <table>

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Correo</th>
                    </tr>
                </thead>

                <tbody>
                    {usuarios.map((u)=>(
                     <tr key={u.id}>
                        <td>{u.id}</td>
                        <td>{u.nombre}</td>
                        <td>{u.correo}</td>
                     </tr>   
                    ))}
                </tbody>
            </table>

        </div>
    )
}



export default Users