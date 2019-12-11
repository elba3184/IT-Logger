import React, { Fragment, useEffect } from 'react';
import SearchBar from './components/layout/SearchBar.js';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn.js';
import AddLogModal from './components/logs/AddLogModal.js';
import EditLogModal from './components/logs/EditLogModal.js';
import AddTechModal from './components/techs/AddTechModal.js';
import TechListModal from './components/techs/TechListModal.js';
import { Provider } from 'react-redux';
import store from './store.js';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
  useEffect(() => {
    //Init Materialize JS
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className='container'>
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
          <Logs />
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
