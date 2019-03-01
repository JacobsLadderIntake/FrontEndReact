import React from 'react'
import './header.css';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap'

// need to be able to have a check on what page is
 class Header extends React.Component {
     constructor(props) {
         super(props);
         // this.state = {
         //     loggedIn: true
         // };

     }


    render() {
        let isLoggedIn = {
            display: this.props.loggedIn ? "flex" : "none",
        };
        return (
            <Navbar className="header shadow fixed-top">
                <NavbarBrand className="company text-left">Jacob's Ladder Intake Profile</NavbarBrand>
                    <Nav className="ml-auto" style={isLoggedIn}>
                        <NavItem >
                            {/*this need to change to be adminHome or parentHome depending on who is logged in*/}
                            <NavLink className="header" href="/adminHome">Home</NavLink>
                        </NavItem>
                        {/*is this really needed??? i'm not sure if / when we are even implementing alerts*/}
                        {/*<NavItem> */}
                            {/*<NavLink className="header" href="">Alert</NavLink>*/}
                        {/*</NavItem>*/}
                        <NavItem>
                            <NavLink className="header" href="/login">Logout</NavLink>
                        </NavItem>
                    </Nav>
            </Navbar>
        )
    }
}

export default Header