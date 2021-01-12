const initialState = {
  currentPageNumber: 0,
  totalNumberOfPages: 0,
  rows: [],
  error: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_DATA_FULFILLED": {
      return {
        ...state,
        rows: action.data,
      };
    }
    case "FETCH_DATA_REJECTED": {
      return {
        ...state,
        error: action.data,
      };
    }
    case "SET_CURRENT_PAGE_NUMBER": {
      return {
        ...state,
        currentPageNumber: action.data,
      };
    }
    case "SET_TOTAL_NUMBER_OF_PAGES": {
      return {
        ...state,
        totalNumberOfPages: action.data,
      };
    }
    default:
      return state;
  }
}
