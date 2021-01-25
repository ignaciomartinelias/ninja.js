import React from "react";
import { setCurrentPageNumber } from "../../actions/dataTableActions";
import { useSelector } from "react-redux";
import store from "../../store";

const Page = ({ pageNumber, text }) => {
  const currentPageNumber = useSelector(state => state.dataTableReducer.currentPageNumber);

  const isActivePage = currentPageNumber === pageNumber;
  const renderedPageNumber = text ? text : pageNumber + 1;

  const changeToPageNumber = () => {
    store.dispatch(setCurrentPageNumber(pageNumber));
  };

  return (
    <li className='page-item mr-1'>
      <button className={`page-link ${isActivePage ? "button-outline" : ""}`} onClick={changeToPageNumber}>
        {renderedPageNumber}
      </button>
    </li>
  );
};

export default Page;
