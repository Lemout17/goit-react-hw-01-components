import React from 'react';
import PropTypes from 'prop-types';
import styles from './friend-list-item.module.css';

const FriendItem = ({ avatar, name, status }) => (
  <li className={styles.item}>
    <span className={status ? styles.online : styles.offline}></span>
    <img className={styles.avatar} src={avatar} alt={name} width="48" />
    <p className={styles.name}>{name}</p>
  </li>
);
FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};

export default FriendItem;
