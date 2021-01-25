import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUserList } from "../../actions/userActions";
import store from "../../store";
import DataTable from "../DataTable/DataTable.jsx";
import Row from "./Row";

const UserTable = () => {
  const users = useSelector(state => state.userReducer.users);

  const handleSearch = (users, text) => {
    return users.filter(
      user =>
        user.name1.toLowerCase().includes(text.toLowerCase()) || user.email.toLowerCase().includes(text.toLowerCase())
    );
  };

  useEffect(() => {
    store.dispatch(fetchUserList());
  }, []);

  return <DataTable rows={users} rowsPerPage={5} handleSearch={handleSearch} RowToRender={Row} />;
};

export default UserTable;
