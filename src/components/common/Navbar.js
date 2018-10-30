import React from 'react'
import { Link } from 'react-router-dom'
const db = require('../../db/nav.json');

export default function Navbar() {
      
  return (
    <nav className="navbar navbar-inverse navbar-fixed-top">
       <div className="container"> 
       <div className="navbar-header" style={{paddingTop:'15px',color:'#fff'}}>
         My Life Plan
       </div> 
       <ul className="nav navbar-nav">
          {db.rootnav.map((i,key)=>
            <li key={key}><Link to={i.nav}>{i.text}</Link></li>
          )}
       </ul>
       </div>
    </nav>
  )
}
