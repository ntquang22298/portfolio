import React from 'react';
import ecopet from '../../img/ecopet.jpeg';
import quiz from '../../img/quiz.png';

const Works = () => {
  return (
    <div className='container'>
      <h2> Works</h2>
      <div className='row'>
        <div className='col-md-4 '>
          <div className='card'>
            <img src={ecopet} alt='ecopet' />
          </div>
        </div>
        <div className='col-md-4 '>
          <div className='card'>
            <img src={quiz} alt='ecopet' />
          </div>
        </div>
        <div className='col-md-4 '>
          <div className='card'>
            <img src={ecopet} alt='ecopet' />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Works;
