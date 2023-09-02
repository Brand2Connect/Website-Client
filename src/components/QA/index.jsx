import React from 'react';
import styles from './style.module.css';

export default function QA(props) {
  return (
<div className= {styles.qaStyle}>
    <div style = {{fontWeight:600,marginBottom:"0.7vh"}}>{props.title}</div>
    <div style = {{fontWeight:300,color:"gray"}}>{props.subtitle}</div>
</div>
  );
}
