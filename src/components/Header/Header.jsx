import classes from './Header.module.css';
import React from 'react';

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.discount}>
        <p>
          <i class="fa fa-tag"></i> 50% discount only valid for 00:15:49
        </p>
      </div>
      <div className={classes.logo}>
        <div>
          <i class="fa fa-heart"></i> Positive Yoga
        </div>
      </div>
      <div className={classes.hr}></div>
    </div>
  );
};

export default Header;
