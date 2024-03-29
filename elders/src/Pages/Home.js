import React from 'react'
import '../style/Home.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';

function Home() {
  return (
    <div className='home'>
    <div className='about'>
      <h2>Hello everyone, Welcome to my website.</h2>
      <h3>I am Hirushi Rathnayake.</h3>
      <div className='prompt'>
        <p>I am a trainee software engineer who loves coding.I am a passionate enthusiastic skilled undergraduate from University of Moratuwa, Faculty of Information Technology.
      I schooled at Kandy Girls' High school and my home town is kandy. As a undergraduate my responsibility is to provide valuble things to world. I am a good team player and also a good team leader 
      with solid and friendly leadership qualities. I like to learn many new things using self studies. Geeksforgeeks, Tutorials point are some tutorials which I follows and
      Youtube tutorials also good for learn things.</p>
      <LinkedInIcon/>
      <MailIcon/>
      <GitHubIcon/>
      </div>
    </div>
    <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, NPM,
              BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS,
              MySQL, MongoDB, MS SQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home
