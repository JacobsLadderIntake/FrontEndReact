import React from 'react'
import './header.css';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap'
import {isAdmin} from "../Login";


 class Header extends React.Component {
     constructor(props) {
         super(props);
         this.state = {
             isLoggedIn: true
         };
         this.handleHomeClick = this.handleHomeClick.bind(this);


     }

     handleHomeClick() {
         if (isAdmin) {
             return "/#/adminhome";
         } else {
             return "/#/parenthome";
         }
     }

    render() {
        let isLoggedIn = {
            display: this.props.loggedIn ? "flex" : "none",
        };
        let link = isAdmin ? "/#/adminhome" : "/#/parenthome";
        return (
            <Navbar className="header shadow fixed-top">
                <NavbarBrand className="company text-left">Jacob's Ladder Intake Profile</NavbarBrand>
                    <Nav className="ml-auto" style={isLoggedIn}>
                        <NavItem >
                            <NavLink className="header" href={link}>Home</NavLink>
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