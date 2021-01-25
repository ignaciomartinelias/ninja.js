import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchConfList } from "../../actions/confActions";
import store from "../../store";
import DataTable from "../DataTable/DataTable.jsx";
import Row from "./Row";
import './ConfTable.css';

const ConfTable = () => {
  const confs = useSelector(state => state.confReducer.confs);

  const handleSearch = (confs, text) => {
    return confs.filter(
      conf =>
        conf.title.toLowerCase().includes(text.toLowerCase()) ||
        conf.location.toLowerCase().includes(text.toLowerCase())
    );
  };

  useEffect(() => {
    store.dispatch(fetchConfList());
  }, []);

  return <DataTable rows={confs} rowsPerPage={5} handleSearch={handleSearch} RowToRender={Row} />;
};

export default ConfTable;
