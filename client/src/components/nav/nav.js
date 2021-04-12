import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

const Nav = () => (
  <nav className="navbar navbar-light bg-light">
    <div className="container-fluid">
      <Link to="/"  className="home" href="#">Home</Link>
            <Link to="/Save" className="save" aria-current="page" href="#">Save</Link>
    </div>
  </nav>
)

export default Nav