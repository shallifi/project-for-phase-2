import React from 'react'
import { Link } from 'react-router-dom'


function NavBar() {
  return (
      <>
    <div className="nav">
        <h3 className="project-title">NavBar</h3>
        
        <Link to="/computer" >
            <h3> Computer</h3>
        </Link>
        
        <Link to="/employee">
            <h3> Employee</h3>
        </Link>
    </div>
    </>
  )
}

export default NavBar