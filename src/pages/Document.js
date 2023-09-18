import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import InputForm from '../components/InputForm'
import PageColumn from '../components/PageColumn'
import ButtonAction from '../components/ButtonAction'
import TablePaged from '../components/TablePaged'
import HintText from '../components/HintText'

const Document = () => {
  const [document, setDocument] = React.useState({
    tiers: '',
    adresse_liv: '',
    contact: '',
    date: '',
    date_liv: '',
    reference: '',
    taxe: '',
    depot: '',
  })
  const [idDocument] = React.useState(useParams().id)

  React.useEffect(() => {
    if (idDocument === 'new') {
      return
    }
    setDocument(
      Object.keys(documentsData)
        .map(
          (itemDocument) =>
            documentsData[itemDocument].filter(
              (item) => item.id === parseInt(idDocument, 10),
            )[0],
        )
        .filter((item) => item !== undefined)[0],
    )
  }, [])

  const produitsData = [
    {
      id: 1,
      name: 'T-shirt oversize - Bleu',
      ref: 'TSHIRTOVERB',
      stock: 23,
      price: 11.99,
      price_ht: 18.99,
      remise: 0.79,
    },
    {
      id: 2,
      name: 'T-shirt oversize - Jaune',
      ref: 'TSHIRTOVERJ',
      stock: 9,
      price: 10.59,
      price_ht: 17.99,
      remise: 1.58,
    },
  ]
  const documentsData = {
    devis: [
      {
        id: 1,
        tiers: 'BIJOUSARL',
        adresse_liv: '1 rue de la paix',
        contact: 'M. Bijou',
        date: '16/06/2023',
        date_liv: '18/06/2023',
        reference: 'BC202300085',
        taxe: '20%',
        depot: 'Dépôt Nanterre',
      },
      {
        id: 3,
        tiers: 'BIJOUSARL',
        adresse_liv: '1 rue de la paix',
        contact: 'M. Bijou',
        date: '20/06/2023',
        date_liv: '22/06/2023',
        reference: 'BC202300087',
        taxe: '20%',
        depot: 'Dépôt Nanterre',
      },
      {
        id: 4,
        tiers: 'BIJOUSARL',
        adresse_liv: '1 rue de la paix',
        contact: 'M. Bijou',
        date: '22/06/2023',
        date_liv: '24/06/2023',
        reference: 'BC202300090',
        taxe: '20%',
        depot: 'Dépôt Nanterre',
      },
    ],
    bonDeCommande: [
      {
        id: 2,
        tiers: 'BIJOUSARL',
        adresse_liv: '1 rue de la paix',
        contact: 'M. Bijou',
        date: '18/06/2023',
        date_liv: '20/06/2023',
        reference: 'BC202300086',
        taxe: '20%',
        depot: 'Dépôt Nanterre',
      },
      {
        id: 5,
        tiers: 'BIJOUSARL',
        adresse_liv: '1 rue de la paix',
        contact: 'M. Bijou',
        date: '22/06/2023',
        date_liv: '24/06/2023',
        reference: 'BC202300090',
        taxe: '20%',
        depot: 'Dépôt Nanterre',
      },
    ],
  }
  return (
    <Div>
      <PageColumn />
      <PageColumn flex={3}>
        <H1>Infomations générales</H1>
        <Div>
          <PageColumn>
            <InputForm
              label="Tiers"
              type="text"
              id="tiers"
              name="tiers"
              placeholder="BIJOURSAL"
              value={document.tiers}
              onChange={(e) =>
                setDocument({ ...document, tiers: e.target.value })
              }
            />
            <InputForm
              label="Date"
              type="text"
              id="date"
              name="date"
              placeholder="01/01/2020"
              value={document.date}
              onChange={(e) =>
                setDocument({ ...document, date: e.target.value })
              }
            />
            <InputForm
              label="Référence"
              type="text"
              id="reference"
              name="reference"
              placeholder="012345"
              value={document.reference}
              onChange={(e) =>
                setDocument({ ...document, reference: e.target.value })
              }
            />
            <InputForm
              label="Taxe"
              type="text"
              id="taxe"
              name="taxe"
              placeholder="0%"
              value={document.taxe}
              onChange={(e) =>
                setDocument({ ...document, taxe: e.target.value })
              }
            />
          </PageColumn>
          <PageColumn>
            <InputForm
              label="Contact"
              type="text"
              id="contact"
              name="contact"
              placeholder="M.Bijou"
              value={document.contact}
              onChange={(e) =>
                setDocument({ ...document, contact: e.target.value })
              }
            />
            <InputForm
              label="Date de liv"
              type="text"
              id="date_liv"
              name="date_liv"
              placeholder="02/01/2020"
              value={document.date_liv}
              onChange={(e) =>
                setDocument({ ...document, date_liv: e.target.value })
              }
            />
            <InputForm
              label="Adresse de liv"
              type="text"
              id="adresse_liv"
              name="adresse_liv"
              placeholder="1 rue de la paix"
              value={document.adresse_liv}
              onChange={(e) =>
                setDocument({ ...document, adresse_liv: e.target.value })
              }
            />
            <InputForm
              label="Depôt"
              type="text"
              id="depot"
              name="depot"
              placeholder="Dépôt Paris"
              value={document.depot}
              onChange={(e) =>
                setDocument({ ...document, depot: e.target.value })
              }
            />
          </PageColumn>
        </Div>
        <Div>
          <H1>Produits</H1>
          <ButtonAction
            icon
            text="Ajouter un produit"
            onClick={() => {
              console.log('Ajout du document', document)
            }}
          />
        </Div>
        <TablePaged
          data={produitsData}
          headers={[
            { name: 'Référence', value: 'ref' },
            { name: 'Nom', value: 'name' },
            { name: 'Quantité', value: 'stock' },
            { name: 'Prix HT', value: 'price_ht' },
            { name: 'Prix TTC', value: 'price' },
            { name: 'Remise', value: 'remise' },
          ]}
          itemsPerPage={10}
        />
        <HintText
          text="Nb total produits : 2<br/>
          Total HT : 36,98 <br/>
          Total TTC : 44,37 <br/>
          Total remises : 2,37<br/>
          <strong>Total : 42,00</strong>"
        />
        <BottomDiv>
          {idDocument === 'new' ? (
            <ButtonAction
              text="Ajouter le document"
              onClick={() => {
                console.log('Ajout du document', document)
              }}
            />
          ) : (
            <ButtonAction
              text="Modifier le document"
              onClick={() => {
                console.log(`Modifie tel document: ${document.id}`, document)
              }}
            />
          )}
        </BottomDiv>
      </PageColumn>
      <PageColumn />
    </Div>
  )
}
export default Document

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const BottomDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const H1 = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
`
