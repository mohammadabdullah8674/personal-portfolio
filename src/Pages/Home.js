import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../Styles/home.css"
import { SocialMediaLinks } from '../helpers/SocialMediaLinks';

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, My Name is Abdullah</h2>
        <div className='prompt'><p> A software developer with a passion for learning and creating.</p>
          <a href={SocialMediaLinks.Instagram} target="_blank" rel='noreferrer' ><InstagramIcon /></a>
          <a href={SocialMediaLinks.LinkedIn} target="_blank" rel='noreferrer' ><LinkedInIcon /></a>
          <a href={SocialMediaLinks.Github} target="_blank" rel='noreferrer' ><GitHubIcon /></a>
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>ReactJS, Redux, HTML, CSS, NPM, MaterialUI, TailwindCSS, Bootstrap</span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, MongoDB, Mongoose</span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>JavaScript, C, C++, Python</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home