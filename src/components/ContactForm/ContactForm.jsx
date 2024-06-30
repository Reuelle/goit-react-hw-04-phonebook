import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

const PhonebooksForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !number) {
      alert('Please fill in this field');
      return;
    }
    const result = onSubmit({ name, number });
    if (result) {
      setName('');
      setNumber('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label className={styles.text}>Name</label>
        <input
          className={styles.input}
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Enter name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.text}>Number</label>
        <input
          className={styles.input}
          name="number"
          value={number}
          onChange={handleChange}
          placeholder="Enter number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </div>
      <button className={styles.btn} type="submit">
        <strong>ADD CONTACT</strong>
      </button>
    </form>
  );
};

PhonebooksForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default PhonebooksForm;
