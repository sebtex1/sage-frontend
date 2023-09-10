import React from "react";
import styled from "styled-components";
import PageColumn from "../components/PageColumn";
import MenuDropDown from "../components/MenuDropDown";
import LineChart from "../components/LineChart";
import InputForm from "../components/InputForm";
import TablePaged from "../components/TablePaged";

const Produits = () => {
    const [search, setSearch] = React.useState('')
    const [selection, setSelection] = React.useState('Infos');
    const [filteredData, setFilteredData] = React.useState([])

    React.useEffect(() => {
        setFilteredData(produitsData.filter(item => item.name.includes(search)))
    }, [search])

    const menu = [{ name: 'Infos' },{name: 'Type' },{name: 'Stock' },]
    const produitsData = [
        { id: 1, name: 'Produit 1', type: 'Type 1', stock_tracking: true },
        { id: 2, name: 'Produit 2', type: 'Type 2', stock_tracking: false },
        { id: 3, name: 'Produit 3', type: 'Type 3', stock_tracking: true }
    ]
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
        <>
            <Div>
                <PageColumn>
                    <MenuDropDown menu={menu} callback={setSelection} />
                </PageColumn>
                <PageColumn  flex={2}>
                    <InputForm
                        label="Rechercher"
                        type="text"
                        id="search"
                        name="search"
                        placeholder="Rechercher un produit (Nom)"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                    {filteredData ? <TablePaged data={filteredData} headers={[{name: 'Nom', value: 'name'}, {name: 'Type', value: 'type'}]} itemsPerPage={15}/> : null}
                </PageColumn>
                <PageColumn>
                    <LineChart data={datasetCommande} labels={labels} title='Commandes des 3 dernières semaines' />
                    <LineChart data={datasetRetours} labels={labels} title='Retours des 3 dernières semaines' />
                </PageColumn>
            </Div>
        </>
    );
}
export default Produits;

const Div = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
`;