import React from 'react'
/* import john from './images/john-doe.png' */
import './Contact.css';
// import './Hero';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { SocialIcon } from 'react-social-icons';
const Contact = () => {
    return (
        <div id='contact'>

                {/* <img src={john} alt='john' /> */}
                <div className='contactContainer'>
                    <h1 className='contactTitle'>Contact</h1>
                    <p className='pContact'>Interested in working together?</p>
                    <p className='pContact'>Feel free to reach out!</p>
                    <div className='svgImg'>
                    <br/>
                    <SocialIcon url="https://github.com/koantonio" bgColor="#b57281" className='icon'/><a> </a>
                    <SocialIcon url="https://linkedin.com/in/kara-antonio" bgColor="#b57281"/><a> </a>
                    <SocialIcon url="mailto:kara.antonio@gmail.com" bgColor="#b57281" /><a> </a>
                    </div>
                </div>

        </div>
    )
}

export default Contact;