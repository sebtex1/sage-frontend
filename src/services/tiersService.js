import axios from 'axios'

const tiersService = {
  getTier: (id, setTier) => {
    axios({
      method: 'get',
      baseURL: 'http://localhost:3031/',
      url: `/thirdAccounts/${id}`,
      headers: {
        'Access-Control-Allow-Origin': '*',
        company_id: '2508',
      },
      params: {},
    })
      .then((response) => {
        console.log('response', response)
        setTier(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  },

  putTier: (id, tier) => {
    axios({
      method: 'put',
      baseURL: 'http://localhost:3031/',
      url: `/thirdAccounts/${id}`,
      headers: {
        'Access-Control-Allow-Origin': '*',
        company_id: '2508',
      },
      data: tier,
    })
      .then((response) => {
        console.log('response', response)
      })
      .catch((error) => {
        console.log(error)
      })
  },
}

export default tiersService
