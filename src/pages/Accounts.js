import React from 'react'
import InputForm from '../components/InputForm'
import ButtonForm from '../components/ButtonForm'
import UserService from '../services/UserService'

const Accounts = ({ userMe, setUserMe }) => {
  const [lastname, setLastname] = React.useState(userMe?.lastName)
  const [firstname, setFirstname] = React.useState(userMe?.firstName)
  const [phone, setPhone] = React.useState(userMe?.phoneNumber)

  React.useEffect(() => {}, [userMe])

  const SaveUser = (event) => {
    event.preventDefault()
    const me = {
      id: userMe?.id,
      companyId: userMe?.companyId,
      email: userMe?.email,
      lastName: lastname,
      firstName: firstname,
      phoneNumber: phone,
      role: userMe?.role,
    }
    UserService.UpdateUser(me)
      .then((result) => {
        console.log('result-UpdateUser', result)
        if (result.status === 204) {
          setUserMe(me)
          alert('succes')
        }
      })
      .catch((error) => {
        console.log('error-UpdateUser', error)
        alert(error.response.data)
      })
  }

  return (
    <div>
      <h1>Mon compte</h1>
      <form onSubmit={SaveUser}>
        <InputForm
          label="Nom"
          type="text"
          id="lastname"
          name="lastname"
          value={lastname}
          onChange={(x) => setLastname(x.target.value)}
        />
        <InputForm
          label="Prénom"
          type="text"
          id="firstname"
          name="firstname"
          value={firstname}
          onChange={(x) => setFirstname(x.target.value)}
        />
        <InputForm
          label="Téléphone"
          type="text"
          id="phone"
          name="phone"
          value={phone}
          onChange={(x) => setPhone(x.target.value)}
        />
        <ButtonForm type="submit" value="Enregistrer" />
      </form>
    </div>
  )
}

export default Accounts
