import React, { useState } from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setMenuOpen((menuOpen) => !menuOpen)
    }

    return (
        <div className='header'>
            <div className='header-logo'>
                {menuOpen ? (
                    <FontAwesomeIcon icon={faTimes} size='2x' fixedWidth onClick={toggleMenu}/>
                ) : (
                    <FontAwesomeIcon icon={faBars} size='2x' fixedWidth onClick={toggleMenu}/>
                )}
            </div>
            <h2>ShowFlow</h2>
        </div>
    )
}
