import React, { useState } from "react";
import { useSelector } from "react-redux";
import { setCurrentPageNumber } from "../../actions/dataTableActions";
import store from "../../store";
import Pagination from "./Pagination";
import Search from "./Search";

const DataTable = ({ rows, rowsPerPage = 40, handleSearch, RowToRender }) => {
  const currentPageNumber = useSelector(state => state.dataTableReducer.currentPageNumber);
  const [text, setText] = useState('');

  const getFilteredRows = () => {
    let rowsFound = rows;
    if (text) {
      rowsFound = handleSearch(rows, text);
      store.dispatch(setCurrentPageNumber(0));
    }
    return rowsFound;
  };

  const rowsInPageNumber = pageNumber => {
    const startIndex = pageNumber * rowsPerPage;
    return [startIndex, startIndex + rowsPerPage];
  };

  const filteredRows = getFilteredRows();
  const numberOfPages = rowsPerPage === 0 ? 0 : Math.ceil(filteredRows.length / rowsPerPage);
  const rowsToRender = filteredRows.slice(...rowsInPageNumber(currentPageNumber));

  return (
    <div>
      {handleSearch && <Search onSearch={e => setText(e.target.value)} />}
      <table>
        <tbody>
          {rowsToRender.map(row => (
            <RowToRender key={row.id} row={row} />
          ))}
        </tbody>
      </table>
      <Pagination currentPageNumber={currentPageNumber} numberOfPages={numberOfPages} />
    </div>
  );
};

export default DataTable;
