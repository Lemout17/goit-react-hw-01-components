import React from "react"
import PropTypes from "prop-types"

const FriendItem = ({ avatar, name, status }) => (
  <li className="item">
    <span className="status">{status}</span>
    <img
      className="avatar"
      src={avatar}
      alt={name}
      width="48"
    />
    <p className="name">{name}</p>
  </li>
)

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
}

export default FriendItem
