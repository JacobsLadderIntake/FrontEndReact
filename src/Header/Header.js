import React from 'react'
import './header.css';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap'

 class Header extends React.Component {
    render() {
        return (
            <Navbar className="navbar navbar-expand-lg header" expand="md">
                <NavbarBrand className="text-lg-left">Jacob's Ladder Intake Profile</NavbarBrand>
                    <Nav className="ml-auto">
                        <NavItem >
                            <NavLink className="header" href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="header" href="/">Alert</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="header" href="/">Logout</NavLink>
                        </NavItem>
                    </Nav>
            </Navbar>
        )
    }
}

export default Header