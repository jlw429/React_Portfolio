import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
}));

export default function BottomAppBar() {
  const classes = useStyles();

  return (
    <Fragment>
      <AppBar position='fixed' color='primary' className={classes.appBar}>
        <Toolbar>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='mailto:jasonlwest@gmail.com'
          >
            <EmailIcon />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/jlw429'
          >
            <GitHubIcon />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.linkedin.com/in/jasonlwest/'
          >
            <LinkedInIcon />
          </a>
          <Typography
            variant='body2'
            color='inherit'
            className='name'
            align='right'
          >
            Jason L. West 2021
          </Typography>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
}
