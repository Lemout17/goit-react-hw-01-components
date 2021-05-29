import React from "react"
import PropTypes from "prop-types"

const StatItem = ({ label, percentage, bg }) => (
  <li className="item" style={bg}>
    <span className="label">{label}</span>
    <span className="percentage">{percentage}%</span>
  </li>
)

StatItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  bg: PropTypes.shape({}),
}

export default StatItem
