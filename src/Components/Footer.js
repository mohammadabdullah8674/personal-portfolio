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
           <a href={SocialMediaLinks.Instagram} target="_blank" ><InstagramIcon /></a>
           <a href={SocialMediaLinks.LinkedIn} target="_blank" ><LinkedInIcon /></a>
           <a href={SocialMediaLinks.Github} target="_blank" ><GitHubIcon /></a>
        </div>
        <p>&copy; 2022 Mohd Abdullah</p>
    </div>
  )
}

export default Footer