import Register from "./Register";
import Login from "./Login";
import { useState } from "react";

function Form({setIslogin}){
        const [ShowLogin , setShowLogin] = useState(true);

    return(
        <>
        {
            ShowLogin ? <Login setIslogin={setIslogin} setShowLogin={setShowLogin}/> 
            : <Register setShowLogin={setShowLogin}/>
        }
        </>
    )
}
export default Form;