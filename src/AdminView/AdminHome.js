import React from 'react'

import './adminHome.css';
import '../custom-style.css'
import Header from '../Header/Header'
import { Button, Input} from 'reactstrap'

class AdminHome extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <div className = "adminHome container-fluid p-4" >
                    <div className = "row" >
                        <a className = "admin-top col-9">
                            <h1 className="">Admission Team Board: [add user name here]</h1>
                        </a>
                    </div>
                    <div className={"row p-3"}>
                        <Button className= "col-2 mr-sm-2 button">Add New Student</Button>
                        <Input className="col-2 mr-sm-2 form-control ml-auto" type="search" placeholder="Search" aria-label="Search"/>
                        <Button className="col-1 my-2 my-sm-0 button" type="submit">Search</Button>
                    </div>
                </div>
            </div>

    )
    }
}

export default AdminHome