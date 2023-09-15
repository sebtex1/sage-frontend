import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import InputForm from '../components/InputForm'
import PageColumn from '../components/PageColumn'
import ButtonAction from '../components/ButtonAction'

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
    <>
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
        </PageColumn>
        <PageColumn>
          <InputForm
            label="Date"
            type="text"
            id="date"
            name="date"
            placeholder="01/01/2020"
            value={document.date}
            onChange={(e) => setDocument({ ...document, date: e.target.value })}
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
        </PageColumn>
        <PageColumn>
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
            onChange={(e) => setDocument({ ...document, taxe: e.target.value })}
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
        {idDocument === 'new' ? (
          <ButtonAction
            text="Ajouter un produit"
            onClick={() => {
              console.log('Ajout de produit', document)
            }}
          />
        ) : (
          <ButtonAction
            text="Modifier le produit"
            onClick={() => {
              console.log(`Modifie tel produit: ${document.id}`, document)
            }}
          />
        )}
      </Div>
    </>
  )
}
export default Document

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`
