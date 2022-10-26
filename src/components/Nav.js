import iml from "../img/logotipo2.png"
import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'
const Nav = ()=>{

    

    return(
        
        <div className="elbar">
            <NavLink to="/" >
            <div className="navhome" >
            <div className="nav0"><img className="yu" src={iml}/></div>
            <div className="titleEm">CASA CRUZ</div>
            <div className="titleEm2">TIERRA DE ALEBRIJES</div>
            </div></NavLink>
            <div className="nav1" ><NavLink   to="/Prodinamic">Productos</NavLink></div>
            <div className="nav1"><NavLink to="/About">Nosotros</NavLink></div>
            <div className="nav1"><NavLink to="/Footer">Contactanos</NavLink></div>
        
        </div>
        
       
    );

}
export default Nav