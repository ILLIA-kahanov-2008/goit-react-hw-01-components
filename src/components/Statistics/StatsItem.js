import PropTypes from 'prop-types';
import randomColor from 'randomcolor';
import styles from './Statistics.module.css';

export function StatsItem({ label, percentage, numberOfItems }) {
  const bgColor = randomColor();
  const numberItems = 100 / numberOfItems;
  return (
    <li
      className={styles.stats__item}
      style={{ backgroundColor: bgColor, flexBasis: numberItems + '%' }}
    >
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
}

StatsItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
