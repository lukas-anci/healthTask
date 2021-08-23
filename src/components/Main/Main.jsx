import classes from './Main.module.css';

import React from 'react';

import Yoga from '../../img/yoga.svg';

const Main = () => {
  return (
    <div className="container">
      <div className={classes['main-container']}>
        <div className={classes['main-container-intro']}>
          <h2>Start your yoga journey now!</h2>
          <img className={classes.yoga} src={Yoga} alt="" />
          {/* 200/300 */}
        </div>
        <div>
          <h2>Is Positive Yoga right for me?</h2>
          <p>
            <i className="far green fa-check-circle"></i>{' '}
            <span>Each Program adapts to your age or fitness level</span>
          </p>
          <p>
            <i className="far green fa-check-circle"></i>{' '}
            <span>Mindful way to exercise and get real results</span>
          </p>
          <p>
            <i className="far green fa-check-circle"></i>{' '}
            <span>Effective and long-term lasting results</span>
          </p>
          <p>
            <i className="far green fa-check-circle"></i>{' '}
            <span>Suited activities that benefit both the mind and body</span>
          </p>
          <p>
            <i className="far green fa-check-circle"></i>{' '}
            <span>Low-intensity but highly-effective workouts</span>
          </p>
          <p>
            <i className="far green fa-check-circle"></i>{' '}
            <span>Extra attention to muscle, joint and back health</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
