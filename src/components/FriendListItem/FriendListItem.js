import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ imgSrc, friendName, networkStatus }) => {
  return (
    <li className={styles.item}>
      <span
        className={networkStatus ? styles.onlineStatus : styles.offlineStatus}
      ></span>
      <img className={styles.avatar} src={imgSrc} alt={friendName} width="75" />
      <p className="name">{friendName}</p>
    </li>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  friendName: PropTypes.string.isRequired,
  networkStatus: PropTypes.bool.isRequired,
};
