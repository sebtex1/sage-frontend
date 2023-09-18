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
  const [variantsData, setVariantsData] = useState([])
  const [produitVariant, setProduitVariant] = React.useState({})
  const [modalVariant, setModalVariant] = React.useState(false)
  const [dataModalVariant, setDataModalVariant] = React.useState({
    name: '',
    reference: '',
    stock_tracking: true,
    purchase_price: 0,
    selling_price: 0,
  })
  const [listBundle, setListBundle] = React.useState([])
  const [bundlesData, setBundlesData] = React.useState([])
  const [produitBundle, setProduitBundle] = React.useState({})
  const [modalBundle, setModalBundle] = React.useState(false)
  const [dataModalBundle, setDataModalBundle] = React.useState({
    bundleToAdd: '',
    quantity: 0,
  })
  const [produitBundleElement, setProduitBundleElement] = React.useState({})
  const [modalVariantSuppr, setModalVariantSuppr] = React.useState(false)
  const [modalBundleSuppr, setModalBundleSuppr] = React.useState(false)
  const [idProduit] = React.useState(useParams().id)

  React.useEffect(() => {
    console.log('product id', idProduit)
    ProductService.getProduct(idProduit, setProduit, setVariantsData)
    ProductService.getBundles(setListBundle)
  }, [])

  React.useEffect(() => {
    if (variantsData?.length > 0) {
      setProduitVariant(variantsData[0])
    }
  }, [variantsData])

  React.useEffect(() => {
    if (variantsData?.length > 0) {
      ProductService.getBundlesByVariant(
        variantsData.filter(
          (variant) => variant.name === produitVariant.name,
        )[0]?.id,
        setBundlesData,
      )
    }
  }, [produitVariant])

  React.useEffect(() => {
    if (listBundle?.length > 0) {
      setDataModalBundle({
        ...dataModalBundle,
        bundleToAdd: listBundle[0].name,
      })
    }
  }, [listBundle])

  React.useEffect(() => {
    if (produitBundle.id && produitVariant.id) {
      console.log('produitBundle', produitBundle)
      console.log('produitVariant', produitVariant)
      ProductService.getBundleElement(
        produitVariant.id,
        produitBundle.id,
        setProduitBundleElement,
      )
    }
  }, [produitBundle])

  React.useEffect(() => {
    console.log('produitBundleElement', produitBundleElement)
  }, [produitBundleElement])

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
              { name: 'Prix achat', value: 'purchase_price', type: 'number' },
              { name: 'Prix vente HT', value: 'selling_price', type: 'number' },
            ]}
            data={dataModalVariant}
            button="Valider"
            onChange={(e) =>
              setDataModalVariant({
                ...dataModalVariant,
                [e.target.name]:
                  e.target.name === 'purchase_price' ||
                  e.target.name === 'selling_price'
                    ? parseFloat(e.target.value)
                    : e.target.value,
              })
            }
            submit={async () => {
              ProductService.postVariant(
                idProduit,
                dataModalVariant,
                variantsData,
                setVariantsData,
              )
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
                { name: 'Stock', value: 'stock_tracking' },
                { name: 'Prix achat', value: 'purchase_price' },
                { name: 'Prix vente HT', value: 'selling_price' },
                { name: '', value: 'actions' },
              ]}
              itemsPerPage={5}
              rowClick={(object) => navigate(`/variant/${object.id}`)}
              actions={[
                {
                  callback: (object) => {
                    setProduitVariant(object)
                    setModalVariantSuppr(true)
                  },
                },
              ]}
            />
            {modalVariantSuppr ? (
              <ModalAction
                title="Suppression de variant"
                text={`Êtes-vous sûr de vouloir supprimer le variant ${produitVariant.name} référencé ${produitVariant.reference} ?`}
                button="Supprimer"
                submit={() => {
                  ProductService.deleteVariant(
                    produitVariant.id,
                    variantsData,
                    setVariantsData,
                  )
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
                list: listBundle?.map((bundle) => bundle.name),
              },
              { name: 'Quantité', value: 'quantity', type: 'number' },
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
              ProductService.postBundleElement(
                listBundle.filter(
                  (bundle) => bundle.name === dataModalBundle.bundleToAdd,
                )[0]?.id,
                {
                  bundle_id: listBundle.filter(
                    (bundle) => bundle.name === dataModalBundle.bundleToAdd,
                  )[0]?.id,
                  variant_id: variantsData.filter(
                    (variant) => variant.name === produitVariant.name,
                  )[0]?.id,
                  quantity: parseFloat(dataModalBundle.quantity),
                },
                listBundle,
                bundlesData,
                setBundlesData,
              )
              console.log('bundlesData', bundlesData)
              setModalBundle(false)
            }}
            cancel={() => {
              setModalBundle(false)
            }}
          />
        ) : null}
        {variantsData ? (
          <GroupButton
            buttons={variantsData.map((variant) => ({
              text: variant.name,
              onClick: () => setProduitVariant(variant),
            }))}
            defaultButton={produitVariant.name}
          />
        ) : null}
        {bundlesData ? (
          <TablePaged
            data={bundlesData}
            headers={[
              { name: 'Nom', value: 'name' },
              { name: 'Prix vente HT', value: 'price' },
              { name: '', value: 'actions' },
            ]}
            itemsPerPage={5}
            rowClick={(object) => navigate(`/bundle/${object.id}`)}
            actions={[
              {
                callback: (object) => {
                  setProduitBundle(object)
                  setModalBundleSuppr(true)
                },
              },
            ]}
          />
        ) : null}
        {modalBundleSuppr ? (
          <ModalAction
            title="Suppression de bundle"
            text={`Êtes-vous sûr de vouloir supprimer le produit ${produitVariant.name} du bundle ${produitBundle.name} ? ${produitBundleElement?.id}`}
            button="Supprimer"
            submit={() => {
              console.log('suppression du bundle', produitBundle)
              ProductService.deleteBundleElement(
                produitBundleElement.id,
                produitVariant.id,
                setBundlesData,
              )
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
