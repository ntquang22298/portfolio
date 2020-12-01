import React from 'react';
import MessageBox from '../../components/MessageBox';
import { FaSkype, FaPhone, FaEnvelope, FaMapMarked } from 'react-icons/fa';
const AboutMe = () => {
  return (
    <div className='container'>
      <h2>About Me</h2>
      <MessageBox />
      <div className='container'>
        <div className='row' style={{ paddingTop: 50 }}>
          <div className='col-xl-3 col-md-6 contact'>
            <FaPhone /> +84 376724058
          </div>
          <div className='col-xl-3 col-md-6 contact'>
            <FaEnvelope /> ntquang22298@gmail.com
          </div>
          <div className='col-xl-3 col-md-6 contact'>
            <FaSkype /> live:.cid.f5f5f7ff29349fb3
          </div>
          <div className='col-xl-3 col-md-6 contact'>
            <FaMapMarked /> 251/8 Nguyễn Khang, Hà Nội
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
