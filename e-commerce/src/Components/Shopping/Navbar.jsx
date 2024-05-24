import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useContext} from 'react';
import { cartContext } from '../../Context/cartContext';
import logo1 from '../../assets/logo1.svg'

const Navbar = ({iscart , setIscart, isLogin, setIsLogin}) => {

    const {shopping : { cart } } = useContext(cartContext);

    const handleLogin = ()=>{
        setIsLogin(true);
    }

    return (
        <NavContainer>
            <div className="nav-center">
                <div>
                    <img src={logo1} alt="comfy sloth" style={{ width: '100px', height: '100px', marginLeft: 0 }}/>
                </div>
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/products">Products</Link>
                </div>
                <div >
                <Link to="/cart" className="m-4">Cart({cart.length})</Link>
                {!isLogin && <Link to="/login" onClick={handleLogin}>Login</Link>}
                </div>
            </div>
        </NavContainer>
    );
};

const NavContainer = styled.nav`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 5rem;
display: flex;
align-items: center;
justify-content: center;
background-color: #fff; /* Change to whatever background color you want */
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Optional: Add a shadow for better visibility */

.nav-center {
  width: 80%; /* Adjust the width as needed */
  display: flex;
  justify-content: space-between;
  align-items: center;
}


.nav-center .nav-links {
  flex-grow: 1; /* Allow the navigation links to take up remaining space */
  display: flex;
  justify-content: center;
}

.nav-center .nav-links a {
  text-decoration: none;
  color: #333; /* Example color */
  margin: 0 10px; /* Adjust the margin as needed */
}
`;

export default Navbar;
