import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function FormSignUp() {

    const [form, setForm] = useState({})
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
        if (form.password !== form.confirm_password){
            alert("Senhas não correspondem. Verifique seus dados.")
            return
        }
        const body = {
            ...form,
        }
        const promise = "" // aqui entra requisição post de signup
        promise.then(() => {navigate('/');})
        promise.catch(() => {alert('Dados inválidos, tente novamente');})

    }


    return (
        <Form>
        <form onSubmit={sendForm}>
        <input type="name" name="name" placeholder=' Nome' required
            onChange={(e => handleForm({
                name: e.target.name,
                value: e.target.value,
            }))}/>
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
            <input type="password" name="confirm_password" placeholder=' Confirme a senha' required
            onChange={(e => handleForm({
                name: e.target.name,
                value: e.target.value,
            }))}/>
            <LButton type="submit">
                <div>Cadastrar</div>
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