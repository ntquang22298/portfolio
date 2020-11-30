import React from 'react';

import avatar from '../../img/avatar1.jpg';
const MessageBox = () => {
  return (
    <div className='row'>
      <div className='col-md-4' style={{ marginTop: 60, textAlign: 'center' }}>
        <img className='avatar' src={avatar} alt='avatar' />
      </div>
      <div className='col-md-8' style={{ marginTop: 60 }}>
        <div className='card'>
          <div className='row'>
            <div className='col-md-6'>
              <p>
                I am Quang, a front end and blockchain developer from Hanoi, Vietnam. I have rich
                experience in web site building and customization.
              </p>
              <div className='mt-4'>
                <a className='btn' href='https://www.linkedin.com/in/quang-nguyen-a201b3191/'>
                  My LinkedIn
                </a>
              </div>
            </div>
            <div className='col-md-6'>
              <h4>Team work</h4>
              <div className='progress'>
                <div
                  class='progress-bar bg-success'
                  role='progressbar'
                  style={{ width: '80%' }}
                  aria-valuenow='90'
                  aria-valuemin='0'
                  aria-valuemax='100'
                ></div>
              </div>
              <h4>Developer</h4>
              <div className='progress'>
                <div
                  class='progress-bar bg-warning'
                  role='progressbar'
                  style={{ width: '90%' }}
                  aria-valuenow='90'
                  aria-valuemin='0'
                  aria-valuemax='100'
                ></div>
              </div>
              <h4>English</h4>
              <div className='progress'>
                <div
                  class='progress-bar bg-info'
                  role='progressbar'
                  style={{ width: '70%' }}
                  aria-valuenow='90'
                  aria-valuemin='0'
                  aria-valuemax='100'
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MessageBox;
