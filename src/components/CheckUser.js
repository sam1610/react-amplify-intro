import { Auth } from "aws-amplify";
import { useState } from "react";




const CheckUser = async ()=>{
    const [user, setUser]= useState({})
    try {
        const data= await Auth.currentUserPoolUser();
        const userInfo= {username:data.username, ...data.atttributes,}
        setUser(userInfo)          
    } catch (err) {
        console.log("error" , err)
        
    }
    return (
        <div >
            <h2> Here is the User: {user}</h2>
        </div>
    )

}

export default CheckUser; 