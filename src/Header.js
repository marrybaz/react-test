import React from 'react'
import MyUl from './MyUl'

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-light">
                <MyUl />
            </nav>
            <h1>Plava ptica</h1>
        </div>
    )
}

export default Header