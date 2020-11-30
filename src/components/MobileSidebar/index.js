import React, { useState } from 'react';
import { AiOutlineMenuUnfold } from 'react-icons/ai';

const MobileSidebar = () => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <div className='mobile-sidebar'>
      <div className='container'>
        <div className='row'>
          <button className='btn' onClick={() => setCollapsed(!collapsed)}>
            <AiOutlineMenuUnfold />
          </button>
          <h1>NTQ</h1>
        </div>

        <div className='nav-collapse' style={{ display: collapsed ? 'none' : 'block' }}>
          <ul>
            <li>
              <a href='#home'>Home</a>
            </li>
            <li>
              <a href='#about-me'>About</a>
            </li>
            <li>
              <a href='#skills'>Skills</a>
            </li>
            <li>
              <a href='#experience'>Experience</a>
            </li>
            <li>
              <a href='#works'>Works</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default MobileSidebar;
