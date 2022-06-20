import React from 'react'
import "./contacto.css"
import gato from './gato.png'
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons"

const Contacto = (props) => {



  return (
    <>
        <div className='contactos'>
            <img src={gato} alt="" className='gato'/>
            <div className='texto'>
                <h1>{props.nombre}</h1>
                <p><FontAwesomeIcon icon={faPhone} /> {props.telefono}</p>
                <p><FontAwesomeIcon icon={faEnvelope} /> {props.correo}</p>
            </div>
        </div>
    </>
  )
}

export default Contacto