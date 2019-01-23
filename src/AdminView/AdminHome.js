import React from 'react'
import './AdminHome.css';

import Header from '../Header/Header'

class AdminHome extends React.Component {
    render() {
        return (

            <div className = "AdminHome">
                <Header/>
                <div className = "row">
                    <div className = "col-8">
                        <h1>Administrator Board: [add user name here]</h1>
                        <button>Add New Student</button>
                    </div>
                    <div className = "col">
                        <button>Search</button>
                    </div>
                </div>
            </div>
    )
    }
}

export default AdminHome