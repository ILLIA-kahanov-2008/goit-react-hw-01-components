import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

export const FriendListItem = ({ avatar, name, spanClassName }) => {
  return (
    <li className={styles.item}>
      <span className={spanClassName}></span>
      <img className={styles.avatar} src={avatar} alt={name} width="75" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string,
};
