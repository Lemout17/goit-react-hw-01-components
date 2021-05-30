import React from 'react';
import PropTypes from 'prop-types';
import './friend-list-item.css';

const FriendItem = ({ avatar, name, status }) => (
  <li className="friend-item">
    <span className={status ? 'online' : 'offline'}></span>
    <img className="avatar" src={avatar} alt={name} width="48" />
    <p className="friend-name">{name}</p>
  </li>
);
FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};

export default FriendItem;
