import classes from './Hero.module.css';
import React from 'react';
import Button from '../../UI/Button';
import YogaNew from '../../img/yoga1.svg';
import YogaNew1 from '../../img/yoga2.svg';

const Hero = (props) => {
  return (
    <div className="container">
      {/* props start passed at App.jsx */}
      {!props.start && (
        <p className={classes.order}>
          Over <b>52 147</b> plans ordered
        </p>
      )}

      {props.start ? (
        <h1 className={classes.access}>Start your yoga program today!</h1>
      ) : (
        <h1 className={classes.access}>Get access to your yoga program now!</h1>
      )}

      <div className={classes['hero-container']}>
        <div className={classes['hero-plan']}>
          <p>
            Choose your plan and get{' '}
            <span className={classes.trial}>7 days free</span>
          </p>
          <div className={classes['hero-plan-complete']}>
            <div className={classes.plan}>
              <div>
                <b>6 months plan</b>
              </div>

              <div>
                <span className={classes.save}>Save 50%</span>
              </div>
            </div>
            <br />

            <span className={classes.price}>$9.99/month</span>
            <span className={classes.circle}>
              <i className="far fa-check-circle"></i>
            </span>

            <p>
              <s>$119.94</s> <span className={classes.sale}>$59.94</span> billed
              every 6 months
            </p>
          </div>
          <div className={classes['hero-plan-not-complete']}>
            <span className={classes.plan}>
              <b>3 months plan</b>
            </span>
            <br />

            <span className={classes.price}>$14.99/month</span>
            <span className={classes['circle-not-complete']}>
              <i className="far fa-circle"></i>
            </span>

            <p>
              <s>$59.97</s> <span className={classes.sale}>$44.97</span> billed
              every 3 months
            </p>
          </div>
          <div className={classes['hero-plan-not-complete']}>
            <span className={classes.plan}>
              <b>1 month plan</b>
              <br />
            </span>

            <span className={classes.price}>$19.99/month</span>
            <span className={classes['circle-not-complete']}>
              <i className="far fa-circle"></i>
            </span>

            <p>Billed monthly</p>
          </div>
          <div className={classes.button}>
            <Button>Get your plan</Button>
          </div>
        </div>
        <div className={classes['hero-program']}>
          <p>What's in my program?</p>
          <div className={classes['hero-program-card']}>
            <div className={classes.image}>
              <img src={YogaNew} alt="" />
            </div>
            <div>
              <h4>A personalized yoga program</h4>
              <span>Completely safe and focused on your key goals</span>
            </div>
          </div>
          <div className={classes['hero-program-card']}>
            <div className={classes.image}>
              <img src={YogaNew1} alt="" />
            </div>
            <div>
              <h4>A personalized yoga program</h4>
              <span>Completely safe and focused on your key goals</span>
            </div>
          </div>
          <div className={classes['hero-program-card']}>
            <div className={classes.image}>
              <img src={YogaNew} alt="" />
            </div>
            <div>
              <h4>A personalized yoga program</h4>
              <span>Completely safe and focused on your key goals</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
