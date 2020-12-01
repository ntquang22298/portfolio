import React from 'react';

import { FaFacebookSquare, FaLinkedin, FaGithub } from 'react-icons/fa';
import Particle from '../../components/Particle';
import avatar from '../../img/avatar.png';
const Home = () => {
  return (
    <div className='container'>
      <div className='intro'>
        <img alt='avatar' className='avatar' src={avatar} />
        <h1>Nguyễn Tuấn Quang</h1>
        <div className='vertical-flip'>
          I'm a <span>Front-end developer</span>
          <span>Blockchain developer</span>
        </div>

        <ul className='social-icons'>
          <li>
            <a href='https://www.facebook.com/tuanquang.nguyen.16/'>
              <FaFacebookSquare />
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/quang-nguyen-a201b3191/'>
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href='https://github.com/ntquang22298'>
              <FaGithub />
            </a>
          </li>
        </ul>
        <div className='mt-4'>
          <a className='btn' href='https://www.topcv.vn/xem-cv/5683a18a8d25de6854692ed761d06666'>
            My CV
          </a>
        </div>
      </div>
      <Particle />
    </div>
  );
};
export default Home;
