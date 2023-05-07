import React, {useState} from "react";

export const ListaH = ()=> {
    const listaHero=[
        "spider man",
        "hobre araña",
        "huljk",
        "batman",
        "iroman"
    ]
    const [hero, setHero]=useState(listaHero)
    const alumnos=[
        {id:201923357, name: 'shagy', carrera:'civil'},
        {id:201923357, name: 'Diego', carrera:'civil'},
        {id:201923357, name: 'Abisai', carrera:'civil'},
        {id:201923357, name: 'Manolito', carrera:'civil'}
    ]
    //INGRESAR HEROE
    const ingresarHeroes=()=>{
        const h=prompt('Ingresar Heroe')
        setHero([...hero,h])
    }
    //iNGRESAR ALUMNO
    const [Al, setAl]=useState(alumnos)
    const ingresarAlumnose=()=>{
        const id=prompt('Ingresar Id')
        const name=prompt('Ingresar Nombre')
        const carrera=prompt('Ingresar Carrera')
        setAl([...Al,{id,name,carrera}])
    }
    return(
        <>
        <h2>LISTA DE HEROES</h2>
        <ol>
            {
                hero.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))
            }
        </ol>
        <button onClick={ingresarHeroes}>INGRESAR SUPER HEROE</button>


        
            <h2>Lista de alumnos </h2>
            <table border={1}>
                <thead>
                    <tr>
                        <th>id2</th>
                        <th>ID</th>
                        <th>NOMBRE</th>
                        <th>CARRERA</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Al.map((item,index)=>(
                            <tr>
                            <td>{index}</td>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.carrera}</td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>
            <button onClick={ingresarAlumnose}>Ingresar alumo</button>
        </>
    )
}
    
  

