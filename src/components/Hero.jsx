import React from 'react'
import logoNoBorder from "../projectImages/logoNoBorder.png";
import { SocialIcon } from 'react-social-icons';
import './Hero.css'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='textHero'>
                {/* <div className='hi'>Hi, I'm :</div> */}
                <div className='titleHero'>
                    <p className='typed'>Kara Antonio</p>
                    </div>
                <div className='profSummary'>I'm a software engineer that specializes in web development and front-end work. I enjoy expanding my skills and working with new tech stacks.</div>
                <div className='socialMediaIcons'> 
                <SocialIcon url="https://github.com/koantonio" bgColor="#b57281" className='icon'/><a> </a>
                <SocialIcon url="https://linkedin.com/in/kara-antonio" bgColor="#b57281"/><a> </a>
                <SocialIcon url="https://leetcode.com/koantonio/" bgColor="#b57281"/><a> </a>
                <SocialIcon url="mailto:kara.antonio@gmail.com" bgColor="#b57281" /><a> </a>
                </div>
            </div>
            <div className='imgDiv'>
                <img className='selfie' src={logoNoBorder} />
            </div>

        </div>
    )
}

export default Hero