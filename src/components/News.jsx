import React from 'react';
import './scss/News.css';


const News = () => {
  return (
    <div className='circle'>
    <div className="news-container">
      <div className="news-content">
        <div className="three">

        </div>
     
        <div className="two">
            <div className="three">
            <h2 className='text-[bold] text-[20px]'>Newsletter</h2>
            <p>Sign up for newsletter and get latest news and updates.</p>
            </div>
           
     
        <div className="news-input">
          <input type="email" placeholder="Enter your email" />
          <button className="subscribe-button">Subscribe</button>
        </div>
        </div>
        
       
      </div>
     
    </div>
    
    </div>
  );
};

export default News;