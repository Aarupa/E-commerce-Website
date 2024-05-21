import { useState } from "react";


function Login( {setIslogin, setShowLogin}) {

    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    const [loginFailed , setloginFailed] = useState(false);

    const handleLogin = async () => {
        const res = await fetch(
            "https://fullstack-ecom-render.onrender.com/account/login/",
                    {
                        method:"post",
                        headers:{
                            'Accept': "application/json",
                            'content-type' : "application/json"
                        },
                        body: JSON.stringify({
                            username : user,
                            password : pass
                        })
            }
        )
        
        // const data = await res.json();
        // console.log(res);

        if(res.status === 200){
            setIslogin(true);
        }
        else{
            setloginFailed(true);
        }

    }

    return (
        <section className="block">
            <h1 className="text-xl font-bold">Login</h1>
            <input className="border m-2 p-1 border-black border-solid rounded-md" type="text"
                placeholder="username"
                value={user}
                onChange={(e) => setUser(e.target.value)}
            /> <br />

            <input className="border p-1 border-black border-solid rounded-md" type="password"
                placeholder="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
            /> <br />
            {loginFailed && <p>Login Failed ! invalide Username and password</p>}
            <button className="border p-1 m-2 border-black border-solid w-20 " onClick={handleLogin} >Login</button>
            <p>New User <a  onClick={()=>setShowLogin(false)} href="#">Register</a></p>
        </section>
    )
}

export default Login;