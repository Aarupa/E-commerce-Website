// import { useState } from "react";
// import styled from "styled-components";


// function Login( {setIslogin, setShowLogin}) {

//     const [user, setUser] = useState("");
//     const [pass, setPass] = useState("");

//     const [loginFailed , setloginFailed] = useState(false);

//     const handleLogin = async () => {
//         const res = await fetch(
//             "https://fullstack-ecom-render.onrender.com/account/login/",
//                     {
//                         method:"post",
//                         headers:{
//                             'Accept': "application/json",
//                             'content-type' : "application/json"
//                         },
//                         body: JSON.stringify({
//                             username : user,
//                             password : pass
//                         })
//             }
//         )

//         if(res.status === 200){
//             setIslogin(true);
//         }
//         else{
//             setloginFailed(true);
//         }

//     }

//     return (
//         <stylelogin>
//         <section className="block border border-solid border-black h-2/3 p-12">
//             <h1 className="text-xl font-bold">Login</h1>
//             <input className="border m-2 p-1 border-black border-solid rounded-md" type="text"
//                 placeholder="username"
//                 value={user}
//                 onChange={(e) => setUser(e.target.value)}
//             /> <br />

//             <input className="border p-1 border-black border-solid rounded-md" type="password"
//                 placeholder="password"
//                 value={pass}
//                 onChange={(e) => setPass(e.target.value)}
//             /> <br />
//             {loginFailed && <p>Login Failed ! invalide Username and password</p>}
//             <button className="border p-1 m-2 border-black border-solid w-20 " onClick={handleLogin} >Login</button>
//             <p>New User <a  onClick={()=>setShowLogin(false)} href="#">Register</a></p>
//         </section>
//         </stylelogin>
//     )
// }


// const stylelogin = styled.block`
//     position:fixed;

// `;
// export default Login;

import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Login({ setIslogin, setShowLogin }) {

    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    const [loginFailed, setloginFailed] = useState(false);

    const handleLogin = async () => {
        console.log(user,pass);
        const res = await fetch(
            "https://fullstack-ecom-render.onrender.com/account/login/",
            {
                method: "post",
                headers: {
                    'Accept': "application/json",
                    'content-type': "application/json"
                },
                body: JSON.stringify({
                    username: user,
                    password: pass
                })
            }
        )
        console.log(res);
        if (res.status === 200) {
            setIslogin(true);
            console.log("successfull login");
        }
        else {
            setloginFailed(true);
        }
    }

    return (
        <PageWrapper>
        <StyledSection>
            <h1 className="text-xl font-bold">Login</h1>
            <StyledInput
                type="text"
                placeholder="username"
                value={user}
                onChange={(e) => setUser(e.target.value)}
            />
            <br />
            <StyledInput
                type="password"
                placeholder="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
            />
            <br />
            {loginFailed && <ErrorMessage>Login Failed! Invalid Username and Password</ErrorMessage>}
            <StyledButton  onClick={handleLogin}>Login</StyledButton>
            <p>New User <Link  to="/login" onClick={() => setShowLogin(false)}>Register</Link></p>
        </StyledSection>
        </PageWrapper>
    )
}


const PageWrapper = styled.div`
    position: fixed;
    top: 87px;
    left: 0;
    right:0;
    background: linear-gradient(to right,#ad9bbf 20%,#ccaeeb 70%);  
    height: 90vh; 
    width: 220vh; 
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledSection = styled.section`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 4rem;
    background-color: #fff;
    text-align: center;
    border-radius: 0.65rem;
    box-shadow: 0 5px 10px 1px rgba(114, 112, 115);
`;

const StyledInput = styled.input`
    margin: 0.5rem;
    padding: 0.4rem;
    border: 1px solid #000;
    border-radius: 0.25rem;
    background-color: #dfdee0;
`;

const StyledButton = styled.button`
    margin: 0.5rem;
    padding: 0.3rem 4.7rem;
    border: 1px solid #000;
    border-radius: 0.25rem;
    background-color: #fff;
    cursor: pointer;
    background: linear-gradient(to right,#b784d1 20%, #8f68d9 70%);
`;

const ErrorMessage = styled.p`
    color: red;
`;

export default Login;
