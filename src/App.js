import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
import DataTable from "./components/DataTable";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='container mt-3'>
          <DataTable locale='da' rowsPerPage={5} />
        </div>
      </Provider>
    );
  }
}

export default App;

// Note: Also considered adding internationalization as well as a bundler config like webpack or parcel