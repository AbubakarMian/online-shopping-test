import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import store from './store'
import DashboardBody from './Theme/Dashboard';
import History from './History/History';
import {
  Router,
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      
    <Provider store={store} >
      <Router  history={History}>
      <DashboardBody />
    </Router>
    </Provider>
    </div>
  );
}

export default App;
