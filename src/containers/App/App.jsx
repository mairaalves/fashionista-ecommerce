import React from 'react';
import { BrowserRouter } from 'react-router-dom';
<<<<<<< HEAD

import Routes from '../../routes';
import Topbar from '../../components/Topbar/Topbar';
=======
import Routes from '../../routes';
>>>>>>> master

import './App.css';

const App = () => (
  <div>
    <BrowserRouter>
      <Topbar />
      <Routes />
    </BrowserRouter>
  </div>
);

export default App;
