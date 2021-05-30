import React from 'react';
import PropTypes from 'prop-types';
import TransactionItem from './transaction-item';
import styles from './transaction-history.module.css';

const TransactionHistory = ({ items }) => (
  <table className={styles['transaction-history']}>
    <thead>
      <tr className={styles.title}>
        <th className={styles.label}>Type</th>
        <th className={styles.label}>Amount</th>
        <th className={styles.label}>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <TransactionItem
          key={id}
          type={type}
          amount={amount}
          currency={currency}
        />
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;
