import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import store from '../../store'
import { setCurrentPageNumber, setTotalNumberOfPages } from '../../actions/dataTableActions'

import Pagination from './Pagination'
import Row from './Row'
import Search from './Search'

const DataTable = ({ rowsPerPage, rows }) => {
    const currentPageNumber = useSelector(state => state.dataTableReducer.currentPageNumber)

    const [filteredRows, setFilteredRows] = useState(rows)
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
    }

    const rowsInPageNumber = pageNumber => {
        const startIndex = pageNumber * rowsPerPage
        return [startIndex, startIndex + rowsPerPage]
    }

    const refreshRowsToRender = () => {
        setRowsToRender(filteredRows.slice(...rowsInPageNumber(currentPageNumber)))
    }

    useEffect(() => {
        store.dispatch(setCurrentPageNumber(0))
        const newTotalNumberOfPages = rowsPerPage == 0 ? 0 : Math.ceil(filteredRows.length / rowsPerPage);
        store.dispatch(setTotalNumberOfPages(newTotalNumberOfPages))
        refreshRowsToRender()
    }, [filteredRows])

    useEffect(() => {
        refreshRowsToRender()
    }, [currentPageNumber])

    return (
        <div>
            <Search onSearch={search} />
            <table>
                <tbody>
                    {rowsToRender.map(row => <Row key={row.per_id} row={row} />)}
                </tbody>
            </table>
            <Pagination
                currentPageNumber={currentPageNumber}/>
        </div>
    )
}

DataTable.defaultProps = {
    rowsPerPage: 40
}

export default DataTable;