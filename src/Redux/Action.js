import axios from "axios"
import { GETPRODUCT, REMOVEPRODUCT, UPDATEPRODUCT } from "./Actiontype"

export const getproduct=()=>async(dispatch)=>{
    try {
          await axios.get("https://fakestoreapi.com/products").then(res=>dispatch( {type:GETPRODUCT,payload:res.data}))
       
    } catch (error) {
        console.log(error)
    }

}
export const removeproduct=(id)=>{
    return {type:REMOVEPRODUCT,payload:id}

}
export const updateproduct=(id,data)=>{
    return {type:UPDATEPRODUCT,payload:{id,data}}
}