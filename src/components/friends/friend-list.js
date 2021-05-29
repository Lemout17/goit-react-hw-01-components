import React from "react"
import PropTypes from "prop-types"
import FriendItem from "./friend-list-item"

const FriendList = ({ friends }) => (
  <ul className="friend-list">
    {friends.map(({ avatar, name, isOnline, id }) => (
      <FriendItem
        key={id}
        avatar={avatar}
        name={name}
        status={isOnline}
      />
    ))}
  </ul>
)

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
}

export default FriendList
