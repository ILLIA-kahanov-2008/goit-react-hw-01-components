import PropTypes from 'prop-types';
import styles from './Profile.module.css';

export default function Profile(props) {
  const { name, tag, location, avatar, stats } = props;
  console.log(props);
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt={name} className={styles.avatar} width="150" />
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className="stats">
        <li className={styles.stats__item}>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{stats.followers}</span>
        </li>
        <li className={styles.stats__item}>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{stats.views}</span>
        </li>
        <li className={styles.stats__item}>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.defaultProps = {
  avatar: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};
