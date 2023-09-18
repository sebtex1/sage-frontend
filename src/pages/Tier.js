import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import PageColumn from '../components/PageColumn'
import InputForm from '../components/InputForm'
import ButtonAction from '../components/ButtonAction'
import TiersService from '../services/tiersService'

const Tier = () => {
  const [tier, setTier] = React.useState({
    ta_id: '',
    ta_name: '',
    ta_type: '',
    ta_address: '',
    ta_complement: '',
    ta_zip: '',
    ta_city: '',
    ta_country: '',
    ta_siret: '',
    ta_vat: '',
    ta_naf_code: '',
    ta_website: '',
    ta_phone: '',
    ta_email: '',
  })
  const [idTier] = React.useState(useParams().id)

  React.useEffect(() => {
    if (idTier) {
      TiersService.getTier(idTier, setTier)
    }
  }, [])

  return (
    <Div>
      <PageColumn />
      <PageColumn flex={5}>
        <Div>
          <PageColumn>
            <InputForm
              label="Numéro"
              type="text"
              id="name"
              name="name"
              placeholder=""
              value={tier.ta_name}
              onChange={(e) => setTier({ ...tier, ta_name: e.target.value })}
            />
            <InputForm
              label="Adresse"
              type="text"
              id="adress"
              name="adress"
              placeholder=""
              value={tier.ta_address}
              onChange={(e) => setTier({ ...tier, ta_adress: e.target.value })}
            />
            <InputForm
              label="Code postal"
              type="text"
              id="zip"
              name="zip"
              placeholder=""
              value={tier.ta_zip}
              onChange={(e) => setTier({ ...tier, ta_zip: e.target.value })}
            />
            <InputForm
              label="Pays"
              type="text"
              id="pays"
              name="pays"
              placeholder=""
              value={tier.ta_country}
              onChange={(e) => setTier({ ...tier, ta_country: e.target.value })}
            />
            <InputForm
              label="Téléphone"
              type="text"
              id="phone"
              name="phone"
              placeholder=""
              value={tier.ta_phone}
              onChange={(e) => setTier({ ...tier, ta_phone: e.target.value })}
            />
            <InputForm
              label="Code NAF"
              type="text"
              id="code_naf"
              name="code_naf"
              placeholder=""
              value={tier.ta_naf_code}
              onChange={(e) =>
                setTier({ ...tier, ta_naf_code: e.target.value })
              }
            />
            <InputForm
              label="Site web"
              type="text"
              id="site_web"
              name="site_web"
              placeholder=""
              value={tier.ta_website}
              onChange={(e) => setTier({ ...tier, ta_website: e.target.value })}
            />
          </PageColumn>
          <PageColumn>
            <InputForm
              label="Type"
              type="text"
              id="type"
              name="type"
              placeholder=""
              value={tier.ta_type}
              onChange={(e) => setTier({ ...tier, ta_type: e.target.value })}
            />
            <InputForm
              label="Complément"
              type="text"
              id="complement"
              name="complement"
              placeholder=""
              value={tier.ta_complement}
              onChange={(e) =>
                setTier({ ...tier, ta_complement: e.target.value })
              }
            />
            <InputForm
              label="Ville"
              type="text"
              id="ville"
              name="ville"
              placeholder=""
              value={tier.ta_city}
              onChange={(e) => setTier({ ...tier, ta_city: e.target.value })}
            />
            <InputForm
              label="Siret"
              type="text"
              id="siret"
              name="siret"
              placeholder=""
              value={tier.ta_siret}
              onChange={(e) => setTier({ ...tier, ta_siret: e.target.value })}
            />
            <InputForm
              label="Email"
              type="text"
              id="email"
              name="email"
              placeholder=""
              value={tier.ta_email}
              onChange={(e) => setTier({ ...tier, ta_email: e.target.value })}
            />
            <InputForm
              label="Numéro TVA"
              type="text"
              id="numero_tva"
              name="numero_tva"
              placeholder=""
              value={tier.ta_vat}
              onChange={(e) => setTier({ ...tier, ta_vat: e.target.value })}
            />
          </PageColumn>
        </Div>
        <BottomDiv>
          <ButtonAction
            text="Modifier le tiers"
            onClick={() => {
              console.log(`Modifie tel tiers: ${tier.ta_id}`, tier)
              TiersService.putTier(tier.ta_id, tier)
            }}
          />
        </BottomDiv>
      </PageColumn>
      <PageColumn />
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

const BottomDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
