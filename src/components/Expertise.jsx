import React from 'react'
/* import john from './images/john-doe.png' */
import './Expertise.css';

const Expertise = () => {
    return (
        <div className='expertiseContainer' id='expertise'>
            
                {/* <img src={john} alt='john' /> */}


{/* <br/>
<br/>
<br/>
<br/>
<br/>
 */}

                    <br/>
                    <h1 className='title'>Skills</h1>
                    <br/>
                    <div className='skillsContainer'>
                    <h1 className='skillType'>Front-End</h1>
                    <p>ReactJS, Angular, HTML, CSS, React Native, NPM, BootStrap, MaterialUI, Javascript</p>
                    <br/>

                    <h1 className='skillType'>Back-End</h1>
                    <p>Operating Systems: Linux, Unix, Microsoft Windows, Android</p>
                    <p>Frameworks: Spring Boot, AWS, Microsoft Azure </p>
                    <p>Database: MySQL, MicrosoftSQL Server, PostgreSQL, Firebase</p>
                    <br/>

                    <h1 className='skillType'>Data Administrator</h1>
                    <p>worked with BNY Mellon proprietary techstack</p>
                    <br/>

                    <h1 className='skillType'>Languages</h1>
                    <p>Main laguages: JavaScript, TypeScript, Java, C++</p>
                    <p>Other languages: I've worked with: C#, Python, Pascal, Perl, Swift</p>
                    <br/>

                    <h1 className='skillType'>Certifications</h1>
                    <p>Project Scrum Management</p>
                    <p>Date Issued: 12/06/2020 </p>
                    <p>Expiration Date: N/A </p>
                    </div>
            
        </div>
    )
}

export default Expertise;