import styled from "styled-components";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../Common/Contexts/UserContext";

export default function FormSignIn(){

    const [form, setForm] = useState({})
    const {setUser} = useContext(UserContext)
    const navigate = useNavigate()

    function handleForm({ name, value }){
        console.log(name, value)
        setForm({
          ...form,
          [name]: value,
        });
    }

    function sendForm(e) {
        e.preventDefault();
        console.log(form);
        const body = {
            ...form,
        }
        const promise = ""//Aqui entra a requisição post de SignIn
        promise.then((res) => {setUser(res.data); navigate('/home');console.log(res.data)})
        promise.catch(() => {alert('Dados inválidos, tente novamente');})

    }

    return (
        <Form>
        <form onSubmit={sendForm}>
            <input type="email" name="email" placeholder=' E-mail' required
            onChange={(e => handleForm({
                name: e.target.name,
                value: e.target.value,
            }))}/>
            <input type="password" name="password" placeholder=' Senha' required
            onChange={(e => handleForm({
                name: e.target.name,
                value: e.target.value,
            }))}/>
            <LButton type="submit">
                <div>Entrar</div>
            </LButton>
        </form>
        </Form>
    )
}

const Form = styled.div`
    margin-top: 20px;
form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
}

input {
    background-color:#fcd9b8;
    color: #292c35;
    width: 90vw;
    margin-top: 13px;
    height: 7vh;
    font-size: 20px;
    border-radius: 3px;

}
input:focus{
    outline: none;
}

`

const LButton = styled.button`
    border: none;
    width: 90vw;
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