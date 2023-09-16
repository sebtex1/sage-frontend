import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import PageColumn from '../components/PageColumn'
import InputForm from '../components/InputForm'
import ButtonAction from '../components/ButtonAction'

const Variant = () => {
  const [variant, setVariant] = React.useState({
    name: '',
    ref: '',
    stock: '',
    price: '',
    price_ht: '',
  })
  const [idVariant] = React.useState(useParams().id)

  React.useEffect(() => {
    if (idVariant === 'new') {
      return
    }
    setVariant(
      variantsData.filter((item) => item.id === parseInt(idVariant, 10))[0],
    )
  }, [])

  const variantsData = [
    {
      id: 1,
      name: 'Bleu',
      ref: 'TSHIRTOVERB',
      stock: 23,
      price: 11.99,
      price_ht: 18.99,
    },
    {
      id: 2,
      name: 'Jaune',
      ref: 'TSHIRTOVERJ',
      stock: 9,
      price: 10.59,
      price_ht: 17.99,
    },
  ]
  return (
    <Div>
      <PageColumn />
      <PageColumn flex={5}>
        <h1>Variant:</h1>
        <Div>
          <PageColumn>
            <InputForm
              label="Nom"
              type="text"
              id="nom"
              name="nom"
              placeholder=""
              value={variant.name}
              onChange={(e) => setVariant({ ...variant, name: e.target.value })}
            />
            <InputForm
              label="Prix"
              type="text"
              id="prix"
              name="prix"
              placeholder=""
              value={variant.price}
              onChange={(e) =>
                setVariant({ ...variant, price: e.target.value })
              }
            />
            <InputForm
              label="Stock"
              type="text"
              id="stock"
              name="stock"
              placeholder=""
              value={variant.stock}
              onChange={(e) =>
                setVariant({ ...variant, stock: e.target.value })
              }
            />
          </PageColumn>
          <PageColumn>
            <InputForm
              label="Référence"
              type="text"
              id="reference"
              name="reference"
              placeholder=""
              value={variant.ref}
              onChange={(e) => setVariant({ ...variant, ref: e.target.value })}
            />
            <InputForm
              label="Prix HT"
              type="text"
              id="prix_ht"
              name="prix_ht"
              placeholder=""
              value={variant.price_ht}
              onChange={(e) =>
                setVariant({ ...variant, price_ht: e.target.value })
              }
            />
          </PageColumn>
        </Div>
        <BottomDiv>
          {idVariant === 'new' ? (
            <ButtonAction
              icon
              text="Ajouter le variant"
              onClick={() => {
                console.log('Ajout du variant', variant)
              }}
            />
          ) : (
            <ButtonAction
              text="Modifier le variant"
              onClick={() => {
                console.log(`Modifie tel variant: ${variant.id}`, variant)
              }}
            />
          )}
        </BottomDiv>
      </PageColumn>
      <PageColumn />
    </Div>
  )
}
export default Variant

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
