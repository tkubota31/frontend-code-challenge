import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import useApi from "../useApi"
import axios from "axios"
import Alert from "../common/Alert"
import Navigation from "./Navigation"
import "../CSS/Registeration.css"


function Registeration(){
    const INITIAL_STATE ={
        firstName: "",
        lastName:"",
        email:"",
    }

    const navigate = useNavigate();
    const [formData, setFormData] = useState(INITIAL_STATE)
    const[formErrors, setFormErrors] = useState([])

    async function handleSubmit(e){
        e.preventDefault();
        console.log("************")
        const{firstName,lastName,email} = formData
        console.log(formData)
        let res = await useApi.userRegister(formData)
        setFormData(INITIAL_STATE)

    }

    function handleChange(e){
        const {name, value} = e.target;
        setFormData(formData =>({...formData,[name]:value}));
    }


    return(
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        id="firstName"
                        name="firstName"
                        value = {formData.firstName}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        id="lastName"
                        name="lastName"
                        value = {formData.lastName}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        value = {formData.email}
                        onChange={handleChange}
                    />
                </div>

                {formErrors.length
                    ? <Alert type="danger" messages={formErrors} />
                    : null
                }

                <button
                    type="submit"

                    > Submit </button>
            </form>
            <Navigation />
        </div>
    )
}

export default Registeration
