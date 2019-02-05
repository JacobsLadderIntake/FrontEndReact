import React from 'react'
import './header.css';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap'

 class Header extends React.Component {
    render() {
        return (
            <Navbar className="header">
                <NavbarBrand className="company text-lg-left">Jacob's Ladder Intake Profile</NavbarBrand>
                    <Nav className="ml-auto">
                        <NavItem >
                            <NavLink className="header" href="/adminHome">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="header" href="">Alert</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="header" href="/login">Logout</NavLink>
                        </NavItem>
                    </Nav>
            </Navbar>
        )
    }
}

export default Header