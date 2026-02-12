import React from 'react'
import { Link } from 'react-router-dom'

class HeaderComponent{

    render(){
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <Link to="/" className="navbar-brand">Library Management App</Link>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent
