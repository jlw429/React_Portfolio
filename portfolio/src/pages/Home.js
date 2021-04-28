import React from 'react';
import Img from '../images/jason_picture.jpg';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Home = () => {
  return (
    <Grid container alignItems='center'>
      <Grid item sm>
        <img src={Img} alt='JWest'></img>
      </Grid>
      <Grid item sm>
        <Typography variant='h3'>
          Hi, I'm Jason. I am your next web developer!
        </Typography>
        <Typography variant='body1'>
          <p>
            In the summer of 2020, I decided to make a change. I wanted to do
            something that I have put off for years- learn programming. For
            years, I have tried the free route and just couldn't focus enough to
            get the tools needed to make a career change. I decided to contact
            Michigan State University and found their 6 month full-stack
            boot-camp. I plan to leverage my previous role as a general manager
            for a large retail environment to succeed and transfer to my new
            role in Information Technology.
          </p>
          <p>
            I am a self-motivated, versatile and results oriented leader with 20
            years of hands-on experience in fast-paced environments. My
            strengths lie in building cohesive and highly functioning teams
            focusing on daily communication, working with each others
            strength's, and build comradery among the team to have fun at work!
          </p>
          <p>
            Understanding of SCRUM and Agile methodologies. I am very
            comfortable with HTML, CSS, Bootstrap, Javascript, Jquery, Node.js,
            MYSql, Handlebars
          </p>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Home;
