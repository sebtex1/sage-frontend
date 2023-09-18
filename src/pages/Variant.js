import React from 'react'
import styled from 'styled-components'
import { useNavigate, useParams } from 'react-router-dom'
import PageColumn from '../components/PageColumn'
import InputForm from '../components/InputForm'
import SwitchForm from '../components/SwitchForm'
import ButtonAction from '../components/ButtonAction'
import ProductService from '../services/productService'

const Variant = () => {
  const [variant, setVariant] = React.useState({
    name: '',
    reference: '',
    purchase_price: 0,
    selling_price: 0,
  })
  const [idVariant] = React.useState(useParams().id)

  React.useEffect(() => {
    if (idVariant) {
      ProductService.getVariant(idVariant, setVariant)
    }
  }, [])

  const navigate = useNavigate()
  return (
    <Div>
      <PageColumn />
      <PageColumn flex={3}>
        <Card>
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
                onChange={(e) =>
                  setVariant({ ...variant, name: e.target.value })
                }
              />
              <InputForm
                label="Prix"
                type="number"
                id="purchase_price"
                name="purchase_price"
                placeholder=""
                value={variant.purchase_price}
                onChange={(e) =>
                  setVariant({
                    ...variant,
                    purchase_price: parseFloat(e.target.value),
                  })
                }
              />
              <SwitchForm
                label="Suivi du stock"
                id="stock_tracking"
                name="stock_tracking"
                value={variant.stock_tracking}
                onChange={() =>
                  setVariant({
                    ...variant,
                    stock_tracking: !variant.stock_tracking,
                  })
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
                value={variant.reference}
                onChange={(e) =>
                  setVariant({ ...variant, reference: e.target.value })
                }
              />
              <InputForm
                label="Prix HT"
                type="number"
                id="selling_price"
                name="selling_price"
                placeholder=""
                value={variant.selling_price}
                onChange={(e) =>
                  setVariant({
                    ...variant,
                    selling_price: parseFloat(e.target.value),
                  })
                }
              />
            </PageColumn>
          </Div>
          <BottomDiv>
            <ButtonAction
              text="Modifier le variant"
              onClick={() => {
                console.log(`Modifie tel variant: ${variant.id}`, variant)
                ProductService.putVariant(
                  variant.id,
                  variant,
                  navigate(`/produits/${variant.product_id}`),
                )
              }}
            />
          </BottomDiv>
        </Card>
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

const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 5px #ccc;
  background-color: #eee;
`
