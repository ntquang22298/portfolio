import React from 'react';
import { FaGraduationCap, FaUserTie, FaHome, FaBriefcase, FaSitemap } from 'react-icons/fa';
const Sidebar = () => {
  return (
    <div className='desktop-sidebar'>
      <div className='logo'>
        <h1>NTQ</h1>
      </div>
      <nav id='side-bar'>
        <ul>
          <li>
            <a href='#home'>
              <FaHome />
              Home
            </a>
          </li>
          <li>
            <a href='#about-me'>
              <FaUserTie />
              About
            </a>
          </li>
          <li>
            <a href='#skills'>
              <FaGraduationCap />
              Skills
            </a>
          </li>
          <li>
            <a href='#experience'>
              <FaBriefcase />
              Experience
            </a>
          </li>
          <li>
            <a href='#works'>
              <FaSitemap />
              Works
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Sidebar;
