import React from 'react';
import styles from '../styles/SkillCardStyle.module.css';

const SkillList = ({ src, skill, isAnimated }) => {
  return (
    <span className={`${styles.skillItem} ${isAnimated ? styles.animated : ''}`}>
      <img src={src} alt={`${skill} icon`} />
      <p>{skill}</p>
    </span>
  );
};

export default SkillList;
