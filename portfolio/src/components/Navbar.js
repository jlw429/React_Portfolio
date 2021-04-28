import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export default function ButtonAppBar() {
  return (
    <AppBar className='app-bar' position='sticky'>
      <Typography className='navh1'>Jason L. West</Typography>
    </AppBar>
  );
}
