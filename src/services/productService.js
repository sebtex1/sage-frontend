import axios from 'axios'

const ProductService = {
  getProducts: (setProduitsData) => {
    axios({
      method: 'get',
      baseURL: 'http://localhost:8080/api/v1',
      url: '/products',
      headers: {
        'Access-Control-Allow-Origin': '*',
        company_id: '2508',
      },
      params: {},
    })
      .then((response) => {
        setProduitsData(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  },
}

export default ProductService
