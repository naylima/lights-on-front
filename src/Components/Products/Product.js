import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { BsArrowLeft, BsPlusCircle } from 'react-icons/bs';
import Footer from "../Footer/Footer";

export default function Product () {

    const navigate = useNavigate();
    const { url, title, price, description } =  useLocation().state;
    
    return (
        <Main>
            <ProductContainer url={url}>
                <BsArrowLeft className="icon" onClick={()=> navigate("/home")}/>
                <BsPlusCircle className="plus"/>
            </ProductContainer>

            <Description>
                <div>
                    <h2>{title}</h2>
                    <span>{price}</span>
                </div>
                <span>{description}</span>
            </Description>

            <Footer/>

        </Main>
    )
}

const Main = styled.div`
    width: 100%;
    min-height: 100vh;
    font-family: 'hind';
    background-color: #fcd9b8;
`

const ProductContainer = styled.div`

    width: 100%;
    height: 400px;
    background-color: #fcd9b8;
    border-bottom-right-radius: 40%;
    box-sizing: border-box;
    background-image: url(${(props) => props.url});
    background-position: center;
    background-size: cover;
    position: relative;

    .icon, .plus {
        font-size: 30px;
        cursor: pointer;
        color: #fcd9b8;
    }

    .icon {
        position: absolute;
        top: 20px;
        left: 15px;
    }

    .plus {
        position: absolute;
        top: 20px;
        right: 15px;
    }
    
`
const Description = styled.div`

    width: 100%;
    height: auto;
    padding: 20px;
    padding-bottom: 80px;
    color: #292c35;
    
    >div {
        padding: 20px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 26px;
        font-weight: 500;

        span {
            font-size: 30px;
            font-weight: 400;
        }
    }

    >span {
        font-size: 20px;
        letter-spacing: .5px;
        line-height: 22px;
    }
`