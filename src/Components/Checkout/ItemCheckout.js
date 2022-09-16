import styled from "styled-components"

export default function ItemCheckout({key, image, title, price}) {
    return(
        <Wrapper>
            <Info>
                <img src={image} alt={title}/>
                <span>1x {title}</span>
            </Info>
            <p>{price}</p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 85vw;
    height: 22vh;
    background-color: #292C35;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2vh;
p{
    font-size: 22px;
    font-weight: bold;
    color: #e09145;
    border: 1px solid #e09145;
    border-radius: 5px;
    padding: 3px 3px 0 3px;
    margin-right: 6vw;
}
`

const Info = styled.div`
    display: flex;
    align-items: center;
    margin-left: 3vw;
img{
    width: 17vw;
    height: 17vh;
    object-fit: cover;
    padding: 1vh;
    border: 1px solid #e09145;
    border-radius: 5px;
}
span{
    color: #fcd9b8;
    font-size: 17px;
    margin-left: 3vw;
    width: 30vw;
}
`