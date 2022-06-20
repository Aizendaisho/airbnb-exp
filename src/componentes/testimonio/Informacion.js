import React from 'react'
import Info from '../Info'
import Testimonio from './Testimonio'


const informacion = Info.map((infoma) =>{
    return <Testimonio key={infoma.id} informa={infoma} />
  })
  
  export default informacion

  // estado={infoma.estado}
  // puntaje={infoma.puntaje}
  // conteo={infoma.conteo}
  // pais={infoma.pais} 
  // nombre={infoma.nombre}
  // precio={infoma.precio}  