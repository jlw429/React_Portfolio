import React from 'react';

//MUI
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';

//Icons
import GitHubIcon from '@material-ui/icons/GitHub';
import WebIcon from '@material-ui/icons/Web';

//Images
import RambleImg from '../images/portfolio/ramble_space.png';
import Blog from '../images/portfolio/blog.png';
import GradeBook from '../images/portfolio/gradebook.png';
import EmpDir from '../images/portfolio/emp_dir.png';
import ThatsMyJam from '../images/portfolio/music.png';
import Weather from '../images/portfolio/weather.png';

function Portfolio() {
  return (
    <div>
      <Typography align='center' variant='h4'>
        Portfolio:
      </Typography>
      <div className='portfolio-margin-top'>
        <Typography className='margin_fs' align='center' variant='h6'>
          Full Stack Projects:
        </Typography>
      </div>
      <Paper elevation={3} className='margin'>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <img
              src={RambleImg}
              className='portfolio-picture'
              alt='ramble'
            ></img>
          </Grid>
          <Grid item xs={8}>
            <Typography variant='h5' align='center'>
              RambleSpace
            </Typography>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/jlw429/RambleSpace'
              className='portfolio-link'
            >
              <Tooltip title='Repository' placement='left'>
                <GitHubIcon className='portfolio_icon' />
              </Tooltip>
            </a>
            <span>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.jasonlwest.com'
                className='portfolio-link'
              >
                <Tooltip title='Deployed Website' placement='right'>
                  <WebIcon className='portfolio_icon' />
                </Tooltip>
              </a>
            </span>
            <Typography variant='body1'>
              Fully functioning front and back end (including authentication)
              social media website resembling Twitter. The app has the ability
              to post a "ramble" (like posting a tweet), like and unlike
              rambles, change user details, update user pictures. Technologies
              used: React, Redux, JavaScript, Firebase, Node, Express,
              MaterialUI.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      {/* Blog */}
      <Paper elevation={3} className='margin'>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <img src={Blog} className='portfolio-picture' alt='BlogSpace'></img>
          </Grid>
          <Grid item xs={8}>
            <Typography variant='h5' align='center'>
              Blog
            </Typography>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/jlw429/JasonsBlog'
              className='portfolio-link'
            >
              <Tooltip title='Repository' placement='left'>
                <GitHubIcon className='portfolio_icon' />
              </Tooltip>
            </a>
            <span>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.jasonlwest.com/blog'
                className='portfolio-link'
              >
                <Tooltip title='Deployed Website' placement='right'>
                  <WebIcon className='portfolio_icon' />
                </Tooltip>
              </a>
            </span>
            <Typography variant='body1'>
              A blog built with React, node.js, express and MySql. Simple blog
              with the ability to follow the crud operators of create, read, and
              delete. Able to view all blogs from homepage.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      {/* Gradebook */}
      <Paper elevation={3} className='margin'>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <img src={GradeBook} className='portfolio-picture' alt='pro2'></img>
          </Grid>
          <Grid item xs={8}>
            <Typography variant='h5' align='center'>
              Gradebook
            </Typography>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/jlw429/Project2'
              className='portfolio-link'
            >
              <Tooltip title='Repository' placement='left'>
                <GitHubIcon className='portfolio_icon' />
              </Tooltip>
            </a>
            <span>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://msu-project-two.herokuapp.com/'
                className='portfolio-link'
              >
                <Tooltip title='Deployed Website' placement='right'>
                  <WebIcon className='portfolio_icon' />
                </Tooltip>
              </a>
            </span>
            <Typography variant='body1'>
              Full-stack web project as a way for the administrators in a school
              to give up-to-date attendance records from all your teachers in
              real-time. Full authentication through passport.js. Teachers and
              student support staff can overview daily attendance records as
              well as individual student profiles. Technologies used:
              Javascript, HTML, CSS, node, express, twilio send grid API,
              handlebars
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <div className='portfolio-break'>
        <Typography align='center' variant='h6'>
          Front End Projects:
        </Typography>
      </div>
      {/* Emp Directory */}
      <Paper elevation={3} className='margin'>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <img src={EmpDir} className='portfolio-picture' alt='pro2'></img>
          </Grid>
          <Grid item xs={8}>
            <Typography variant='h5' align='center'>
              Employee Directory
            </Typography>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/jlw429/EmployeeDirectoryPro19'
              className='portfolio-link'
            >
              <Tooltip title='Repository' placement='left'>
                <GitHubIcon className='portfolio_icon' />
              </Tooltip>
            </a>
            <span>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://jlw429.github.io/EmployeeDirectoryPro19/'
                className='portfolio-link'
              >
                <Tooltip title='Deployed Website' placement='right'>
                  <WebIcon className='portfolio_icon' />
                </Tooltip>
              </a>
            </span>
            <Typography variant='body1'>
              AS the owner of XYZ corporation, I need a way to easily find
              non-sensitive information from my employees. This shows the
              employees picture, name, email, user-ID, city, state and country
              (since my employees reside in CA as well). It also lets me sort by
              first name and last name AS WELL AS search by name (either first
              or last). Technologies used React, Font_Awesome, Axios, BootStrap,
              RandomUserAPI.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      {/* Thats My Jam */}
      <Paper elevation={3} className='margin'>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <img
              src={ThatsMyJam}
              className='portfolio-picture'
              alt='pro2'
            ></img>
          </Grid>
          <Grid item xs={8}>
            <Typography variant='h5' align='center'>
              That's My Jam!
            </Typography>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/jlw429/MusicArtists'
              className='portfolio-link'
            >
              <Tooltip title='Repository' placement='left'>
                <GitHubIcon className='portfolio_icon' />
              </Tooltip>
            </a>
            <span>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://jlw429.github.io/MusicArtists/'
                className='portfolio-link'
              >
                <Tooltip title='Deployed Website' placement='right'>
                  <WebIcon className='portfolio_icon' />
                </Tooltip>
              </a>
            </span>
            <Typography variant='body1'>
              A way for the user to learn more about an artist they may have
              heard on TikTok or the radio. It gives a short biography of the
              artist or band, you also have their top 50 songs and the app has
              the technology to show the music video from youTube that populates
              as a modal in the middle of the page. The app was built from
              scratch using Javascript,Jquery, Bootstrap, CSS, HTML and using
              APIs from the audio database, last.fm, and youTube.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      {/* Weather */}
      <Paper elevation={3} className='margin'>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <img src={Weather} className='portfolio-picture' alt='pro2'></img>
          </Grid>
          <Grid item xs={8}>
            <Typography variant='h5' align='center'>
              Weather Dashboard
            </Typography>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/jlw429/HW6Weather'
              className='portfolio-link'
            >
              <Tooltip title='Repository' placement='left'>
                <GitHubIcon className='portfolio_icon' />
              </Tooltip>
            </a>
            <span>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://jlw429.github.io/HW6Weather/'
                className='portfolio-link'
              >
                <Tooltip title='Deployed Website' placement='right'>
                  <WebIcon className='portfolio_icon' />
                </Tooltip>
              </a>
            </span>
            <Typography variant='body1'>
              App was developed for a quick way to type in a city, get the city,
              current conditions and five day forecast. Utilizing API from
              openweathermap as well as Jquery, Javascript, Bootstrap, CSS, and
              HTML.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <div className='margin-footer'></div>
    </div>
  );
}

export default Portfolio;
