import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import {Provider} from 'react-redux'
// import Routers from './AppRouter'
// import store from './store'
import Dashboard from './Theme/Dashboard';
// import Navbar from './components/Navbar'\
// import History from './History/History';

function App() {
  return (
    <div className="App">
      <Dashboard />
      {/* <Provider store={store} >
          <Routers />
      </Provider> */}
    </div>
  );
}

export default App;
