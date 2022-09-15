import styled from "styled-components";

export const Header = styled.div `

    width: 100%;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;

    background-color: #17181D;
    border-bottom: 1px solid #e09145;

    position: fixed;
    top: 0;
    

    h1 {

        font-family: 'Hind';
        font-size: 26px;
        line-height: 31px;
        font-weight: 500;
        letter-spacing: 3.5px;
        color: #fcd9b8;
    }

`

export const Container = styled.div`

    width: 100%;
    margin-top: 100px;
    padding-bottom: 90px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
`

export const ProductCard = styled.div`

    width: 160px;
    height: auto;
    margin: 10px 15px;
    display: flex;
    flex-direction: column;
    background-color: #292C35;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 5px;

    img {
        width: 100%;
        height: 90%;
        padding: 8px;
        object-fit: cover;
        cursor: pointer;
        transition: all 0.2s;

        :hover {
            filter: brightness(1.2);
        }

        :active {
            transform: scale(0.98);
            box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
        }
    }

    p {
        padding: 4px 8px;
        font-family: 'hind';
        font-size: 16px;
        font-weight: 500;
        color: #E09145;
    }

    >div {
        width: 100%;
        padding: 8px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        color: #fcd9b8;

        span {
            font-size: 18px;
            font-weight: 500;
        }

        .plus {
            font-size: 20px;
            cursor: pointer;

            :active {
                transform: scale(0.98);
                box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
            }
        }
    }

`
export const Footer = styled.div`
    
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #E09145;
    border-start-start-radius: 50px;

    position: fixed;
    bottom:0;

    .icon {
        font-size: 25px;
        color: #292C35;
        cursor: pointer;

        :hover {
            color: #fcd9b8;
        }

        :active {
            transform: scale(0.98);
            box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
        }
}
`

