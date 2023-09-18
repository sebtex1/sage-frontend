import axios from 'axios'

const ProductService = {
  getProducts: (setProduitsData) => {
    axios({
      method: 'get',
      baseURL: 'http://localhost:3030/api/v1',
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

  getProduct: (id, setProduit, setVariants) => {
    axios({
      method: 'get',
      baseURL: 'http://localhost:3030/api/v1',
      url: `/products/${id}`,
      headers: {
        'Access-Control-Allow-Origin': '*',
        company_id: '2508',
      },
      params: {},
    })
      .then((response) => {
        console.log('response', response)
        setProduit(response.data)
        setVariants(response.data.variants)
      })
      .catch((error) => {
        console.log(error)
      })
  },

  getBundles: (setBundles) => {
    axios({
      method: 'get',
      baseURL: 'http://localhost:3030/api/v1',
      url: `/bundles`,
      headers: {
        'Access-Control-Allow-Origin': '*',
        company_id: '2508',
      },
      params: {},
    })
      .then((response) => {
        console.log('response', response)
        setBundles(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  },

  getBundlesByVariant: (id, setBundles) => {
    axios({
      method: 'get',
      baseURL: 'http://localhost:3030/api/v1',
      url: `/variants/${id}/bundles`,
      headers: {
        'Access-Control-Allow-Origin': '*',
        company_id: '2508',
      },
      params: {},
    })
      .then((response) => {
        console.log('response', response)
        setBundles(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  },

  postVariants: (id, variant, variants, setVariants) => {
    axios({
      method: 'post',
      baseURL: 'http://localhost:3030/api/v1',
      url: `products/${id}/variants`,
      headers: {
        'Access-Control-Allow-Origin': '*',
        company_id: '2508',
      },
      data: variant,
      params: {},
    })
      .then((response) => {
        console.log('response', response)
        setVariants([...variants, response.data])
      })
      .catch((error) => {
        console.log(error)
      })
  },

  deleteVariant: (id, variants, setVariants) => {
    axios({
      method: 'delete',
      baseURL: 'http://localhost:3030/api/v1',
      url: `variants/${id}`,
      headers: {
        'Access-Control-Allow-Origin': '*',
        company_id: '2508',
      },
      params: {},
    })
      .then((response) => {
        console.log('response', response)
        setVariants(variants.filter((variant) => variant.id !== id))
      })
      .catch((error) => {
        console.log(error)
      })
  },
}

export default ProductService
