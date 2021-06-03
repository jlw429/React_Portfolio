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
              Full Stack Web Developer looking for a junior or associate
              developer position. I want to help millions of people who visit a
              webpage have the opportunity to get what they need, have a good
              experience, and then go on with their day. There are way too many
              poorly laid out websites these days!
            </h4>
            <h4>
              I've come a long way from where I used to be and its been a
              journey that has taken me years to complete. I was born and raised
              in Daytona Beach, FL where I started my career with Publix
              Supermarkets. Along the way, I earned my Bachelor of Science from
              the University of Central Florida. My major was Health Information
              Management.
            </h4>
            <h4>
              I stayed with Publix where I ran the front end of the store,
              including accounting. I then moved to Nashville, TN for a
              promotion where I met my wife. We then decided to move back to her
              hometown of Detroit, MI. We bought a house up the road where she
              grew up in Madison Heights. Upon moving to Michigan I started
              learning HTML, then CSS, then Javascript. However I went the free
              route and couldn't gain much traction
            </h4>
            <h4>
              In the summer of 2020 I decided to make a change that I have been
              wanting to accomplish since moving to Michigan. I left my role in
              retail to pursue my passion for development. In November 2020, I
              joined a full-stack JavaScript "boot-camp" through Michigan State
              University. From there I have learned everything from basic HTML
              and CSS to JavaScript, jQuery to React. and CSS applications such
              as BootStrap and MaterialUI. For the backend, I have learned Node,
              express, axios as well as databases in MySql and MongoDb.
            </h4>
            <h4>
              My passions are with React as well as Node. I have recently
              completed a 30+ hour project social media application I called
              RambleSpace, modeled after Twitter. It is a fully functioning
              social media site that helped me really understand and learn every
              part of React.
            </h4>
            <h4>I am currently learning Python and then C# by the fall!</h4>
            <h4>Connect with me!</h4>
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
