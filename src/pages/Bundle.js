import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import PageColumn from '../components/PageColumn'
import InputForm from '../components/InputForm'
import ButtonAction from '../components/ButtonAction'

const Bundle = () => {
  const [bundle, setBundle] = React.useState({
    name: '',
    sell_price: '',
  })
  const [idBundle] = React.useState(useParams().id)

  React.useEffect(() => {
    if (idBundle === 'new') {
      return
    }
    setBundle(
      bundlesData.filter((item) => item.id === parseInt(idBundle, 10))[0],
    )
  }, [])

  const bundlesData = [
    { id: 1, name: 'Ensemble jaune', sell_price: 18.99 },
    { id: 2, name: 'Ensemble t-shirt jaune + short noir', sell_price: 18.99 },
  ]
  return (
    <Div>
      <PageColumn />
      <PageColumn flex={5}>
        <h1>Bundle:</h1>
        <InputForm
          label="Nom"
          type="text"
          id="nom"
          name="nom"
          placeholder=""
          value={bundle.name}
          onChange={(e) => setBundle({ ...bundle, name: e.target.value })}
        />
        <InputForm
          label="Prix de vente"
          type="text"
          id="prix"
          name="prix"
          placeholder=""
          value={bundle.sell_price}
          onChange={(e) => setBundle({ ...bundle, sell_price: e.target.value })}
        />
        <BottomDiv>
          {idBundle === 'new' ? (
            <ButtonAction
              icon
              text="Ajouter le bundle"
              onClick={() => {
                console.log('Ajout du bundle', bundle)
              }}
            />
          ) : (
            <ButtonAction
              text="Modifier le bundle"
              onClick={() => {
                console.log(`Modifie tel bundle: ${bundle.id}`, bundle)
              }}
            />
          )}
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
