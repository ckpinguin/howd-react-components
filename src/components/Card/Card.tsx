import React from 'react';

import styles from './Card.module.css';

export interface CardProps {}

function Card({}: CardProps) {
  return <div className={styles.wrapper}></div>;
}

export default Card;
