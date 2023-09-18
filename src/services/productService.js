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

  postVariant: (id, variant, variants, setVariants) => {
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

  postBundleElement: (id, bundleElement, listBundle, bundles, setBundles) => {
    axios({
      method: 'post',
      baseURL: 'http://localhost:3030/api/v1',
      url: `bundles/${id}/elements`,
      headers: {
        'Access-Control-Allow-Origin': '*',
        company_id: '2508',
      },
      data: bundleElement,
      params: {},
    })
      .then((response) => {
        console.log('response', response)
        const bundleUsed = listBundle.find((bundle) => bundle.id === id)
        setBundles([
          ...bundles,
          { name: bundleUsed.name, sell_price: bundleUsed.sell_price },
        ])
      })
      .catch((error) => {
        console.log(error)
      })
  },

  getBundleElement: (variantId, bundleId, setBundleElement) => {
    axios({
      method: 'get',
      baseURL: 'http://localhost:3030/api/v1',
      url: `bundle-elements`,
      headers: {
        'Access-Control-Allow-Origin': '*',
        company_id: '2508',
      },
      params: { bundle_id: bundleId, variant_id: variantId },
    })
      .then((response) => {
        console.log('get bundle element', response)
        setBundleElement(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  },

  deleteBundleElement: (id, idVariant, setBundles) => {
    axios({
      method: 'delete',
      baseURL: 'http://localhost:3030/api/v1',
      url: `bundle-elements/${id}`,
      headers: {
        'Access-Control-Allow-Origin': '*',
        company_id: '2508',
      },
      params: {},
    })
      .then((response) => {
        console.log('delete bundle element', response)
        ProductService.getBundlesByVariant(idVariant, setBundles)
      })
      .catch((error) => {
        console.log(error)
      })
  },

  putVariant: (id, variant, redirect) => {
    axios({
      method: 'put',
      baseURL: 'http://localhost:3030/api/v1',
      url: `variants/${id}`,
      headers: {
        'Access-Control-Allow-Origin': '*',
        company_id: '2508',
      },
      data: variant,
      params: {},
    })
      .then((response) => {
        console.log('response', response)
        redirect()
      })
      .catch((error) => {
        console.log(error)
      })
  },

  getVariant: (id, setVariant) => {
    axios({
      method: 'get',
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
        setVariant(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  },

  getBundle: (id, setBundle) => {
    axios({
      method: 'get',
      baseURL: 'http://localhost:3030/api/v1',
      url: `/bundles/${id}`,
      headers: {
        'Access-Control-Allow-Origin': '*',
        company_id: '2508',
      },
      params: {},
    })
      .then((response) => {
        console.log('response', response)
        setBundle(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  },

  putBundle: (id, bundle) => {
    axios({
      method: 'put',
      baseURL: 'http://localhost:3030/api/v1',
      url: `/bundles/${id}`,
      headers: {
        'Access-Control-Allow-Origin': '*',
        company_id: '2508',
      },
      data: bundle,
      params: {},
    })
      .then((response) => {
        console.log('response', response)
      })
      .catch((error) => {
        console.log(error)
      })
  },

  postProduct: (product, products, setProducts) => {
    axios({
      method: 'post',
      baseURL: 'http://localhost:3030/api/v1',
      url: `/products`,
      headers: {
        'Access-Control-Allow-Origin': '*',
        company_id: '2508',
      },
      data: product,
      params: {},
    })
      .then((response) => {
        console.log('response', response)
        setProducts([...products, response.data])
      })
      .catch((error) => {
        console.log(error)
      })
  },

  deleteProduit: (id, produits, setProduits) => {
    axios({
      method: 'delete',
      baseURL: 'http://localhost:3030/api/v1',
      url: `products/${id}`,
      headers: {
        'Access-Control-Allow-Origin': '*',
        company_id: '2508',
      },
      params: {},
    })
      .then((response) => {
        console.log('response', response)
        setProduits(produits.filter((produit) => produit.id !== id))
      })
      .catch((error) => {
        console.log(error)
      })
  },

  putProduit: (id, produit) => {
    axios({
      method: 'put',
      baseURL: 'http://localhost:3030/api/v1',
      url: `products/${id}`,
      headers: {
        'Access-Control-Allow-Origin': '*',
        company_id: '2508',
      },
      data: produit,
      params: {},
    })
      .then((response) => {
        console.log('response', response)
      })
      .catch((error) => {
        console.log(error)
      })
  },
}

export default ProductService
