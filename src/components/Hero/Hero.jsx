import classes from './Hero.module.css';
import React from 'react';

const Hero = () => {
  return (
    <div className={classes.container}>
      <span className={classes.order}>
        Over <b>52 147</b> plans ordered
      </span>
      <h1>Get access to your yoga program now!</h1>
      <div className={classes['hero-container']}>
        <div className={classes['hero-plan']}>
          <p>Choose your plan and get 7 days free</p>
          <div className={classes['hero-plan-complete']}>
            <span className={classes.plan}>
              <b>6 months plan</b>
            </span>
            <span className={classes.save}>Save 50%</span>

            <span>9.99/month</span>
            <span className={classes.circle}>
              <i class="far fa-check-circle"></i>
            </span>

            <p>
              <s>$119.94</s> <span className={classes.sale}>$59.94</span> billed
              every 6 months
            </p>
          </div>
          <div></div>
          <div></div>
        </div>
        <div className={classes['hero-program']}>
          <p>Whats in my program</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
