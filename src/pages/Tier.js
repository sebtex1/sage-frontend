import React from 'react'
import styled from 'styled-components'
import PageColumn from '../components/PageColumn'
import InputForm from '../components/InputForm'

const Tier = () => {
  return (
    <Div>
      <PageColumn>
        <InputForm
          label="Numéro"
          type="text"
          id="numero"
          name="numero"
          placeholder=""
        />
        <InputForm
          label="Adresse"
          type="text"
          id="adresse"
          name="adresse"
          placeholder=""
        />
        <InputForm
          label="Code postal"
          type="text"
          id="code_postal"
          name="code_postal"
          placeholder=""
        />
        <InputForm
          label="Région"
          type="text"
          id="region"
          name="region"
          placeholder=""
        />
        <InputForm
          label="Téléphone"
          type="text"
          id="telephone"
          name="telephone"
          placeholder=""
        />
        <InputForm
          label="Siret"
          type="text"
          id="siret"
          name="siret"
          placeholder=""
        />
        <InputForm
          label="Code NAF"
          type="text"
          id="code_naf"
          name="code_naf"
          placeholder=""
        />
      </PageColumn>
      <PageColumn>
        <InputForm
          label="Type"
          type="text"
          id="type"
          name="type"
          placeholder=""
        />
        <InputForm
          label="Complément"
          type="text"
          id="complement"
          name="complement"
          placeholder=""
        />
        <InputForm
          label="Ville"
          type="text"
          id="ville"
          name="ville"
          placeholder=""
        />
        <InputForm
          label="Pays"
          type="text"
          id="pays"
          name="pays"
          placeholder=""
        />
        <InputForm
          label="Email"
          type="text"
          id="email"
          name="email"
          placeholder=""
        />
        <InputForm
          label="Numéro TVA"
          type="text"
          id="numero_tva"
          name="numero_tva"
          placeholder=""
        />
        <InputForm
          label="Site web"
          type="text"
          id="site_web"
          name="site_web"
          placeholder=""
        />
      </PageColumn>
    </Div>
  )
}
export default Tier

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`
