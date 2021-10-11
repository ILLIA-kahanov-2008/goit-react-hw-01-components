import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendsList}>
      {friends.map(({ avatar, name, id, isOnline }) => (
        <li className={styles.item} key={id}>
          <span
            className={isOnline ? styles.onlineStatus : styles.offlineStatus}
          ></span>
          <img className={styles.avatar} src={avatar} alt={name} width="75" />
          <p className="name">{name}</p>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};
