import React from 'react';

import avatar from '../../img/avatar1.jpg';
const MessageBox = () => {
  return (
    <div className='row' style={{ marginTop: 60 }}>
      <div className='col-md-3'>
        <img className='avatar' src={avatar} />
      </div>
      <div className='col-md-9'>
        <div className='card'>
          <div className='row'>
            <div className='col-md-6'>
              <p>
                I am Bolby Doe, web developer from London, United Kingdom. I have rich experience in
                web site design and building and customization, also I am good at WordPress.
              </p>
              <div className='mt-4'>
                <a className='btn'>My LinkedIn</a>
              </div>
            </div>
            <div className='col-md-6'>
              <h4>Team work</h4>
              <div className='progress'>
                <div
                  class='progress-bar bg-success'
                  role='progressbar'
                  style={{ width: '90%' }}
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
                  style={{ width: '90%' }}
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
