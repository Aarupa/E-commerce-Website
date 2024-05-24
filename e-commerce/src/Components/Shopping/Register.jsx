import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Register({ setShowLogin }) {

    const [useData, setUserdata] = useState({
        username: "",
        email: "",
        password: ""
    });

    const [error, setError] = useState(false);
    const [registerSuccess, setRegisterSuccess] = useState(false);

    const handleRegister = async () => {
        const res = await fetch('https://fullstack-ecom-render.onrender.com/account/register/',
            {
                method: "post",
                headers: {
                    'Accept': "application/json",
                    'content-type': "application/json"
                },
                body: JSON.stringify({
                    username: useData.username,
                    email: useData.email,
                    password: useData.password
                })
            }
        )

       
        if (res.status === 200) {
            setRegisterSuccess(true);
            setTimeout(() => {
                setShowLogin(true);
            }, 3000);
        }
        else {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 3000);
        }
    }

    return (
        <PageWrapper>
            <StyledSection>
                <h1 className="text-xl font-bold">Register</h1>
                <StyledInput
                    type="text"
                    placeholder="Username"
                    value={useData.username}
                    onChange={(e) => setUserdata({ ...useData, username: e.target.value })}
                />
                <br />

                <StyledInput
                    type="email"
                    placeholder="abc@gmail.com"
                    value={useData.email}
                    onChange={(e) => setUserdata({ ...useData, email: e.target.value })}
                />
                <br />

                <StyledInput
                    type="password"
                    placeholder="password"
                    value={useData.password}
                    onChange={(e) => setUserdata({ ...useData, password: e.target.value })}
                />
                <br />

                {error && <ErrorMessage>User already exists!</ErrorMessage>}
                {registerSuccess && <p>Registration Successful! Please Login.</p>}
                <StyledButton onClick={handleRegister}>Register</StyledButton>
                <p>Already Have an Account? <Link  to='/login' onClick={() => setShowLogin(true)} >Login</Link></p>
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
    padding: 0.4rem 4.2rem;
    border: 1px solid #000;
    border-radius: 0.25rem;
    background-color: #fff;
    cursor: pointer;
    background: linear-gradient(to right,#b784d1 20%, #8f68d9 70%);
`;

const ErrorMessage = styled.p`
    color: red;
`;

export default Register;
