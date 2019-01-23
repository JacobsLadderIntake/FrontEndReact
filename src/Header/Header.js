import React from 'react'
import './Header.css';


 class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="navbar">
                    <a className="navbar-brand">Jacob's Ladder Intake Profile</a>
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active text-right" href="#">Home <span class="sr-only">(current)</span></a>
                        <a className="nav-item nav-link text-right" href="#">Alert</a>
                        <a className="nav-item nav-link text-right" href="#">Logout</a>
                    </div>

                </div>
            </nav>
        )
    }
}

export default Header