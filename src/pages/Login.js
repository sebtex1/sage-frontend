import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Icon from '@mdi/react'
import { mdiEyeOffOutline, mdiEyeOutline } from '@mdi/js'
import ButtonForm from '../components/ButtonForm'
import InputForm from '../components/InputForm'

const Login = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [showPassword, setShowPassword] = React.useState(false)

  const displayPassword = () => {
    const queryPassword = document.querySelector('#password')

    const type =
      queryPassword.getAttribute('type') === 'password' ? 'text' : 'password'
    queryPassword.setAttribute('type', type)

    setShowPassword(!showPassword)
  }

  return (
    <Container>
      <Div>
        <LinkStyled to="/">
          <Img
            src="https://signin.sso.sage.com/brands/default/images/sage-logo.png"
            alt="Logo sage"
          />
        </LinkStyled>
        <h1>Connexion</h1>
        <form onSubmit={handleSubmit}>
          <InputForm
            label="Adresse e-mail"
            type="email"
            id="email"
            name="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <InputForm
            label="Mot de passe"
            type="password"
            id="password"
            name="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          {password.length > 0 ? (
            showPassword ? (
              <Icon
                style={{ cursor: 'pointer' }}
                path={mdiEyeOutline}
                size={1}
                id="togglePassword"
                onClick={displayPassword}
              />
            ) : (
              <Icon
                style={{ cursor: 'pointer' }}
                path={mdiEyeOffOutline}
                size={1}
                id="togglePassword"
                onClick={displayPassword}
              />
            )
          ) : null}
          <br />
          <ButtonForm type="submit" value="Connexion" />
        </form>
        <Span>Mot de passe oublié ?</Span>
        <p>
          Nouvel utilisateur ? <Span>Créer un compte</Span>
        </p>
      </Div>
    </Container>
  )
}
export default Login

// Fonction récupérant les données du formulaire
const handleSubmit = (event) => {
  event.preventDefault()
  const data = new FormData(event.target)
  console.log({
    email: data.get('email'),
    password: data.get('password'),
  })
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgba(234, 238, 240, 1);
`

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
`

const LinkStyled = styled(Link)`
  margin: auto 10px;
`

const Img = styled.img`
  display: block;
  margin: 0 auto;
`

const Span = styled.span`
  color: rgb(72, 162, 121);
  cursor: pointer;
  text-decoration: underline;
`
