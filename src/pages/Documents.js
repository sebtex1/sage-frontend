import React from "react";
import styled from "styled-components";
import InputForm from "../components/InputForm";
import LineChart from "../components/LineChart";
import PageColumn from "../components/PageColumn";
import TablePaged from "../components/TablePaged";

const Documents = () => {
    const [search, setSearch] = React.useState('')

    const documentsData = {
        devis: [
            { ref: 'BC202300085', date: '16/06/2023', client: 'BIJOUSARL', depot: 'Dépôt Nanterre', totalHT: '1239.89' },
            { ref: 'BC202300086', date: '18/06/2023', client: 'BIJOUSARL', depot: 'Dépôt Nanterre', totalHT: '1239.89' },
            { ref: 'BC202300087', date: '20/06/2023', client: 'BIJOUSARL', depot: 'Dépôt Nanterre', totalHT: '1239.89' },
            { ref: 'BC202300088', date: '20/06/2023', client: 'BIJOUSARL', depot: 'Dépôt Nanterre', totalHT: '1239.89' },
            { ref: 'BC202300089', date: '22/06/2023', client: 'BIJOUSARL', depot: 'Dépôt Nanterre', totalHT: '1239.89' },
            { ref: 'BC202300090', date: '22/06/2023', client: 'BIJOUSARL', depot: 'Dépôt Nanterre', totalHT: '1239.89' },
        ],
        bonDeCommande: [
            { ref: 'BC202300085', date: '16/06/2023', client: 'BIJOUSARL', depot: 'Dépôt Nanterre', totalHT: '1239.89' },
            { ref: 'BC202300086', date: '18/06/2023', client: 'BIJOUSARL', depot: 'Dépôt Nanterre', totalHT: '1239.89' },
            { ref: 'BC202300087', date: '20/06/2023', client: 'BIJOUSARL', depot: 'Dépôt Nanterre', totalHT: '1239.89' },
        ]
    };

    const getCountByDate = (data, date) => {
        return data.filter(item => item.date === date).length
    }

    const labels = ['16/06/2023', '17/06/2023', '18/06/2023', '19/06/2023', '20/06/2023', '21/06/2023', '22/06/2023']
    const datasetDevis = [{
        data: [
            getCountByDate(documentsData.devis, labels[0]),
            getCountByDate(documentsData.devis, labels[1]),
            getCountByDate(documentsData.devis, labels[2]),
            getCountByDate(documentsData.devis, labels[3]),
            getCountByDate(documentsData.devis, labels[4]),
            getCountByDate(documentsData.devis, labels[5]),
            getCountByDate(documentsData.devis, labels[6])
        ],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgb(255, 99, 132)',
    }]
    const datasetBonsDeCommande = [{
        data: [
            getCountByDate(documentsData.bonDeCommande, labels[0]),
            getCountByDate(documentsData.bonDeCommande, labels[1]),
            getCountByDate(documentsData.bonDeCommande, labels[2]),
            getCountByDate(documentsData.bonDeCommande, labels[3]),
            getCountByDate(documentsData.bonDeCommande, labels[4]),
            getCountByDate(documentsData.bonDeCommande, labels[5]),
            getCountByDate(documentsData.bonDeCommande, labels[6])
        ],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235)',
    }]

    return (
        <>
            <Div>
                <PageColumn>
                    <h3>Vente</h3>
                    <p>Devis</p>
                    <p>Bon de Commande</p>
                    <p>Bon de Livraison</p>
                    <p>Facture</p>
                    <p>Tous les documents</p>
                    <h3>Achat</h3>
                    <h3>(Stock)</h3>
                </PageColumn>
                <PageColumn flex={2}>
                    <InputForm
                        label="Rechercher"
                        type="text"
                        id="search"
                        name="search"
                        placeholder="Rechercher un document"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                    <TablePaged data={documentsData.devis} itemsPerPage={15}/>
                </PageColumn>
                <PageColumn>
                    <LineChart data={datasetDevis} labels={labels} title='Devis sur les 7 derniers jours' />
                    <LineChart data={datasetBonsDeCommande} labels={labels} title='Bons de commande sur les 7 derniers jours' />
                </PageColumn>
            </Div>
        </>
    )
}
export default Documents;

const Div = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
`;