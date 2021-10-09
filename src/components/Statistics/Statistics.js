import PropTypes from 'prop-types';
import { StatsItem } from './StatsItem';
import styles from './Statistics.module.css';

export default function Statistics({ title, stats }) {
  const numberOfItems = stats.length;
  return (
    <section className={styles.statistics}>
      {{ title } && <h2 className={styles.title}>{title}</h2>}

      <ul className="stats">
        {stats.map(({ id, label, percentage }) => (
          <StatsItem
            key={id}
            label={label}
            percentage={percentage}
            numberOfItems={numberOfItems}
          />
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
};
