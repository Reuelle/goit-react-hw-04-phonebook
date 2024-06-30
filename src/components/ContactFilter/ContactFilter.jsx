import PropTypes from 'prop-types';

import styles from './ContactFilter.module.css';

const PhonebooksFilter = ({ handleChange }) => {
  return (
    <div>
      <h2>Contacts</h2>
      <div className={styles.formGroup}>
        <label className={styles.text}>Find contacts by name</label>
        <input className={styles.input} name="filter" onChange={handleChange} />
      </div>
    </div>
  );
};

export default PhonebooksFilter;

PhonebooksFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
