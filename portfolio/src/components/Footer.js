import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Tooltip from '@material-ui/core/Tooltip';

export default function BottomAppBar() {
  return (
    <Fragment>
      <AppBar position='sticky' color='primary'>
        <Toolbar className='tool_bar'>
          <div>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='mailto:jasonlwest@gmail.com'
              className='icon'
            >
              <Tooltip title='Email Me!' placement='top'>
                <EmailIcon className='some_icon' />
              </Tooltip>
            </a>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/jlw429'
              className='icon'
            >
              <Tooltip title='Github' placement='top'>
                <GitHubIcon className='some_icon' />
              </Tooltip>
            </a>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.linkedin.com/in/jasonlwest/'
              className='icon'
            >
              <Tooltip title='LinkedIn' placement='top'>
                <LinkedInIcon className='some_icon' />
              </Tooltip>
            </a>
          </div>
          <Typography
            variant='body2'
            color='inherit'
            className='foot-name'
            align='right'
          >
            Jason L. West 2021
          </Typography>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
}
