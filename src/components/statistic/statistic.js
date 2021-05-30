import React from 'react';
import PropTypes from 'prop-types';
import StatItem from './statistic-item';
import styles from './statistic.module.css';

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}

    <ul className={styles.list}>
      {stats.map(({ id, label, percentage }) => (
        <StatItem
          key={id}
          label={label}
          percentage={percentage}
          bg={{ backgroundColor: randomColor() }}
        />
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ).isRequired,
};

function randomColor() {
  return `rgb(${Math.round(Math.random() * 255)}, ${Math.round(
    Math.random() * 255,
  )}, ${Math.round(Math.random() * 255)})`;
}

export default Statistics;
