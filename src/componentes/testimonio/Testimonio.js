import React from 'react'
import "./testimonio.css"




const Testimonio = (props) => {
  console.log(props.informa)
  
  let medalla

  if (props.informa.disponible ===0) {
        medalla = `sold out`
        
  }else {
    medalla =`online`
    
  }
if (medalla===`sold out`) {
  
  
}



  return (   

    <div className='contenedor-carta'>
      <span className='estado'>{medalla}</span>
      <img src={props.informa.img} className="carta" alt="" />    
      <div className='section-rate'>
      <img src="./images/start.png" className="start" alt="" />
      <span className='puntaje'>{props.informa.puntaje} </span> <span className='usa'> ({props.informa.conteo}) * {props.informa.pais}</span>
      </div>
      <p className='lessons'>Life lessons with {props.informa.nombre}</p>
      <p className='parrafo-2'><span className='precio'>From ${props.informa.precio}</span> /Person</p>
    </div>



   
)
}

export default Testimonio


