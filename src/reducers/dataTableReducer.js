const initialState = {
    currentPageNumber: 0
  };
  
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case "SET_CURRENT_PAGE_NUMBER": {
        return {
          ...state,
          currentPageNumber: action.data,
        };
      }
      default:
        return state;
    }
  }
  