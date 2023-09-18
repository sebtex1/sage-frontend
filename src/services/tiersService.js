import axios from 'axios'

const tiersService = {
  getTiers: (setTiersData) => {
    axios({
      method: 'get',
      baseURL: 'http://localhost:3031/',
      url: '/thirdAccounts',
      headers: {
        'Access-Control-Allow-Origin': '*',
        company_id: '2508',
      },
      params: {},
    })
      .then((response) => {
        console.log('response', response)
        setTiersData(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  },

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

  postTiers: (tier, tiersData, setTiersData) => {
    axios({
      method: 'post',
      baseURL: 'http://localhost:3031/',
      url: '/thirdAccounts',
      headers: {
        'Access-Control-Allow-Origin': '*',
        company_id: '2508',
      },
      data: tier,
      params: {},
    })
      .then((response) => {
        console.log('response', response)
        setTiersData([...tiersData, { ...tier, ta_id: response.data.id }])
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

  deleteTier: (id, tiersData, setTiersData) => {
    axios({
      method: 'delete',
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
        setTiersData(tiersData.filter((tier) => tier.ta_id !== id))
      })
      .catch((error) => {
        console.log(error)
      })
  },
}

export default tiersService
