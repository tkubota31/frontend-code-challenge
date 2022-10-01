import axios from "axios"


const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";



class useApi {

    static async getAllUsers(){
        try{
            const response = await axios.get("/users");
            return response.data
        } catch(e){
            console.log(e)
        }
    }

    static async userRegister(user){
        try{
            const response = await axios.post("/users",user)
            return response.data
        } catch(e){
            console.log(e)
        }
    }

    static async getOneUser(id){
        try{
            const response = await axios.get(`/users/${id}`)
            return response.data
        } catch(e){
            console.log(e)
        }
    }

    static async updateUser(id){
        try{
            const response = await axios.patch(`/users/${id}`)
            return response.data
        } catch(e){
            console.log(e)
        }
    }

    static async deleteUser(id){
        try{
            const response = await axios.delete(`/users/${id}`)
        } catch(e){
            console.log(e)
        }
    }

}


export default useApi
