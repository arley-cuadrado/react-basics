import React, { useState } from "react";


const Formulario = () =>{

    const [ fruta, setFruta ] = useState('')
    const [ descripcion, setDescripcion ] = useState('')
    const [ lista, setLista ] = useState([])

    // Validación simple
    const guardarDatos = (event) =>{
        event.preventDefault()
        
        if( !fruta.trim() ){
            console.log('Está vacio fruta')
            return
        }

        if( !descripcion.trim() ){
            console.log('Está vacio descripción')
            return
        }

        console.log('Procesando datos... ' + fruta + ' ' + descripcion)

        setLista([
            ... lista,
            { 
              nombreFruta: fruta, 
              nombreDescripcion: descripcion 
            }
        ])

        // Limpiar datos del value y de los estados
        event.target.reset()
        setFruta('')
        setDescripcion('')
        
    }
    
    return(
        <>
            <h1>Formulario</h1>
            <form onSubmit={ guardarDatos }>
                <input
                    type="text"
                    placeholder="Ingrese Fruta"
                    className="form-control mb-2"
                    onChange={ (e) => setFruta(e.target.value) }
                ></input>

                <input
                    type="text"
                    placeholder="Ingrese Descripción"
                    className="form-control mb-2"
                    onChange={ (e) => setDescripcion(e.target.value) }
                ></input>
                <button className="btn btn-primary btn-block" type="submit">Agregar</button>
            </form>
            <ul>
                {
                    lista.map( ( item, index ) => (
                        <li key={ index }> 
                            {item.nombreFruta} - {item.nombreDescripcion} 
                        </li>
                    ))
                }
            </ul>
        </>

    )

}
export default Formulario;