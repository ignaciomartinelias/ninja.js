import axios from "axios";

export const fetchData = () => {
  return async dispatch => {
    try {
      const response = await axios.get("seeds.json");
      const data = await response.data;
      dispatch({ type: "FETCH_DATA_FULFILLED", data });
    } catch (err) {
      dispatch({ type: "FETCH_DATA_REJECTED", data: err });
    }
  };
};

export const setCurrentPageNumber = data => ({
  type: "SET_CURRENT_PAGE_NUMBER",
  data,
});

export const setTotalNumberOfPages = data => ({
  type: "SET_TOTAL_NUMBER_OF_PAGES",
  data,
});
