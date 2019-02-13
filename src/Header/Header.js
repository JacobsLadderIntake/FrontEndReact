import React from 'react'
import './header.css';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap'

// need to be able to have a check on what page is
 class Header extends React.Component {
     constructor(props) {
         super(props);
         this.state = {
             isLoggedIn: true
         };

     }


    render() {
        var isLoggedIn = {
            display: this.state.isLoggedIn ? "flex" : "none",
        };
        return (
            <Navbar className="header">
                <NavbarBrand className="company text-lg-left">Jacob's Ladder Intake Profile</NavbarBrand>
                    <Nav className="ml-auto" row style={isLoggedIn}>
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