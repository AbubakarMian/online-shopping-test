import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
// import Routers from './AppRouter'
import store from './store'
import DashboardBody from './Theme/Dashboard';
// import Navbar from './components/Navbar'\
import History from './History/History';
import {
  Router,
  Route, 
  Switch
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
