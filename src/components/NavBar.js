import React from 'react'
import { NavLink } from 'react-router-dom';
// import { Link } from 'react-router-dom'

const boxButtonStyle = {
  display: "inline-block",
  width: "150px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
      <>
    <div className="nav">
        <h3 className="project-title">NavBar</h3>
        
        <NavLink to="/computer" 
        exact style={boxButtonStyle} 
        activeStyle={{ background: "darkblue", }}>
            <h3> Add Ticket</h3>
        </NavLink>
        
        <NavLink to="/employee"
        exact style={boxButtonStyle} 
        activeStyle={{ background: "darkblue", }}
        >
            <h3> Add Employee</h3>
        </NavLink>
    </div>
    </>
  )
}

export default NavBar