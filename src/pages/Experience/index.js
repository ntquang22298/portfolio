import React from 'react';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
const Experience = () => {
  return (
    <div className='container'>
      <h2>Experience</h2>
      <div className='row'>
        <div className='timeline-element'>
          <VerticalTimeline>
            <VerticalTimelineElement
              className='vertical-timeline-element--work'
              date='2011 - present'
              iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
              icon={<FaBriefcase />}
            >
              <h3 className='vertical-timeline-element-title'>Frontend Developer</h3>

              <p>
                <b>Compay:</b> VNPAY
              </p>
              <p>
                <b>Main repository:</b> Maintain VNPAY wallet, Develop front end for VNPAY's
                projects
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className='vertical-timeline-element--work'
              date='6/2019 - 6/2020'
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              icon={<FaBriefcase />}
            >
              <h3 className='vertical-timeline-element-title'>Blockchain developer</h3>

              <p>
                <b>Compay:</b> Sun Asterisk
              </p>
              <p>
                <b>Main repository:</b> Research and report blockchain platforms, develop blockchain
                projects, attend hackathons
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className='vertical-timeline-element--work'
              date='9/2016 - 6/2020'
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<FaGraduationCap />}
            >
              <h3 className='vertical-timeline-element-title'>Bachelor’s Degree</h3>

              <p>University: UET - Vietnam National University</p>
              <p>Faculty: Computer Science</p>
              <p>Degree grade: Excellent</p>
              <p>GPA: 3.33</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};
export default Experience;
