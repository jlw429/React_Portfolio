import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

export default function Navbar() {
  return (
    <AppBar className='app-bar' position='sticky'>
      <Toolbar className='tool_bar'>
        <h2 className='nav-jason'>Jason L. West</h2>
        <div className='tool_link'></div>
      </Toolbar>
    </AppBar>
  );
}
