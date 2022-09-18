import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import FormSignUp from "./FormSignUp"
import logo from "../../assets/lamp.png"
import { BsArrowLeft } from 'react-icons/bs';

export default function SignUp() {

    const navigate = useNavigate();

    return (
        <SignUpWrap>
            <BsArrowLeft className="icon" onClick={()=> navigate("/")}/>
            <img src={logo} alt="logo" />
            <FormSignUp/>  
            <p>Already have an account?</p>          
            <span onClick={()=> navigate("/sign-in")}>
                Sign in from here!
            </span>           
        </SignUpWrap>
    )
}

const SignUpWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    position: relative;

img {
    width: 120px;
    :hover {
        filter: brightness(1.2);
    }
}
p {
    margin-top: 4vh;
    display: flex;
    font-size: 16px;
    color: #fcd9b8;
}
span {
    margin-top: 2vh;
    display: flex;
    font-size: 16px;
    font-weight: 500;
    color: #e09145;
    cursor: pointer;

    :hover {
        text-decoration-line: underline;
    }
}

h1 {
    font-size: 32px;
    font-family: 'Saira Stencil One', cursive;
}

.icon {
    font-size: 30px;
    cursor: pointer;
    color: #fcd9b8;
    position: absolute;
    top: 20px;
    left: 15px;
}
    
`