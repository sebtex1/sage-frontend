import React from "react";
import styled from "styled-components";
import InputForm from "../components/InputForm";
import PageColumn from "../components/PageColumn";
import TablePaged from "../components/TablePaged";

const Documents = () => {
    const [search, setSearch] = React.useState('')

    const documentsData = [
        { ref: 'BC202300087', date: '22/06/2023', client: 'BIJOUSARL', depot: 'Dépôt Nanterre', totalHT: '1239.89' },
        { ref: 'BC202300087', date: '22/06/2023', client: 'BIJOUSARL', depot: 'Dépôt Nanterre', totalHT: '1239.89' },
        { ref: 'BC202300087', date: '22/06/2023', client: 'BIJOUSARL', depot: 'Dépôt Nanterre', totalHT: '1239.89' },
        { ref: 'BC202300087', date: '22/06/2023', client: 'BIJOUSARL', depot: 'Dépôt Nanterre', totalHT: '1239.89' },
        { ref: 'BC202300087', date: '22/06/2023', client: 'BIJOUSARL', depot: 'Dépôt Nanterre', totalHT: '1239.89' },
        { ref: 'BC202300087', date: '22/06/2023', client: 'BIJOUSARL', depot: 'Dépôt Nanterre', totalHT: '1239.89' },
        { ref: 'BC202300087', date: '22/06/2023', client: 'BIJOUSARL', depot: 'Dépôt Nanterre', totalHT: '1239.89' },
        { ref: 'BC202300087', date: '22/06/2023', client: 'BIJOUSARL', depot: 'Dépôt Nanterre', totalHT: '1239.89' },
        { ref: 'BC202300087', date: '22/06/2023', client: 'BIJOUSARL', depot: 'Dépôt Nanterre', totalHT: '1239.89' },
        { ref: 'BC202300087', date: '22/06/2023', client: 'BIJOUSARL', depot: 'Dépôt Nanterre', totalHT: '1239.89' },
        { ref: 'BC202300087', date: '22/06/2023', client: 'BIJOUSARL', depot: 'Dépôt Nanterre', totalHT: '1239.89' },
        { ref: 'BC202300087', date: '22/06/2023', client: 'BIJOUSARL', depot: 'Dépôt Nanterre', totalHT: '1239.89' },
        { ref: 'BC202300087', date: '22/06/2023', client: 'BIJOUSARL', depot: 'Dépôt Nanterre', totalHT: '1239.89' },
        { ref: 'BC202300087', date: '22/06/2023', client: 'BIJOUSARL', depot: 'Dépôt Nanterre', totalHT: '1239.89' },
        { ref: 'BC202300087', date: '22/06/2023', client: 'BIJOUSARL', depot: 'Dépôt Nanterre', totalHT: '1239.89' },
        { ref: 'BC202300087', date: '22/06/2023', client: 'BIJOUSARL', depot: 'Dépôt Nanterre', totalHT: '1239.89' }
      ];
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
                    <TablePaged data={documentsData} itemsPerPage={15}/>
                </PageColumn>
                <PageColumn>
                    <h1>Graph1</h1>
                    <h1>Graph2</h1>
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