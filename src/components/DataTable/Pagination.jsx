import React from 'react'
import { useSelector } from 'react-redux';
import Page from './Page'

const Pagination = () => {

  const totalNumberOfPages = useSelector(state => state.dataTableReducer.totalNumberOfPages)

  const pages =
    [...Array(totalNumberOfPages)]
      .map((i, pageNumber) => {
        return <Page
          key={pageNumber}
          pageNumber={pageNumber} />
      })

  return (
    totalNumberOfPages > 1 &&
    <ul className="pagination">
      {pages}
    </ul>
  )
}

export default Pagination
