import PropTypes from 'prop-types';
// import { Transaction } from './Transaction';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td style={{ textTransform: 'capitalize' }}>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>

          // <Transaction
          //   key={id}
          //   type={type}
          //   amount={amount}
          //   currency={currency}
          // />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
};
