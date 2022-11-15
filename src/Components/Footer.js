import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../Styles/footer.css"
import { SocialMediaLinks } from '../helpers/SocialMediaLinks';


function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
           <a href={SocialMediaLinks.Instagram} target="_blank" rel='noreferrer' ><InstagramIcon /></a>
           <a href={SocialMediaLinks.LinkedIn} target="_blank" rel='noreferrer' ><LinkedInIcon /></a>
           <a href={SocialMediaLinks.Github} target="_blank" rel='noreferrer' ><GitHubIcon /></a>
        </div>
        <p>&copy; 2022 Mohd Abdullah</p>
    </div>
  )
}

export default Footer