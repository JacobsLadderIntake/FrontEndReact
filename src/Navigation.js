import React, { Component } from 'react';
import Header from "./Header/Header";
import './navigation.css'

// this will have the header bar on all pages!
class Navigation extends Component {
    render() {
        return (
            <div className={"layout"}>
                <Header />
            </div>
        )
    }
}

export default Navigation;