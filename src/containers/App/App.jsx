import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from '../../routes';
import Topbar from '../../components/Topbar/Topbar';
import Modal from '../../components/Modal/Modal'

import './App.css';

const App = () => (
  <div>
    <BrowserRouter>
      <Topbar />
      <Modal />
      <Routes />
    </BrowserRouter>
  </div>
);

export default App;
