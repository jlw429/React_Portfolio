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
import Tetris from '../images/portfolio/tetris.png';
import EmpDir from '../images/portfolio/emp_dir.png';
import ThatsMyJam from '../images/portfolio/music.png';
import Weather from '../images/portfolio/weather.png';

const portfolioItemsArray = [
  {
    id: 1,
    image: RambleImg,
    title: 'RambleSpace',
    githubLink: 'https://github.com/jlw429/RambleSpace_jlw429',
    webLink: 'https://ramblespace.jasonlwest.com/',
    summary: `Fully functioning front and back end (including authentication)
              social media website resembling Twitter. The app has the ability to
              post a "ramble" (like posting a tweet) by clicking the top + icon.
              It then will open a modal for you to "ramble on". The app also has the ability to  like and unlike
              rambles, change user details, update user pictures. Comments open up in a modal for the user to comment on or like as they wish. Technologies used: React,
              Redux, JavaScript, Firebase, Node, Express, MaterialUI.`,
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
    image: EmpDir,
    title: 'Employee Directory',
    githubLink: 'https://github.com/jlw429/EmployeeDirectoryPro19',
    webLink: 'https://jlw429.github.io/EmployeeDirectoryPro19/',
    summary: `Front end react project using the randomuserAPI to fetch data, tables to manipulate the data and have the ability to sort by last name/first name as well as search the table to find an employees name.    
              The table shows non-sensitive information from my employees. This table shows the
              employees picture, name, email, user-ID, city, state and country
              (since my employees reside in CA as well). It also lets me sort by
              first name and last name AS WELL AS search by name (either first
              or last). Technologies used React, Font_Awesome, Axios, BootStrap,
              RandomUserAPI.`,
  },
  {
    id: 4,
    image: Tetris,
    title: 'Tetris',
    githubLink: 'https://github.com/jlw429/Tetris',
    webLink: 'https://jlw429.github.io/Tetris/',
    summary: `Tetris game built with React and specifically React Hooks. Traditional Tetris game which has you able to rotate the shapes using the up arrow on your keyboard. You have the opportunity to hold the down arrow to move the piece faster, as well as the left and right arrows to place where you need it.`,
  },
  {
    id: 5,
    image: Blog,
    title: 'Blog',
    githubLink: 'https://github.com/jlw429/JasonsBlog',
    webLink: 'https://github.com/jlw429/JasonsBlog',
    summary: `A blog built with React, node.js, express and MySql. Simple blog
              with the ability to follow the crud operators of create, read, and
              delete. Able to view all blogs from homepage. Utilizes JawsDB to have the blog served on the web. `,
  },

  {
    id: 6,
    image: Weather,
    title: 'Weather Dashboard',
    githubLink: 'https://github.com/jlw429/HW6Weather',
    webLink: 'https://jlw429.github.io/Weather-Dashboard/',
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
      <div className='portfolio-break'></div>

      <PortfolioList portfolioItemsProp={portfolioItemsArray} />

      <div className='margin-footer'></div>
    </div>
  );
}

export default Portfolio;
