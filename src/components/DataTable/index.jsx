import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import store from '../../store'
import { setCurrentPageNumber, setTotalNumberOfPages } from '../../actions/dataTableActions'

import Pagination from './Pagination'
import Row from './Row'
import Search from './Search'

const DataTable = ({ rowsPerPage }) => {
    const rows = useSelector(state => state.dataTableReducer.rows)
    const currentPageNumber = useSelector(state => state.dataTableReducer.currentPageNumber)
    const totalNumberOfPages = useSelector(state => state.dataTableReducer.totalNumberOfPages)

    const [filteredRows, setFilteredRows] = useState([])
    const [rowsToRender, setRowsToRender] = useState([])

    const search = event => {
        const text = event.target.value
        let rowsFound = rows
        if (text) {
            rowsFound = rows.filter((row) =>
            (row.name1.toLowerCase().includes(text.toLowerCase()) ||
                row.email.toLowerCase().includes(text.toLowerCase()))
            )
        }
        setFilteredRows(rowsFound)
        store.dispatch(setCurrentPageNumber(0))
    }

    const rowsInPageNumber = pageNumber => {
        const startIndex = pageNumber * rowsPerPage
        return [startIndex, startIndex + rowsPerPage]
    }

    useEffect(() => {
        const numberOfPages = rowsPerPage === 0 ? 0 : Math.ceil(filteredRows.length / rowsPerPage)
        numberOfPages !== totalNumberOfPages && store.dispatch(setTotalNumberOfPages(numberOfPages))
        setRowsToRender(filteredRows.slice(...rowsInPageNumber(currentPageNumber)))
    }, [filteredRows, currentPageNumber])

    useEffect(() => {
        setFilteredRows(rows)
    }, [rows])

    return (
        <div>
            <Search onSearch={search} />
            <table>
                <tbody>
                    {rowsToRender.map(row => <Row key={row.per_id} row={row} />)}
                </tbody>
            </table>
            <Pagination />
        </div>
    )
}

DataTable.defaultProps = {
    rowsPerPage: 40
}

export default DataTable;