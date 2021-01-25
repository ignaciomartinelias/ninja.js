import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { setCurrentPageNumber, setTotalNumberOfPages } from "../../actions/dataTableActions";
import store from "../../store";
import Pagination from "./Pagination";
import Search from "./Search";

const DataTable = ({ rows, rowsPerPage = 40, handleSearch, RowToRender }) => {
  const currentPageNumber = useSelector(state => state.dataTableReducer.currentPageNumber);
  const totalNumberOfPages = useSelector(state => state.dataTableReducer.totalNumberOfPages);

  const [filteredRows, setFilteredRows] = useState(rows);

  useEffect(() => {
    const numberOfPages = rowsPerPage === 0 ? 0 : Math.ceil(filteredRows.length / rowsPerPage);
    numberOfPages !== totalNumberOfPages && store.dispatch(setTotalNumberOfPages(numberOfPages));
  }, [filteredRows, rowsPerPage]);

  useEffect(() => {
    setFilteredRows(rows);
  }, [rows]);

  const search = event => {
    const text = event.target.value;
    let rowsFound = rows;
    if (text) {
      rowsFound = handleSearch(rows, text);
      // rowsFound = rows.filter(row => {
      //   for (const key in row) {
      //     if (row[key].toString().toLowerCase().includes(text.toLowerCase())) {
      //       return row;
      //     }
      //   }
      // });
    }
    setFilteredRows(rowsFound);
    store.dispatch(setCurrentPageNumber(0));
  };

  const rowsInPageNumber = pageNumber => {
    const startIndex = pageNumber * rowsPerPage;
    return [startIndex, startIndex + rowsPerPage];
  };

  const rowsToRender = filteredRows.slice(...rowsInPageNumber(currentPageNumber));

  return (
    <div>
      {handleSearch && <Search onSearch={search} />}
      <table>
        <tbody>
          {rowsToRender.map(row => (
            <RowToRender key={row.id} row={row} />
          ))}
        </tbody>
      </table>
      <Pagination currentPageNumber={currentPageNumber} totalNumberOfPages={totalNumberOfPages}/>
    </div>
  );
};

export default DataTable;
