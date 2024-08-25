import React from 'react';

import styles from './Spinner.module.css';

export interface SpinnerProps {}

function Spinner({}: SpinnerProps) {
  return <div className={styles.wrapper}></div>;
}

export default Spinner;
