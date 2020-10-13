import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './Header.css'
  
export default function ButtonAppBar() {
  return (
    <div>
      <AppBar position="static" className='root'>
        <Toolbar>
          <Typography variant="h6">
            Cricket 2020
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}