import React from 'react'
import logo_long from "../assets/logo_long.png";

const Navbar = () => {
  return (
      <nav className="sticky top-0 py-3 backdrop-blur-lg border-b border-neutral-700/80 " style={{backgroundColor:'#CDDC39'}}>
        <div className="container px-4 mx-auto relative text-sm">
          <div className="flex items-center flex-shrink-0">
              <img className="h-12 mr-2 border-1 rounded-md" src={logo_long} alt="logo" />
          </div> 
        </div>
      </nav>
  )
}

export default Navbar