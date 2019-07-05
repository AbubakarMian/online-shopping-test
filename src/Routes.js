
import React from 'react';
import Home from './components/Home';
import Signup from './components/Signup';
import Cart from './components/Cart';
import Order from './components/Order';

const Routes = [
    
    {
      path: "/",
      main: () => <Home/>,
      exact: true,
      authRequired:false
    },
    {
      path: "/signup",
      main: () => <Signup />,
      exact: true,
      authRequired:false
    },
    {
      path: "/cart",
      main: () => <Cart />,
      exact: true,
      authRequired:true
    },
    {
      path: "/order",
      main: () => <Order />,
      exact: true,
      authRequired:true
    }
  ]

export default Routes;