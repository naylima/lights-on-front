import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { signUp } from "../../Common/Service/Service";

export default function FormSignUp() {

    const [form, setForm] = useState({})
    const navigate = useNavigate()

    function handleForm({ name, value }){
        setForm({
          ...form,
          [name]: value,
        });
    }

    function sendForm(e) {
        e.preventDefault();
        if (form.password !== form.confirm_password){
            alert("Senhas não correspondem. Verifique seus dados.")
            return
        }
        const body = {
            ...form,
        }
        const promise = signUp(body)
        promise.then(() => {navigate('/sign-in');})
        promise.catch(() => {alert('Dados inválidos, tente novamente');})

    }


    return (
        <Form>
        <form onSubmit={sendForm}>
        <input type="name" name="name" placeholder=' Name' required
            onChange={(e => handleForm({
                name: e.target.name,
                value: e.target.value,
            }))}/>
            <input type="email" name="email" placeholder=' E-mail' required
            onChange={(e => handleForm({
                name: e.target.name,
                value: e.target.value,
            }))}/>
            <input type="password" name="password" placeholder=' Password' required
            onChange={(e => handleForm({
                name: e.target.name,
                value: e.target.value,
            }))}/>
            <input type="password" name="confirm_password" placeholder=' Repeat password ' required
            onChange={(e => handleForm({
                name: e.target.name,
                value: e.target.value,
            }))}/>
            <LButton type="submit">
                <div>Sign Up</div>
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
    width: 60vw;
    height: 7vh;
    background-color: #e09145;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 5px;
    margin-top: 3vh;
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