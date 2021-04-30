import React from 'react';

//Badges
import ReactBadge from '../images/reactjs_badge.png';
import CssBadge from '../images/css_badge.png';
import HtmlBadge from '../images/html_badge.png';
import JsBadge from '../images/js-badge.png';
import NodeBadge from '../images/node_badge.png';
import SqlBadge from '../images/mysql_badge.jpg';
import MongoBadge from '../images/mongo_badge.png';

//MUI
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

function Badges() {
  return (
    <div className='badges_margin'>
      <Typography align='center' variant='h4'>
        Technologies:
      </Typography>
      <Grid
        className='badges_main'
        container
        direction='row'
        justify='center'
        alignItems='center'
      >
        <Grid className='badges' item sm>
          <img src={JsBadge} className='badge-align' alt='js'></img>
          <img src={ReactBadge} className='badge-align' alt='react'></img>
          <img src={NodeBadge} className='badge-align' alt='node'></img>
          <img src={HtmlBadge} className='badge-align' alt='html'></img>
          <img src={CssBadge} className='badge-align' alt='css'></img>
          <img src={SqlBadge} className='badge-align' alt='sql'></img>
          <img src={MongoBadge} className='badge-align' alt='Mongo'></img>
        </Grid>
      </Grid>
    </div>
  );
}

export default Badges;
