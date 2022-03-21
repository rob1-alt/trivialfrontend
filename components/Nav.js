import React from 'react'
import { useState } from "react"
// import Cycling from '../pages/cycling'
import Link from 'next/link'



function Navigation(){


    const[showLinks, setShowLinks] = useState(false)

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }


    return(
        <nav className={`navbar ${showLinks? "showNav" : "hideNav"} `}>
            <div className="navbarLogo">Logo</div>
        <ul className="navbarLinks">
            <li className="navbarItem" className="navbarLink">
                <a href="/">
                    Accueil
                </a>
            </li>
            <li className="navbarItem">
                <a href="/produit" className="navbarLink">
                    Produit
                </a>
            </li>
            
            <li className="navbarItem">
                <a href="/ranking" className="navbarLink">
                    Top 100
                </a>
            </li>
            <li className="navbarItem">
                <a href="/cycling" className="navbarLink">
                    Recycle 
                </a>
            </li>
        
            
        </ul>
        <button className="navbarBurger" onClick={handleShowLinks}>
            <span className="burgerBar"></span>
        </button>
        </nav>
        
    )
}


export default Navigation