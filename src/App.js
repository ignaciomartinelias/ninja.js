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
          <DataTable locale='da' rowsPerPage={5} rows={this.props.rows} />
        </div>
      </Provider>
    );
  }
}

export default App;
