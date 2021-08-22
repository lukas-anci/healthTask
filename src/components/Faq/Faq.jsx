import React, { useState } from 'react';
import classes from './Faq.module.css';
import Button from './../../UI/Button';

const data = [
  {
    question: 'What happens after I order?',
    answer:
      ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis dolorem magni quod fugiat consequatur aut cupiditate, iste maxime quidem molestiae veniam voluptatum, maiores incidunt rem! Impedit quasi nobis inventore id?',
  },
  {
    question: 'Where I can access my plan?',
    answer:
      ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis dolorem magni quod fugiat consequatur aut cupiditate, iste maxime quidem molestiae veniam voluptatum, maiores incidunt rem! Impedit quasi nobis inventore id?',
  },
  {
    question: 'How can I cancel my subscription?',
    answer:
      ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis dolorem magni quod fugiat consequatur aut cupiditate, iste maxime quidem molestiae veniam voluptatum, maiores incidunt rem! Impedit quasi nobis inventore id?',
  },
  {
    question: 'Why this program is paid?',
    answer:
      ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis dolorem magni quod fugiat consequatur aut cupiditate, iste maxime quidem molestiae veniam voluptatum, maiores incidunt rem! Impedit quasi nobis inventore id?',
  },
];

const Faq = () => {
  const [select, setSelect] = useState(null);
  const toggle = (i) => {
    if (select === i) {
      return setSelect(null);
    }
    setSelect(i);
  };
  return (
    <div className="container">
      <h1>Frequently asked questions</h1>
      {data.map((item, i) => (
        <div key={i} className={classes.item}>
          <div onClick={() => toggle(i)} className={classes.title}>
            <h2>{item.question}</h2>
            <span>{select === i ? '-' : '+'}</span>
          </div>
          {select === i ? (
            <div className={select === i ? 'content show' : 'content'}>
              <p>{item.answer}</p>
            </div>
          ) : null}
        </div>
      ))}
      <div className={classes.button}>
        <Button>Get my plan</Button>
      </div>
    </div>
  );
};

export default Faq;