import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import BarChartIcon from '@material-ui/icons/BarChart';
import ThreeSixtyIcon from '@material-ui/icons/ThreeSixty';
import {Link} from 'react-router-dom';
import "../Theme/Listfile.css";


export const mainListItems = (
  <div>
    <Link className="sidebarLink" to="/">
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Products" />
      </ListItem>
    </Link>
    <Link className="sidebarLink" to="/cart">
      <ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Cart" />
      </ListItem>
    </Link>
    <Link className="sidebarLink" to="/order">
      <ListItem button>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Order" />
      </ListItem>
    </Link>    
  </div>
);

export const secondaryListItems = (
  <div>    
  <Link className="sidebarLink" to="/signup">
    <ListItem button>
      <ListItemIcon>
        <ThreeSixtyIcon />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItem>     
  </Link>       
  </div>
);
