import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate, useParams } from 'react-router-dom'
import PageColumn from '../components/PageColumn'
import InputForm from '../components/InputForm'
import SwitchForm from '../components/SwitchForm'
import ButtonAction from '../components/ButtonAction'
import LineChart from '../components/LineChart'
import TablePaged from '../components/TablePaged'
import GroupButton from '../components/GroupButton'
import HintText from '../components/HintText'
import ModalAction from '../components/ModalAction'
import ProductService from '../services/productService'

const Produit = () => {
  const [search, setSearch] = React.useState('')
  const [produit, setProduit] = React.useState({
    name: 'T-shirt oversize',
    reference: 'TSHIRTOVER',
    stock_tracking: true,
  })
  const [produitVariant, setProduitVariant] = React.useState('Bleu')
  const [modalVariant, setModalVariant] = React.useState(false)
  const [dataModalVariant, setDataModalVariant] = React.useState({
    name: '',
    reference: '',
    stock: '',
    price: '',
    selling_price: '',
  })
  const [modalBundle, setModalBundle] = React.useState(false)
  const [dataModalBundle, setDataModalBundle] = React.useState({
    bundleToAdd: '',
  })
  const [modalVariantSuppr, setModalVariantSuppr] = React.useState(false)
  const [modalBundleSuppr, setModalBundleSuppr] = React.useState(false)
  const [idProduit] = React.useState(useParams().id)

  React.useEffect(() => {
    console.log('product id', idProduit)
    ProductService.getProduct(idProduit, setProduit, setVariantsData)
  }, [])

  const navigate = useNavigate()
  const labels = ['21/08', '28/08', '04/09']
  const datasetCommande = [
    {
      data: [10, 5, 12],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgb(255, 99, 132)',
    },
  ]
  const datasetRetours = [
    {
      data: [0, 5, 0],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235)',
    },
  ]
  const [variantsData, setVariantsData] = useState([])
  // const variantsData = [
  //   {
  //     id: 1,
  //     name: 'Bleu',
  //     reference: 'TSHIRTOVERB',
  //     stock: 23,
  //     price: 11.99,
  //     selling_price: 18.99,
  //   },
  //   {
  //     id: 2,
  //     name: 'Jaune',
  //     reference: 'TSHIRTOVERJ',
  //     stock: 9,
  //     price: 10.59,
  //     selling_price: 17.99,
  //   },
  // ]
  const bundlesData = [
    { id: 1, name: 'Ensemble jaune', sell_price: 18.99 },
    { id: 2, name: 'Ensemble t-shirt jaune + short noir', sell_price: 18.99 },
  ]
  const listBundle = ['Ensemble jaune', 'Ensemble t-shirt jaune + short noir']
  return (
    <Div>
      <PageColumn>
        <HintText text="Produit créé le 10/07/2023<br/>Denière modification 10/07/2023<br/>commandé 56 fois" />
        <LineChart
          data={datasetCommande}
          labels={labels}
          title="Commandes des 3 dernières semaines"
        />
        <LineChart
          data={datasetRetours}
          labels={labels}
          title="Retours des 3 dernières semaines"
        />
      </PageColumn>
      <PageColumn flex={3}>
        <InputForm
          label="Rechercher"
          type="text"
          id="search"
          name="search"
          placeholder="Rechercher un produit (Nom)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <h1>Infomations générales</h1>
        <Div>
          <PageColumn>
            <InputForm
              label="Nom"
              type="text"
              id="name"
              name="name"
              placeholder="Nom du produit"
              value={produit.name}
              onChange={(e) => setProduit({ ...produit, name: e.target.value })}
            />
            <SwitchForm
              label="Suivi en stock"
              id="stock_tracking"
              name="stock_tracking"
              value={produit.stock_tracking}
              onChange={() =>
                setProduit({
                  ...produit,
                  stock_tracking: !produit.stock_tracking,
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
              placeholder="Référence du produit"
              value={produit.reference}
              onChange={(e) =>
                setProduit({ ...produit, reference: e.target.value })
              }
            />
          </PageColumn>
        </Div>
        <DivSpaceBetween>
          <H1>Variants</H1>
          <ButtonAction
            text="Ajouter variant"
            icon
            onClick={() => setModalVariant(true)}
          />
        </DivSpaceBetween>
        {modalVariant ? (
          <ModalAction
            title="Ajout de variant"
            model={[
              { name: 'Nom', value: 'name' },
              { name: 'Référence', value: 'reference' },
              { name: 'Stock', value: 'stock' },
              { name: 'Prix achat', value: 'purchase_price' },
              { name: 'Prix vente HT', value: 'selling_price' },
            ]}
            data={dataModalVariant}
            button="Valider"
            onChange={(e) =>
              setDataModalVariant({
                ...dataModalVariant,
                [e.target.name]: e.target.value,
              })
            }
            submit={() => {
              setModalVariant(false)
            }}
            cancel={() => {
              setModalVariant(false)
            }}
          />
        ) : null}
        {variantsData ? (
          <>
            <TablePaged
              data={variantsData}
              headers={[
                { name: 'Nom', value: 'name' },
                { name: 'Référence', value: 'reference' },
                { name: 'Stock', value: 'stock' },
                { name: 'Prix achat', value: 'purchase_price' },
                { name: 'Prix vente HT', value: 'selling_price' },
                { name: '', value: 'actions' },
              ]}
              itemsPerPage={5}
              rowClick={(object) => navigate(`/variant/${object.id}`)}
              actions={[{ callback: () => setModalVariantSuppr(true) }]}
            />
            {modalVariantSuppr ? (
              <ModalAction
                title="Suppression de variant"
                text={`Êtes-vous sûr de vouloir supprimer le variant ${produitVariant} ?`}
                button="Supprimer"
                submit={() => {
                  setModalVariantSuppr(false)
                }}
                cancel={() => {
                  setModalVariantSuppr(false)
                }}
              />
            ) : null}
          </>
        ) : null}
        <DivSpaceBetween>
          <H1>Bundles</H1>
          <ButtonAction
            text="Ajouter dans un bundle"
            icon
            onClick={() => setModalBundle(true)}
          />
        </DivSpaceBetween>
        {modalBundle ? (
          <ModalAction
            title="Ajout dans un bundle"
            model={[
              {
                name: 'Bundle',
                value: 'bundleToAdd',
                type: 'select',
                list: listBundle,
              },
            ]}
            data={dataModalBundle}
            button="Valider"
            onChange={(e) =>
              setDataModalBundle({
                ...dataModalBundle,
                [e.target.name]: e.target.value,
              })
            }
            submit={() => {
              setModalBundle(false)
            }}
            cancel={() => {
              setModalBundle(false)
            }}
          />
        ) : null}
        <GroupButton
          buttons={variantsData.map((variant) => ({
            text: variant.name,
            onClick: () => setProduitVariant(variant.name),
          }))}
          defaultButton={produitVariant}
        />
        {bundlesData ? (
          <TablePaged
            data={bundlesData}
            headers={[
              { name: 'Nom', value: 'name' },
              { name: 'Prix vente HT', value: 'sell_price' },
              { name: '', value: 'actions' },
            ]}
            itemsPerPage={5}
            rowClick={(object) => navigate(`/bundle/${object.id}`)}
            actions={[{ callback: () => setModalBundleSuppr(true) }]}
          />
        ) : null}
        {modalBundleSuppr ? (
          <ModalAction
            title="Suppression de bundle"
            text="Êtes-vous sûr de vouloir supprimer le bundle ?"
            button="Supprimer"
            submit={() => {
              setModalBundleSuppr(false)
            }}
            cancel={() => {
              setModalBundleSuppr(false)
            }}
          />
        ) : null}
        <BottomDiv>
          {idProduit === 'new' ? (
            <ButtonAction
              icon
              text="Ajouter le produit"
              onClick={() => {
                console.log('Ajout du produit', document)
              }}
            />
          ) : (
            <ButtonAction
              text="Modifier le produit"
              onClick={() => {
                console.log(`Modifie tel produit: ${idProduit}`, produit)
              }}
            />
          )}
        </BottomDiv>
      </PageColumn>
      <PageColumn />
    </Div>
  )
}
export default Produit

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`

const DivSpaceBetween = styled.div`
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
  margin: 0;
`
