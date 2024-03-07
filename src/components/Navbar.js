import React from 'react'
import './Navbar.css'
import { FaCartPlus } from "react-icons/fa6";

const Navbar = ({ quantity }) => {
  return (
    <div className='navbar'>
        <h1>UseReducer</h1>
        <div className="innn">
            <span className='quant_sec'><FaCartPlus /> <sup className='supp'>{ quantity }</sup></span>
        </div>
    </div>
  )
}

export default Navbar
