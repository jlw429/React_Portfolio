import React from 'react';

//MUI
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
import CardMedia from '@material-ui/core/CardMedia';

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

const portfolioItemsArray = [
  {
    id: 1,
    image: RambleImg,
    title: 'RambleSpace',
    githubLink: 'https://github.com/jlw429/RambleSpace',
    webLink: '',
    summary: `Fully functioning front and back end (including authentication)
              social media website resembling Twitter. The app has the ability to
              post a "ramble" (like posting a tweet) by clicking the top + icon.
              It then will open a modal for you to "ramble on". , like and unlike
              rambles, change user details, update user pictures. used: React,
              Redux, JavaScript, Firebase, Node, Express, MaterialUI.`,
  },
  {
    id: 2,
    image: Blog,
    title: 'Blog',
    githubLink: 'https://github.com/jlw429/JasonsBlog',
    webLink: '',
    summary: `A blog built with React, node.js, express and MySql. Simple blog
              with the ability to follow the crud operators of create, read, and
              delete. Able to view all blogs from homepage.`,
  },
  {
    id: 3,
    image: GradeBook,
    title: 'GradeBook',
    githubLink: 'https://github.com/jlw429/Project2',
    webLink: 'https://msu-project-two.herokuapp.com/',
    summary: `Full-stack web project as a way for the administrators in a school
              to give up-to-date attendance records from all your teachers in
              real-time. Full authentication through passport.js. Teachers and
              student support staff can overview daily attendance records as
              well as individual student profiles. Technologies used:
              Javascript, HTML, CSS, node, express, twilio send grid API,
              handlebars.`,
  },
];

const frontEndProjectsArray = [
  {
    id: 1,
    image: EmpDir,
    title: 'Employee Directory',
    githubLink: 'https://github.com/jlw429/EmployeeDirectoryPro19',
    webLink: 'https://jlw429.github.io/EmployeeDirectoryPro19/',
    summary: `AS the owner of XYZ corporation, I need a way to easily find
              non-sensitive information from my employees. This shows the
              employees picture, name, email, user-ID, city, state and country
              (since my employees reside in CA as well). It also lets me sort by
              first name and last name AS WELL AS search by name (either first
              or last). Technologies used React, Font_Awesome, Axios, BootStrap,
              RandomUserAPI.`,
  },
  {
    id: 2,
    image: ThatsMyJam,
    title: "That's My Jam",
    githubLink: 'https://github.com/jlw429/MusicArtists',
    webLink: 'https://jlw429.github.io/MusicArtists/#',
    summary: `A way for the user to learn more about an artist they may have
              heard on TikTok or the radio. It gives a short biography of the
              artist or band, you also have their top 50 songs and the app has
              the technology to show the music video from youTube that populates
              as a modal in the middle of the page. The app was built from
              scratch using Javascript,Jquery, Bootstrap, CSS, HTML and using
              APIs from the audio database, last.fm, and youTube.`,
  },
  {
    id: 3,
    image: Weather,
    title: 'Weather Dashboard',
    githubLink: 'https://github.com/jlw429/HW6Weather',
    webLink: 'https://jlw429.github.io/HW6Weather/',
    summary: `App was developed for a quick way to type in a city, get the city,
              current conditions and five day forecast. Utilizing API from
              openweathermap as well as Jquery, Javascript, Bootstrap, CSS, and
              HTML.`,
  },
];

const PortfolioCard = (props) => {
  const item = props.item;
  return (
    <div className='paper_grid'>
      <Grid container spacing={2}>
        {/* <Grid container className='paper_grid' spacing={2}> */}
        <Grid item xs={12} sm={6} md={4}>
          <CardMedia
            component='img'
            image={item.image}
            className='portfolio-picture'
            alt='ramble'
          />
        </Grid>

        <Grid className='port-icon' item xs={12} sm={6} md={8}>
          <div className='portfolio-title-links'>
            <Typography variant='h5' align='center'>
              {item.title}
            </Typography>
            <div className='paper_links'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href={item.githubLink}
                className='portfolio-link'
              >
                <Tooltip title='Repository' placement='left'>
                  <GitHubIcon className='portfolio_icon' />
                </Tooltip>
              </a>

              <a
                target='_blank'
                rel='noopener noreferrer'
                href={item.webLink}
                className='portfolio-link'
              >
                <Tooltip title='Deployed Website' placement='right'>
                  <WebIcon className='portfolio_icon' />
                </Tooltip>
              </a>
            </div>
          </div>
          <Typography className='paper_paragraph' variant='body1'>
            {item.summary}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

const PortfolioList = (props) => {
  const portfolioItems = props.portfolioItemsProp;
  const list = portfolioItems.map((item) => {
    return <PortfolioCard item={item} key={item.id} />;
  });
  return list;
};

function Portfolio() {
  return (
    <div>
      <Typography align='center' variant='h4'>
        Portfolio
      </Typography>
      <div className='portfolio-break'>
        <Typography className='margin_fs' align='center' variant='h6'>
          Full Stack Projects
        </Typography>
      </div>

      <PortfolioList portfolioItemsProp={portfolioItemsArray} />

      <div className='portfolio-break'>
        <Typography align='center' variant='h6'>
          Front End Projects
        </Typography>
      </div>

      <PortfolioList portfolioItemsProp={frontEndProjectsArray} />

      <div className='margin-footer'></div>
    </div>
  );
}

export default Portfolio;
