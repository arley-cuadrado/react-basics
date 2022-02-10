import React, { useState } from "react";


const Listas = () =>{

    //const estadoInicial = [1,2,3,4,5]
    const estadoInicial = [
        { id:1, texto: 'Tarea 1' },
        { id:2, texto: 'Tarea 2' },
        { id:3, texto: 'Tarea 3' }
    ]

    const [ lista, setLista ] = useState(estadoInicial)

    // Operador de propagación
    {/*
    const arrayUno = ['Chile', 'Argentina']
    const arrayDos = ['Perú', 'México']

    const Unidos = [ ... arrayUno, ... arrayDos ]
    console.log(Unidos)
    */}

    const agregarElemento = () =>{
        console.log('diste click!')
        setLista([
            ...lista,
            { id:4, texto: 'Tarea 4' }
        ])
    }

    
    return(
        <>  
            <hr />
            <h2>Listas</h2> 
            {
                lista.map( ( item, index ) => (
                    <h4 key={index}>Número: {item.texto}</h4>
                ))
            }

            <button onClick={ ()=> agregarElemento() }>Agregar</button>
            
        </>
    )

}
export default Listas;