const initialState = {
  users: [],
  error: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_USER_LIST_FULFILLED": {
      return {
        ...state,
        users: action.data,
      };
    }
    case "FETCH_USER_LIST_REJECTED": {
      return {
        ...state,
        error: action.data,
      };
    }
    default:
      return state;
  }
}
