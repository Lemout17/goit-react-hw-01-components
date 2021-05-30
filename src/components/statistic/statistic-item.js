import React from 'react';
import PropTypes from 'prop-types';
import './statistic-item.css';

const StatItem = ({ label, percentage, bg }) => (
  <li className="stat-item" style={bg}>
    <span className="stat-label">{label}</span>
    <span className="percentage">{percentage}%</span>
  </li>
);

StatItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  bg: PropTypes.shape({}),
};

export default StatItem;
