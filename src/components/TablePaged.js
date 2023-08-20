import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

const TablePaged = ({ data, itemsPerPage}) => {
    const [currentPage, setCurrentPage] = useState(0);

    const handlePageChange = ({ selected }) => {
      setCurrentPage(selected);
    };
  
    const offset = currentPage * itemsPerPage;
    const currentPageData = data.slice(offset, offset + itemsPerPage);
    return (
        <>
            <TableContainer>
                <Table>
                    <thead>
                        <TableRow>
                            <TableHeaderCell>Référence</TableHeaderCell>
                            <TableHeaderCell>Date</TableHeaderCell>
                            <TableHeaderCell>Client</TableHeaderCell>
                            <TableHeaderCell>Dépôt</TableHeaderCell>
                            <TableHeaderCell>Total HT</TableHeaderCell>
                        </TableRow>
                    </thead>
                    <tbody>
                        {currentPageData.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell>{row.ref}</TableCell>
                                <TableCell>{row.date}</TableCell>
                                <TableCell>{row.client}</TableCell>
                                <TableCell>{row.depot}</TableCell>
                                <TableCell>{row.totalHT}</TableCell>
                            </TableRow>
                        ))}
                    </tbody>
                </Table>
            </TableContainer>
            <ReactPaginate
                previousLabel={'Précédent'}
                nextLabel={'Suivant'}
                pageCount={Math.ceil(data.length / itemsPerPage)}
                onPageChange={handlePageChange}
                containerClassName={'pagination'}
                activeClassName={'active'}
            />
        </>
    )
}

export default TablePaged;

const TableContainer = styled.div`
  margin-top: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: Arial, sans-serif;
  border: 1px solid #ddd;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableHeaderCell = styled.th`
  background-color: #f2f2f2;
  padding: 8px;
  text-align: left;
`;

const TableCell = styled.td`
  padding: 8px;
`;