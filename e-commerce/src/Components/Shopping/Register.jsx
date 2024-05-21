import { useState } from "react";

function Register({setShowLogin}){

    const [useData , setUserdata] = useState(
        {
            username: "",
            email : "",
            password: ""
        }
    )

    const [error ,setError]= useState(false);
    const [loginSuccess, setLoginSuccess] = useState(false);

    const handleRegister = async() => {
            const res = await fetch('https://fullstack-ecom-render.onrender.com/account/register/' ,
                {
                    method: "post",
                    headers:{
                        'Accept': "application/json",
                        'content-type' : "application/json"
                    },
                    body: JSON.stringify({
                        username: useData.username,
                        email: useData.email,
                        password: useData.password
                    })
                }
            )
            if(res.status===200){
               setLoginSuccess(true)
               setTimeout(()=>{
                setShowLogin(true)
               }, 3000)
            }
            else{
                setError(true);
                setTimeout(()=>{
                    setError(false);
                },3000)
            }
    }


    return(
       <section className="block">

        <h1 className="text-xl font-bold">Register</h1>
        <input className="border m-2 p-1 border-black border-solid rounded-md" type="text"  
        placeholder="Username"
        value={useData.username}
        onChange={(e) => setUserdata({...useData, username: e.target.value})}
        />
        <br/>

        <input className="border m-1 p-1 border-black border-solid rounded-md" type="email" 
        placeholder="abc@gmail.com" 
        value={useData.email}
        onChange={(e) => setUserdata({...useData, email: e.target.value})}
        />
        <br/>

        <input className="border p-1 border-black border-solid rounded-md" type="password"
                placeholder="password"
                value={useData.password}
                onChange={(e) => setUserdata({...useData, password: e.target.value})}
            /> <br/>

        {error && <p>User is already existed !</p>}
        {loginSuccess && <p>Register Successfull ! Please Login</p>}
        <button className="border p-1 m-2 border-black border-solid w-20 " onClick={handleRegister}>Register</button>
        <p>Already Have a Account ? <a onClick={()=>setShowLogin(true)} href="#">Login</a></p>
       </section>
    )
}

export default Register;