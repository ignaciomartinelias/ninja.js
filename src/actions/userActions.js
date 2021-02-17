import axios from "axios";

export const fetchUserList = () => {
  return async dispatch => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      const data = await response.data;
      dispatch({ type: "FETCH_USER_LIST_FULFILLED", data });
    } catch (err) {
      dispatch({ type: "FETCH_USER_LIST_REJECTED", data: err });
    }
  };
};
