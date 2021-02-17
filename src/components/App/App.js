import React from "react";
import store from "../../store";
import { Provider } from "react-redux";
import UserTable from "../UserTable/UserTable";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <div className='container mt-3'>
        <UserTable />
      </div>
    </Provider>
  );
};

export default App;
