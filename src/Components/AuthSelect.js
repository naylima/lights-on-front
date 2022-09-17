import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/lamp.png"

export default function AuthSelector() {
    return(
        <AuthWrapper>
            <div>
                <h1>Lights<strong>ON</strong></h1>
                <p>Explore the new concept of Lamps</p>
            </div>
        
            <div>
                <Link to="/sign-in">
                    <SignInButton>
                        <div>Sign-in</div>
                    </SignInButton>
                </Link>
                <Link to="/sign-up">
                    <SignUpButton>
                        <div>Sign-up</div>
                    </SignUpButton>
                </Link>
            </div>        
            
        </AuthWrapper>
    )
}

const AuthWrapper = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 100vh;

    background-image: linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,1)),
    url('https://media.istockphoto.com/photos/vintage-light-bulbs-over-dark-background-with-copy-space-picture-id1130122625?k=20&m=1130122625&s=612x612&w=0&h=OTLHuLIOVHFmasy7gONsK3lilZJt6GCK6s-Xw5mvc6M=');
    background-position: center;
    background-size: cover;

    h1, p {
        padding: 8px;
        color: #fcd9b8;
        width: 80vw;
    }

    h1 {
        font-size: 42px;
        letter-spacing: 2.5px;
        padding: 40px 0;
        padding-top: 80px;
    }

    p {
        font-size: 30px;
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
    border-radius: 30px;
    margin-top: 2vh;
    cursor: pointer;

    :active {
            transform: scale(0.98);
            box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
    }

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
    border-radius: 30px;
    margin-top: 2vh;
    cursor: pointer;

    :active {
            transform: scale(0.98);
            box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
    }
    
div {
    font-family: 'Hind', sans-serif;
    color: #e09145;
    font-size: 20px;
    font-weight: bold;
}
`


