import axios from "axios";

export const fetchConfList = () => {
  return async dispatch => {
    try {
      const response = await axios.get("conf_seeds.json");
      const data = await response.data;
      dispatch({ type: "FETCH_CONF_LIST_FULFILLED", data });
    } catch (err) {
      dispatch({ type: "FETCH_CONF_LIST_REJECTED", data: err });
    }
  };
};
