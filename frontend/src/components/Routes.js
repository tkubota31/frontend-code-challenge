import React from "react"
import {Routes, Route, Navigate} from "react-router-dom"

import Admin from "./Admin"
import Registeration from "./Registeration"
import Homepage from "./Homepage";

function AllRoutes(){
    return(
        <div>
            <Routes>
                <Route exact path="/"
                       element={<Homepage />} />

                <Route  exact path="/register"
                        element ={<Registeration />} />

                <Route  exact path="/admin"
                        element={<Admin/>}/>

                <Route path="/" element= {<Navigate to="/"/>}/>
            </Routes>
        </div>
    )
}

export default AllRoutes
