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
            <a href='https://news.sun-asterisk.com/vi/p/vuot-qua-nhieu-doi-thu-tren-the-gioi-sun-tiep-tuc-chien-thang-tai-torus-hackathon-nhan-giai-thuong-4000-usd-RO6dG5dVNyx'>
              <img src={ecopet} alt='ecopet' />
            </a>
          </div>
        </div>
        <div className='col-md-4 '>
          <div className='card'>
            <a href='https://quiz-291707.web.app/home'>
              <img src={quiz} alt='ecopet' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Works;
