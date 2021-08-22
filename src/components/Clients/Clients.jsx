import classes from './Clients.module.css';

import React from 'react';
import Button from '../../UI/Button';

const Clients = () => {
  return (
    <div className="container">
      <h2>Hear success stories from our clients</h2>
      <div className={classes['card-container']}>
        <div className={classes.card}>
          <h4>Emily, 28</h4>
          <h5>Delaware, NJ</h5>
          <img src="https://picsum.photos/id/1/100/100" alt="" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
            expedita repudiandae beatae eligendi accusantium sint atque quae
            odio voluptatem eveniet?
          </p>
        </div>
        <div className={classes.card}>
          <h4>Emily, 28</h4>
          <h5>Delaware, NJ</h5>
          <img src="https://picsum.photos/id/1/100/100" alt="" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
            expedita repudiandae beatae eligendi accusantium sint atque quae
            odio voluptatem eveniet?
          </p>
        </div>
        <div className={classes.card}>
          <h4>Emily, 28</h4>
          <h5>Delaware, NJ</h5>
          <img src="https://picsum.photos/id/1/100/100" alt="" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
            expedita repudiandae beatae eligendi accusantium sint atque quae
            odio voluptatem eveniet?
          </p>
        </div>
      </div>
      <div className={classes.button}>
        <Button>Get my plan</Button>
      </div>
    </div>
  );
};

export default Clients;
