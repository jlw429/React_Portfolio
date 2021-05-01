import React, { Suspense } from 'react';
import Img from '../images/jason_picture.jpg';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Badges from '../components/Badges';
import Resume from '../assets/resume_west_jason.pdf';
import Tooltip from '@material-ui/core/Tooltip';

//Icons
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import WorkIcon from '@material-ui/icons/Work';

const Portfolio = React.lazy(() => import('../components/Portfolio'));

const Home = () => {
  return (
    <Container maxWidth='lg'>
      <Grid container>
        <Grid
          container
          item
          // spacing={1}
          alignItems='center'
          justifyContent='center'
          className='paper_grid_heading'
        >
          {/* <Grid item sm={4}>
          <img src={Img} className='imgmain' alt='JWest'></img>
        </Grid> */}
          <Grid item xs={10}>
            <h1>I'm Jason. Hello!</h1>
            <h4>
              Full stack web developer specializing in React looking for a
              developer position.
            </h4>
            <h4>
              In the summer of 2020 I decided to make a change that I have been
              wanting to accomplish for years. I wanted to leave my role as a
              retail store manager and pursue my passion for development. I quit
              my job in October 2020 and joined a full-stack JavaScript
              "boot-camp" through Michigan State University. From there I have
              learned everything from basic HTML and CSS to JavaScript, jQuery
              and CSS applications such as BootStrap and MaterialUI. For the
              backend, I have learned Node, express, axios as well as databases
              in MySql and MongoDb.
            </h4>
            <h4>
              My passions are with React as well as Node. I enjoy putting an
              entire project start to finish working with Node, a database
              (MySql, Firebase, and MongoDb) I have recently completed a 30+
              hour project social media application I called RambleSpace,
              modeled after Twitter. It is a fully functioning social media site
              that helped me really understand and learn every part of React.
            </h4>
            <h4>
              While I am very new and very "green" in my new role, I will bring
              a passion and dedication to your organization to have you not
              regretting taking a chance on a career changer such as myself!
            </h4>
            <h4>Please reach out and connect with me!</h4>
            <div>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href={Resume}
                className='icon'
              >
                <Tooltip title='Resume' placement='bottom'>
                  <WorkIcon className='some_icon' />
                </Tooltip>
              </a>
              <span>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='mailto:jasonlwest@gmail.com'
                  className='icon'
                >
                  <Tooltip title='Email me!' placement='bottom'>
                    <EmailIcon className='some_icon' />
                  </Tooltip>
                </a>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://github.com/jlw429'
                  className='icon'
                >
                  <Tooltip title='GitHub' placement='bottom'>
                    <GitHubIcon className='some_icon' />
                  </Tooltip>
                </a>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://www.linkedin.com/in/jasonlwest/'
                  className='icon'
                >
                  <Tooltip title='LinkedIn' placement='bottom'>
                    <LinkedInIcon className='some_icon' />
                  </Tooltip>
                </a>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://twitter.com/jlw0429'
                  className='icon'
                >
                  <Tooltip title='Twitter' placement='bottom'>
                    <TwitterIcon className='some_icon' />
                  </Tooltip>
                </a>
              </span>
            </div>
          </Grid>
          <Grid item xs={2}>
            <Badges />
          </Grid>
        </Grid>
        <Grid item>
          <Suspense fallback={<div>Loading...</div>}>
            <Portfolio />
          </Suspense>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
