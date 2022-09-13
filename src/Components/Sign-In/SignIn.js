import styled from "styled-components"
import { Link } from "react-router-dom"
import FormSignIn from "./FormSignIn"
import logo from "../../assets/lamp.png"

export default function SignIn(){
    return(
        <SignInWrap>
            <img src={logo} alt="logo" />
            <FormSignIn />
            <Link to="/sign-up">
                <span>Primeira vez? Cadastre-se aqui!</span>
            </Link>
        </SignInWrap>
    )
}

const SignInWrap = styled.div`
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
`