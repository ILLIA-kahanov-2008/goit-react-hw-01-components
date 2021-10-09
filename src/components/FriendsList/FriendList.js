import styles from './FriendList.module.css';
import { FriendListItem } from './FriendListItem';

const FriendList = ({ friends }) => {
  console.log(friends);
  return (
    <ul className={styles.friendsList}>
      {friends.map(({ avatar, name, id, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          spanClassName={isOnline ? styles.onlineStatus : styles.offlineStatus}
        />
      ))}
    </ul>
  );
};

export default FriendList;
