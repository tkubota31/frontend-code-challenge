import React, {useState, useEffect} from "react"
import axios from "axios"
import useApi from "../useApi"
import Navigation from "./Navigation"
import "../CSS/Admin.css"

function Admin(){
    const [info,setInfo] = useState([])

    async function getAllUser(){
        const res = await useApi.getAllUsers();
        // console.log(res)
        setInfo(res)
    }

    async function getUser(user){
        const newUser = await useApi.registerUser(user)
        setInfo(info =>[...info,{...newUser}])

    }

    async function deleteOneUser(id){
        await useApi.deleteUser(id)
    }

    async function updateOneUser(id){
        await useApi.updateUser(id)
    }

    useEffect(() =>{
        getAllUser();
    }, [info])



    return(
        <div className="container">
            <h2>All Users</h2>
            {info.map(user =>(
                <div className="user-info">
                    <li key = {user.id}>
                        {`Name: ${user.firstName} ${user.lastName}
                        Email: ${user.email}`}
                        <button onClick={() => deleteOneUser(user.id)}>X</button>
                    </li>
                </div>
            ))}
            <Navigation />
        </div>
    )


}

export default Admin;
