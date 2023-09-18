import React from 'react'
import { useNavigate } from 'react-router-dom'
import Toolbar from '../components/Toolbar'

const Default = ({ children }) => {
  const [isConnected, setIsConnected] = React.useState('')

  React.useEffect(() => {
    if (isConnected === '') {
      setIsConnected(localStorage.getItem('id_token'))
    }
    if (isConnected === null) {
      navigate('/')
    }
    console.log('isConnected', isConnected)
  }, [isConnected])

  const navigate = useNavigate()
  return (
    <>
      <div>
        <Toolbar />
      </div>
      <main>{children}</main>
    </>
  )
}
export default Default
