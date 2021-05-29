import React from "react"
import PropTypes from "prop-types"
import StatItem from "./statistic-item"

const Statistics = ({ title, stats }) => (
  <section className="statistics">
    {title && <h2 className="title">{title}</h2>}

    <ul className="stat-list">
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
)

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    })
  ).isRequired,
}

function randomColor() {
  return `rgb(${Math.round(
    Math.random() * 255
  )}, ${Math.round(Math.random() * 255)}, ${Math.round(
    Math.random() * 255
  )})`
}

export default Statistics
