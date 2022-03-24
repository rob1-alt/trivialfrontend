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
            <div className="navbarLogo">
        
                <img className="logoImg"src="/img/t.svg"/>
            
            </div>
        <ul className="navbarLinks">
            <li className="navbarItem" onClick={handleShowLinks}>
                <Link href="/" className="navbarLink">
                    Accueil
                </Link>
            </li>
            <li className="navbarItem" onClick={handleShowLinks}>
                <Link href="/produit" className="no-global-styles">
                    Produit
                </Link>
            </li>
            
            <li className="navbarItem" onClick={handleShowLinks}>
                <Link href="/ranking" className="navbarLink">
                    Top 100
                </Link>
            </li>
            <li className="navbarItem" onClick={handleShowLinks}>
                <Link href="/cycling" className="navbarLink" >
                    Recycle 
                </Link>
            </li>
        
            
        </ul>
        <button className="navbarBurger" onClick={handleShowLinks}>
            <span className="burgerBar"></span>
        </button>
    
        
        </nav>
        
        
    )

    
}




export default Navigation




