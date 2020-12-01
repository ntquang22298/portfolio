import React from 'react';

const Skills = () => {
  return (
    <div className='container'>
      <h2>Skills</h2>
      <div className='row'>
        <div className='col-md-4'>
          <div
            className='skill-box'
            style={{
              background: 'rgb(108,108,229)',
              boxShadow: '0px 5px 20px 0px rgba(108, 108, 229, 0.5)',
            }}
          >
            <h5>Programing language</h5>
            <ul>
              <li>HTML/CSS/SASS</li>
              <li>Javascript</li>
              <li>Typescript</li>
              <li>Solidity</li>
            </ul>
            <h5>Frameworks &amp; Libraries</h5>
            <ul>
              <li>ReactJS / Redux / NodeJS</li>
              <li>Bootstrap/ Ant design/ Md design</li>
              <li>Resful API / Json / XML</li>
            </ul>
          </div>
        </div>
        <div className='col-md-4'>
          <div
            className='skill-box'
            style={{
              background: 'rgb(249, 215, 76)',
              boxShadow: '0px 5px 20px 0px rgba(249, 215, 76, 0.5)',
              color: '#000',
            }}
          >
            <h5>Database</h5>
            <ul>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>Firebase </li>
            </ul>
            <h5>Version control</h5>
            <ul>
              <li>Git</li>
            </ul>
            <h5>IDE</h5>
            <ul>
              <li>Visual code</li>
            </ul>
          </div>
        </div>
        <div className='col-md-4'>
          <div
            className='skill-box'
            style={{
              background: 'rgb(249, 123, 139)',
              boxShadow: '0px 5px 20px 0px rgba(249, 123, 139, 0.5)',
            }}
          >
            <h5>Foreign language</h5>
            <ul>
              <li>Vstep: B1</li>
            </ul>
            <h5>Knowledge</h5>
            <ul>
              <li>Good understanding about OOP, SOLID principles</li>
              <li>Good understanding about the Agile and Scrum process</li>
              <li>Good time management, presentation and teamwork skills</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
