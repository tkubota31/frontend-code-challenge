import React from "react"
import {Link,NavLink} from "react-router-dom"
import "../CSS/Navigation.css"

function Navigation(){
    return(
        <div className="nav-bar">
            <ul>
                <li>
                    <NavLink to="/admin">
                        Admin
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/register">
                        Register
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navigation
