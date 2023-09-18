import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import PageColumn from '../components/PageColumn'
import InputForm from '../components/InputForm'
import ButtonAction from '../components/ButtonAction'
import ProductService from '../services/productService'

const Bundle = () => {
  const [bundle, setBundle] = React.useState({
    name: '',
    price: '',
  })
  const [idBundle] = React.useState(useParams().id)

  React.useEffect(() => {
    if (idBundle) {
      ProductService.getBundle(idBundle, setBundle)
    }
  }, [])

  // const bundlesData = [
  //   { id: 1, name: 'Ensemble jaune', sell_price: 18.99 },
  //   { id: 2, name: 'Ensemble t-shirt jaune + short noir', sell_price: 18.99 },
  // ]
  return (
    <Div>
      <PageColumn />
      <PageColumn flex={3}>
        <h1>Bundle:</h1>
        <InputForm
          label="Nom"
          type="text"
          id="name"
          name="name"
          placeholder=""
          value={bundle.name}
          onChange={(e) => setBundle({ ...bundle, name: e.target.value })}
        />
        <InputForm
          label="Prix de vente"
          type="text"
          id="price"
          name="price"
          placeholder=""
          value={bundle.price}
          onChange={(e) =>
            setBundle({ ...bundle, price: parseFloat(e.target.value) })
          }
        />
        <BottomDiv>
          <ButtonAction
            text="Modifier le bundle"
            onClick={() => {
              ProductService.putBundle(idBundle, bundle)
            }}
          />
        </BottomDiv>
      </PageColumn>
      <PageColumn />
    </Div>
  )
}
export default Bundle

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`

const BottomDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
