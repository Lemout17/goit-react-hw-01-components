import React from 'react';
import PropTypes from 'prop-types';
import TransactionItem from './transaction-item';
import './transaction-history.css';

const TransactionHistory = ({ items }) => (
  <table className="transaction-history">
    <thead>
      <tr className="tr-title">
        <th className="th-label">Type</th>
        <th className="th-label">Amount</th>
        <th className="th-label">Currency</th>
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
