import React from "react";
import {Link} from "react-router-dom";

function Homepage(){
    return(
        <div>
            <h3>Yodlr App!</h3>
            <p>
                <Link to="/register">Register</Link>
                <Link to="/admin">Admin</Link>
            </p>
        </div>
    )
}

export default Homepage
