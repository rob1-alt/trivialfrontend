import React from 'react'
import { useState } from "react"
import Cycling from './Cycling'
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
            <li className="navbarItem">
                <Link href="/">
                    Accueil
                </Link>
            </li>
            <li className="navbarItem">
                <a to="/" className="navbarLink">
                    Produit
                </a>
            </li>
            
            <li className="navbarItem">
                <a href="/" className="navbarLink">
                    Top 100
                </a>
            </li>
            <li className="navbarItem">
                <a href="/Cycling" className="navbarLink">
                    Recycle tes morts 
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