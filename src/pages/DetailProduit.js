import React from "react";
import styled from "styled-components";
import PageColumn from "../components/PageColumn";
import InputForm from "../components/InputForm";
import SelectForm from "../components/SelectForm";
import SwitchForm from "../components/SwitchForm";
import MenuDropDown from "../components/MenuDropDown";
import LineChart from "../components/LineChart";

const DetailProduit = () => {
    const [search, setSearch] = React.useState('')
    const [selection, setSelection] = React.useState('Infos')
    // const [filteredData, setFilteredData] = React.useState([])
    const [produitName, setProduitName] = React.useState('Produit 1')
    const [produitType, setProduitType] = React.useState('Type 1')
    const [produitTracker, setProduitTracker] = React.useState(true)

    // React.useEffect(() => {
    //     setFilteredData(produitsData.filter(item => item.name.includes(search)))
    // }, [search])

    React.useEffect(() => {
        console.log({produitName: produitName, produitType: produitType, produitTracker: produitTracker})
    }, [produitTracker])

    // const produitData = { id: 1, name: 'Produit 1', type: 'Type 1', stock_tracking: true }
    const menu = [{ name: 'Infos' }, {name: 'Type' }, {name: 'Stock' },]
    const labels = ['21/08/23 - 27/08/23', '28/08/23 - 03/09/23', '04/09/23 - 10/09/23']
    const datasetCommande = [{
        data: [
            10,
            5,
            12,
        ],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgb(255, 99, 132)',
    }]
    const datasetRetours = [{
        data: [
            0,
            5,
            0,
        ],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235)',
    }]
    return (
        <Div>
            <PageColumn>
                <MenuDropDown menu={menu} callback={setSelection} />
            </PageColumn>
            <PageColumn flex={2}>
                <InputForm
                    label="Rechercher"
                    type="text"
                    id="search"
                    name="search"
                    placeholder="Rechercher un produit (Nom)"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
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
                            value={produitName}
                            onChange={e => setProduitName(e.target.value)}
                        />
                        <SwitchForm
                            label="Suivi de stock"
                            id="stock_tracking"
                            name="stock_tracking"
                            value={produitTracker}
                            onChange={() => setProduitTracker(!produitTracker)}
                        />
                    </PageColumn>
                    <PageColumn>
                        <SelectForm
                            label="Type"
                            id="type"
                            name="type"
                            list={['Type 1', 'Type 2', 'Type 3']}
                            value={produitType}
                            onChange={e => setProduitType(e.targer.value)} 
                        />
                    </PageColumn>
                </Div>
            </PageColumn>
            <PageColumn>
                <LineChart data={datasetCommande} labels={labels} title='Commandes des 3 dernières semaines' />
                <LineChart data={datasetRetours} labels={labels} title='Retours des 3 dernières semaines' />
            </PageColumn>
    </Div>
    );
}
export default DetailProduit;

const Div = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
`;