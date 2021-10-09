import PropTypes from 'prop-types';

export function Transaction({ type, amount, currency }) {
  const capitalizedType = type[0].toUpperCase() + type.slice(1);
  return (
    <tr>
      <td>{capitalizedType}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}

Transaction.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};
