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
                    {/* <LineChart data={datasetDevis} labels={labels} title='Devis sur les 7 derniers jours' /> */}
                    {/* <LineChart data={datasetBonsDeCommande} labels={labels} title='Bons de commande sur les 7 derniers jours' /> */}
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