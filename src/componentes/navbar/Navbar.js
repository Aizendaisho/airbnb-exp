import React from 'react'
import "./navbar.css"
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faAirbnb } from "@fortawesome/free-brands-svg-icons"

const Navbar = () => {

  return (
    <>
    
      <nav className='navbar'>
       <FontAwesomeIcon className='icon' icon={faAirbnb} /> <h3>airbnb</h3>
      </nav>
      





     
    </>
  )
}
export default Navbar