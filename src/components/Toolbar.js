import React from 'react'
import styled from 'styled-components'
import Icon from '@mdi/react'
import { Link } from 'react-router-dom'
import { mdiMenu, mdiMenuOpen, mdiFilePlusOutline } from '@mdi/js'

import Slider from './Slider'

const Toolbar = () => {
  const [openMenu, setOpenMenu] = React.useState(false)
  const [openAccount, setOpenAccount] = React.useState(false)
  const [isConnected, setIsConnected] = React.useState('')

  React.useEffect(() => {
    if (isConnected === '') {
      setIsConnected(localStorage.getItem('id_token'))
    }
  }, [isConnected])

  React.useEffect(() => {
    if (openMenu) setOpenAccount(false)
  }, [openMenu])
  React.useEffect(() => {
    if (openAccount) setOpenMenu(false)
  }, [openAccount])

  // Fonction activant le menu nav
  const handleMenu = () => {
    setOpenMenu(!openMenu)
  }
  const handleAccount = () => {
    setOpenAccount(!openAccount)
  }

  return (
    <>
      <Div>
        <Side>
          {openMenu ? (
            <Icon
              style={{ cursor: 'pointer' }}
              path={mdiMenuOpen}
              size={2}
              color="black"
              onClick={handleMenu}
            />
          ) : (
            <Icon
              style={{ cursor: 'pointer' }}
              path={mdiMenu}
              size={2}
              color="black"
              onClick={handleMenu}
            />
          )}
          <LinkStyled
            to="/"
            onClick={() => {
              setOpenAccount(false)
            }}
          >
            <Img
              src="https://signin.sso.sage.com/brands/default/images/sage-logo.png"
              alt="Logo sage"
            />
          </LinkStyled>
          <p>Gestion commerciale &gt; Produits</p>
        </Side>
        <Side>
          {isConnected !== null ? (
            <CreateDocument>
              <Icon path={mdiFilePlusOutline} size={1} color="black" />
              <P>Ajouter un document</P>
            </CreateDocument>
          ) : null}
          <ImgAccount
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="Avatar"
            onClick={handleAccount}
          />
        </Side>
      </Div>
      <Slider open={openMenu} handleMenu={handleMenu} />
      <Slider open={openAccount} handleMenu={handleAccount} side="right" />
    </>
  )
}
export default Toolbar

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 3px solid #007e45;
  padding: 10px;
`

const Side = styled.div`
  display: flex;
`

const Img = styled.img`
  display: block;
  width: 50px;
  height: 25px;
`

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: black;
  margin: auto 10px;
  display: block;
  width: 50px;
  height: 25px;
`

const ImgAccount = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
`

const CreateDocument = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 10px 0 10px;
  margin: 0 20px 0 0;
  cursor: pointer;
`

const P = styled.p`
  margin-left: 10px;
`
