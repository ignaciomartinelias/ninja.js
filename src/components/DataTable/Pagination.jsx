import React from 'react'
import { useSelector } from 'react-redux';
import Page from './Page'

const Pagination = () => {

  const totalNumberOfPages = useSelector(state => state.dataTableReducer.totalNumberOfPages)
  const currentPageNumber = useSelector(state => state.dataTableReducer.currentPageNumber)

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
      {currentPageNumber - 1 >= 0 && <Page pageNumber={currentPageNumber - 1} text={'Prev'}/>}
      {pages}
      {currentPageNumber + 1 < totalNumberOfPages && <Page pageNumber={currentPageNumber + 1} text={'Next'}/>}
    </ul>
  )
}

export default Pagination
