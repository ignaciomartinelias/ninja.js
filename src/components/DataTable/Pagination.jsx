import React from "react";
import Page from "./Page";

const Pagination = ({numberOfPages, currentPageNumber}) => {
  const pages = [...Array(numberOfPages)].map((i, pageNumber) => {
    return <Page key={pageNumber} pageNumber={pageNumber} />;
  });
  const prev = <Page pageNumber={currentPageNumber - 1} text={"<"} />;
  const next = <Page pageNumber={currentPageNumber + 1} text={">"} />;

  return (
    numberOfPages > 1 && (
      <ul className='pagination'>
        {currentPageNumber - 1 >= 0 && prev}
        {pages}
        {currentPageNumber + 1 < numberOfPages && next}
      </ul>
    )
  );
};

export default Pagination;
