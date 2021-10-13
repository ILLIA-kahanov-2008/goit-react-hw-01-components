import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ imgSrc, friendName, key, networkStatus }) => {
  return (
    <li className={styles.item} key={key}>
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
  key: PropTypes.number.isRequired,
  networkStatus: PropTypes.bool.isRequired,
};
