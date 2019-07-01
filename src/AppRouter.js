import React from 'react';
import {
    Router,
    Route
} from 'react-router-dom'
import History from './History/History';
import Home from './components/Home'
import Order from './components/Order'
import Cart from './components/Cart'
import Navbar from './components/Navbar'
import Signup from './components/Signup';
// import Dashboard from './Theme/Dashboard';

const Routers =()=>{
return(
    <Router history={History}>
        <Navbar />
        <Route exact path='/' component= {Home} />
        <Route path='/signup' component= {Signup} />
        <Route path='/cart' component= {Cart} />
        <Route path='/order' component= {Order} />
        {/* <Route path='/dashboard' component= {Dashboard} /> */}
    </Router>
    )
}

export default Routers;