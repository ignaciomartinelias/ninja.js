import React from "react";
import { useSelector } from "react-redux";
import Page from "./Page";

const Pagination = () => {
  const totalNumberOfPages = useSelector(state => state.dataTableReducer.totalNumberOfPages);
  const currentPageNumber = useSelector(state => state.dataTableReducer.currentPageNumber);

  const pages = [...Array(totalNumberOfPages)].map((i, pageNumber) => {
    return <Page key={pageNumber} pageNumber={pageNumber} />;
  });
  const prev = <Page pageNumber={currentPageNumber - 1} text={"<"} />;
  const next = <Page pageNumber={currentPageNumber + 1} text={">"} />;

  return (
    totalNumberOfPages > 1 && (
      <ul className='pagination'>
        {currentPageNumber - 1 >= 0 && prev}
        {pages}
        {currentPageNumber + 1 < totalNumberOfPages && next}
      </ul>
    )
  );
};

export default Pagination;
