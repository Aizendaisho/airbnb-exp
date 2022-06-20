import React from 'react'
import "./contenido.css"
import content from "./content.png"

 const Contenido = () => {
  return (
     <section className='hero'>
      <img src={content} className="imagen"  alt="" />
      <h1 className='h1-hero'>Online experience</h1>
        <p className='p-hero'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
       </p>
     </section>
   
  )
}
export default Contenido
