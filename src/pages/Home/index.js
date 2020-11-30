import React from 'react';
import {
  AiOutlineSkype,
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from 'react-icons/ai';
import Particle from '../../components/Particle';
import avatar from '../../img/avatar.png';
const Home = () => {
  return (
    <div className='container'>
      <div className='intro'>
        <img alt='avatar' className='avatar' src={avatar} />
        <h1>Nguyễn Tuấn Quang</h1>
        <span>
          I'm a <span>Front-end developer</span>
        </span>
        <ul className='social-icons'>
          <li>
            <a href='#'>
              <AiOutlineFacebook />
            </a>
          </li>
          <li>
            <a href='#'>
              <AiOutlineSkype />
            </a>
          </li>
          <li>
            <a href='#'>
              <AiOutlineLinkedin />
            </a>
          </li>
          <li>
            <a href='#'>
              <AiOutlineGithub />
            </a>
          </li>
        </ul>
        <div className='mt-4'>
          <a className='btn'>My CV</a>
        </div>
      </div>
      <Particle />
    </div>
  );
};
export default Home;
