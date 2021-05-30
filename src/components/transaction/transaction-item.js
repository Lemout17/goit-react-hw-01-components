import React from 'react';
import PropTypes from 'prop-types';
import './transaction-item.css';

const TransactionItem = ({ type, amount, currency }) => (
  <tr className="tr-item">
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </tr>
);

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionItem;
