const initialState = {
  confs: [],
  error: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_CONF_LIST_FULFILLED": {
      return {
        ...state,
        confs: action.data,
      };
    }
    case "FETCH_CONF_LIST_REJECTED": {
      return {
        ...state,
        error: action.data,
      };
    }
    default:
      return state;
  }
}
