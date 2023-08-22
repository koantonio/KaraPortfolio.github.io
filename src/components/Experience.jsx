import React from 'react'
/* import john from './images/john-doe.png' */
import './Experience.css';
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";
  import SchoolIcon from '@mui/icons-material/School';
  import WorkIcon from '@mui/icons-material/Work';

const Experience = () => {
    return (
        <div className='experience' id='experience'>
          <br/><br/><br/><br/><br/>
          <div className='experienceTitle'>
                Experience
          </div>
                <br></br>
        <VerticalTimeline lineColor="#C9A9A6">
        
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2022"
          iconStyle={{ background: "#b57281", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Texas Wesleyan University
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>
          <p> Computer Science Minor in Mathematics</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2021 - August 2021"
          iconStyle={{ background: "#b57281", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer - Paylocity
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Remote
          </h4>
          <ul>
            <li>Shadow web developers during their deliverables</li>
            <li>Work on UI using Angular and React</li>
            <li>Pair program with other developers and interns</li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Oct 2021 - May 2022"
          iconStyle={{ background: "#b57281", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Web Developer -Texas Wesleyan University
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Dallas, TX
          </h4>
          <ul>
            <li>Maintain and improve Texas Wesleyans school website</li>
            <li>Worked closely with our marketing team to excel website engagement</li>
            <li>Enhance user experience for Texas Wesleyan’s students</li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Aug 2022 - present"
          iconStyle={{ background: "#b57281", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Web Developer - Cognizant 
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Dallas, TX
          </h4>
          <ul>
            <li> Developed a Performer ticketing application using Angular, HTML,CSS,Spring Boot</li>
            <li>Used test driven development to create social media platform called PixelGram</li>
            <li>Work with BNY Mellon database management system</li>
            <li>BNY Mellon: Implement and maintain DB structure for BNY Mellon Bank using their software Eagle.</li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
      
        </div>
    )
}

export default Experience;


// <div className='container'>
// {/* <img src={john} alt='john' /> */}
// <div className='col-2'>
//     <h2>Experience</h2>
//     <span className='line'></span>
//     <p>Intense is an International Financial Planning company with offices i n multiple jurisdictions over the world. Working with Intense gives me the ability to advise internat ional expatriates living in the middle east from where I live in USA.</p>
//     <p>I am John Doe, a senior advisor for an independently owned financial planning company called Intense.</p>
// </div>
// </div>