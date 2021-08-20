import classes from './Clients.module.css';

import React from 'react';

const Clients = () => {
  return (
    <div className="container">
      <h3>Hear succes stories from our clients</h3>
      <div className={classes['card-container']}>
        <div className={classes.card}>
          <h4>Emily,28</h4>
          <h5>Delaware,NJ</h5>
          <img src="https://picsum.photos/id/1/100/100" alt="" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
            expedita repudiandae beatae eligendi accusantium sint atque quae
            odio voluptatem eveniet?
          </p>
        </div>
        <div className={classes.card}>
          <h4>Emily,28</h4>
          <h5>Delaware,NJ</h5>
          <img src="https://picsum.photos/id/1/100/100" alt="" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
            expedita repudiandae beatae eligendi accusantium sint atque quae
            odio voluptatem eveniet?
          </p>
        </div>
        <div className={classes.card}>
          <h4>Emily,28</h4>
          <h5>Delaware,NJ</h5>
          <img src="https://picsum.photos/id/1/100/100" alt="" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
            expedita repudiandae beatae eligendi accusantium sint atque quae
            odio voluptatem eveniet?
          </p>
        </div>
      </div>

      <button>Get My Plan</button>
    </div>
  );
};

export default Clients;
