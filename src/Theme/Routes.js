
import React from 'react';
import Home from '../components/Home';
import Signup from '../components/Signup';
import Cart from '../components/Cart';
import Order from '../components/Order';

const Routes = [
    
    {
      path: "/",
      main: () => <Home/>,
      exact: true,
      authRequired:false,
      redirectMain: ()=><Signup />,
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
      authRequired:true,
      redirectMain: ()=><Signup />,
    },
    {
      path: "/order",
      main: () => <Order />,
      exact: true,
      authRequired:true,
      redirectMain: ()=><Signup />,
    }
  ]

export default Routes;