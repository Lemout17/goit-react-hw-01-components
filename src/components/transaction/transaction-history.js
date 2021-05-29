import React from "react"
import PropTypes from "prop-types"
import TransactionItem from "./transaction-item"

const TransactionHistory = ({ items }) => (
  <table className="transaction-history">
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
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
)

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default TransactionHistory
