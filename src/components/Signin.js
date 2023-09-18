import React from 'react'
import axios from 'axios'
import { useSearchParams } from 'react-router-dom'

const Signin = () => {
    const [searchParams] = useSearchParams()
    const [code, setCode] = React.useState(null)
  // axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

    React.useEffect(() => {
        if (searchParams) {
        setCode(searchParams.get('code'))
        }
    }, [])

    React.useEffect(() => {
        if (code !== null) {
        axios({
            method: 'get',
            baseURL: 'https://localhost:7000/api/v1',
            url: '/auth/token',
            headers: {
            'Access-Control-Allow-Origin': '*',
            },
            params: {
            client_id: 'WebApplication',
            code,
            },
        })
            .then((result) => {
            if (result.status === 200) {
                localStorage.setItem('id_token', result.data.id_token)
                localStorage.setItem('access_token', result.data.access_token)
                localStorage.setItem('refresh_token', result.data.refresh_token)
                window.location = '/'
            }
            })
            .catch((error) => {
            console.error('error', error)
            })
        }
    }, [code])
}

export default Signin
