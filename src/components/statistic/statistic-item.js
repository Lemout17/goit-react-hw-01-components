import React from 'react';
import PropTypes from 'prop-types';
import styles from './statistic-item.module.css';

const StatItem = ({ label, percentage, bg }) => (
  <li className={styles.item} style={bg}>
    <span className={styles.label}>{label}</span>
    <span className={styles.percentage}>{percentage}%</span>
  </li>
);

StatItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  bg: PropTypes.shape({}),
};

export default StatItem;
