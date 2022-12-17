import React from 'react'
import logo from "../../Assets/Img/15.svg";
import "./Sidebar.css";
export default function Sidebar() {
  return (
    <div className='sidebar'>
        <a href="#" className="logo-link">
            <img src={logo} alt="" className="logo-img" />
        </a>
    </div>
  )
}
