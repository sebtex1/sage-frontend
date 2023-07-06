import React from 'react';
import InputForm from '../components/InputForm';
import ButtonForm from '../components/ButtonForm';
import styled from 'styled-components';

const Login = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    return (
        <Container>
            <Div>
                <Img src="https://signin.sso.sage.com/brands/default/images/sage-logo.png" alt="Logo sage" />
                <h1>Connexion</h1>
                <form onSubmit={handleSubmit}>
                    <InputForm
                        label="Adresse e-mail"
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <br />
                    <InputForm
                        label="Mot de passe"
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <br />
                    <ButtonForm type="submit" value="Connexion" />
                </form>
                <Span>Mot de passe oublié ?</Span>
                <p>Nouvel utilisateur ? <Span>Créer un compte</Span></p>
            </Div>
        </Container>
    );
}
export default Login;

// Fonction récupérant les données du formulaire
const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log({
        email: data.get('email'),
        password: data.get('password'),
    });
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: rgba(234, 238, 240, 1);
`;

const Div = styled.div`
    text-align: center;
    margin: 0 auto;
    width: 400px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 12px 20px;
    margin: auto;
    background-color: #fff;
    text-align: left;
`;

const Img = styled.img`
    display: block;
    margin: 0 auto;
`;

const Span = styled.span`
    color: rgb(72, 162, 121);
    cursor: pointer;
    text-decoration: underline;
`;