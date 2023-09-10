import React, { useState } from 'react';
import styled from 'styled-components';

const TablePaged = ({ data, headers, itemsPerPage, rowClick }) => {
    const [currentPage, setCurrentPage] = useState(0);

    const handlePageChange = ({ selected }) => {
      setCurrentPage(selected);
    };
  
    const offset = currentPage * itemsPerPage;
    const currentPageData = data.slice(offset, offset + itemsPerPage);
    const pageCount = Math.ceil(data.length / itemsPerPage);

    const renderPageNumbers = () => {
        const pages = [];
        for (let i = 0; i < pageCount; i++) {
            pages.push(
                <PaginationButton
                    key={i}
                    style={{ backgroundColor: currentPage === i ? '#007E45' : '', color:  currentPage === i ? 'white' : '',  fontWeight: currentPage === i ? 'bold': '' }}
                    onClick={() => setCurrentPage(i)}
                >
                    {i + 1}
                </PaginationButton>
            );
        }
        return pages;
    }
    const executeRowClick = () => {
        if (rowClick !== undefined) {
            rowClick()
        }
    }
    return (
        <>
            <TableContainer>
                <Table>
                    <thead>
                        <TableRow>
                            {headers ? headers.map((header, index) => (
                                <TableHeaderCell key={index}>{header.name}</TableHeaderCell>
                            )) : null}
                        </TableRow>
                    </thead>
                    <tbody>
                        {currentPageData.map((row, index) => (
                            <TableRow key={index}>
                                {headers ? headers.map((header, index) => (
                                    <TableCell key={index} onClick={() => {executeRowClick()}}>{row[header.value]}</TableCell>
                                )) : null}
                            </TableRow>
                        ))}
                    </tbody>
                </Table>
            </TableContainer>
            {pageCount > 1 ?
                <PaginationContainer>
                    {
                        currentPage !== 0 ?
                        <PaginationButton onClick={() => setCurrentPage(currentPage - 1)}>Précédant</PaginationButton> :
                        <PaginationButton style={{ opacity: '0', pointerEvents: 'none' }}>Précédant</PaginationButton>
                    }
                    {renderPageNumbers()}
                    {
                        currentPage !== (pageCount - 1) ?
                        <PaginationButton onClick={() => setCurrentPage(currentPage + 1)}>Suivant</PaginationButton> :
                        <PaginationButton style={{ opacity: '0', pointerEvents: 'none' }}>Suivant</PaginationButton>
                    }
                </PaginationContainer> :
            null}
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

const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;

const PaginationButton = styled.button`
    background-color: #f2f2f2;
    border: none;
    color: black;
    padding: 8px 16px;
    text-decoration: none;
    cursor: pointer;
    margin: 0 5px;
    border-radius: 5px;
    &:hover {
        background-color: #ddd;
    }
`;