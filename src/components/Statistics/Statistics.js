import PropTypes from 'prop-types';
import randomColor from 'randomcolor';
import styles from './Statistics.module.css';

export default function Statistics({ title, stats }) {
  const numberItems = 100 / stats.length;
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className="stats">
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className={styles.stats__item}
            style={{
              backgroundColor: randomColor(),
              flexBasis: numberItems + '%',
            }}
          >
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
