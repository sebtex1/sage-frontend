import React from 'react'
import axios from 'axios'
// import { redirect } from 'react-router-dom'

const Signout = () => {
  const [accessToken, setAccessToken] = React.useState('')
  const [refreshToken, setRefreshToken] = React.useState('')

  React.useEffect(() => {
    if (accessToken === '') {
      setAccessToken(localStorage.getItem('access_token'))
    } else {
      console.log('accessToken', accessToken)
    }
    if (refreshToken === '') {
      setRefreshToken(localStorage.getItem('refresh_token'))
    } else {
      console.log('refreshToken', refreshToken)
    }

    if (accessToken !== '') {
      console.log('axios')
      axios({
        method: 'post',
        baseURL: 'https://localhost:7001/api/v1',
        url: '/auth/signout',
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        data: {
          client_id: 'WebApplication',
          access_token: accessToken,
          refresh_token: refreshToken,
        },
      }).then(() => {
        localStorage.clear()
        window.location = '/'
      })
    }
  }, [accessToken, refreshToken])
}

export default Signout
