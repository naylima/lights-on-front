import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/lamp.png"

export default function AuthSelector() {
    return(
        <AuthWrapper>
            <img src={logo} alt="logo"/>

                <Link to="/sign-up">
                    <SignUpButton>
                        <div>Cadastrar</div>
                    </SignUpButton>
                </Link>
                <Link to="/sign-in">
                    <SignInButton>
                        <div>Entrar</div>
                    </SignInButton>
                </Link>
        </AuthWrapper>
    )
}

const AuthWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
img {
    width: 120px;
    margin-bottom: 6vh;
}
`

const SignUpButton = styled.div`
    border: none;
    width: 60vw;
    height: 7vh;
    background-color: #e09145;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 5px;
    margin-top: 2vh;
    cursor: pointer;
div {
    font-family: 'Hind', sans-serif;
    color: white;
    font-size: 20px;
    font-weight: bold;
}
`

const SignInButton = styled.div`
    border: 2px solid #e09145;
    width: 60vw;
    height: 7vh;
    background-color: rgba(0,0,0,0);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 5px;
    margin-top: 2vh;
    cursor: pointer;
div {
    font-family: 'Hind', sans-serif;
    color: #e09145;
    font-size: 20px;
    font-weight: bold;
}
`


