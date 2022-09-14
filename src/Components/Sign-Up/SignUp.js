import styled from "styled-components"
import { Link } from "react-router-dom"
import FormSignUp from "./FormSignUp"
import logo from "../../assets/lamp.png"

export default function SignUp() {
    return (
        <SignUpWrap>
            <img src={logo} alt="logo" />
            <FormSignUp/>
            <Link to="/sign-in">
            <span>Já tem uma conta? Entre agora!</span>
            </Link>
        </SignUpWrap>
    )
}

const SignUpWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;

img {
    width: 120px;
}

span {
    color: white;
    margin-top: 4vh;
    display: flex;
    font-size: 14px;
}

h1 {
    font-size: 32px;
    font-family: 'Saira Stencil One', cursive;
}
    
`