import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { BsCheckCircle } from 'react-icons/bs';

export default function Success () {

    const navigate = useNavigate();

    return (
        <Wrapper>
            <BsCheckCircle className="check" />
            <h1>Your Order is Confirmed</h1>
            <h2>Thank You For Your Order</h2>
            <div>Done</div>
            <p onClick={() => navigate("/home")}>Exit to Home</p>
        </Wrapper>
    )
}

const Wrapper = styled.div`

    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-family: 'Hind';
    font-weight: 400;

    .check {
        font-size: 92px;
        color: #e09145;
        padding: 8px;
    }

    h1, h2 {
        padding: 8px;
        color: #FCD9B8;
    }

    h1 {
        font-size: 30px;
    }

    h2 {
        font-size: 20px;
    }

    div {

        width: 40vw;
        height: 6vh;
        margin: 8px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        
        font-size: 20px;
        line-height: 22px;
        font-weight: 600;
        color: #FCD9B8;

        border-radius: 20px;
        border: none;
        background-color: #e09145;
        cursor: pointer;

        :hover {
            filter: brightness(120%);
        }
        
        :active {
            transform: scale(0.98);
            box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
        }
    }

    p {
        padding: 8px;
        font-size: 18px;
        color: #e09145;
        cursor: pointer;

        :hover {
            text-decoration-line: underline;
        }   
    }

`
