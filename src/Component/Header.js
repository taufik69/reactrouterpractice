import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
    return (
        <>
            <header>
                <ul className='navbar'>

                    <li> <NavLink to="/">Home</NavLink></li>
                    <li> <NavLink to="/about">About</NavLink></li>
                    <li> <NavLink to="/blog">Blog</NavLink></li>
                    <li> <NavLink to="/contact">Contact</NavLink></li>

                </ul>
            </header>


        </>
    )
}

export default Header