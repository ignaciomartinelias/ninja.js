import React, { useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import DataTable from "./components/DataTable";
import { fetchData } from './actions/dataTableActions'
import "./App.css";

const App = () => {
  useEffect(() => {
    store.dispatch(fetchData());
  }, []);

  return (
    <Provider store={store}>
      <div className='container mt-3'>
        <DataTable locale='da' rowsPerPage={3} />
      </div>
    </Provider>
  );
};

export default App;
