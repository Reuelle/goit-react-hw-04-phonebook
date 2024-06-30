import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import useLocalStorage from './hooks/useLocalStorage';
import PhonebooksForm from './ContactForm/ContactForm';
import PhonebookList from './ContactList/ContactList';
import PhonebooksFilter from './ContactFilter/ContactFilter';
import styles from './Contact.module.css';

const Phonebooks = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  // Add a new contact
  const addContact = ({ name, number }) => {
    if (isDuplicate(name, number)) {
      alert(`${name}: ${number} already exists`);
      return false;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts((prevContacts) => [newContact, ...prevContacts]);
    return true;
  };

  // Remove a contact by id
  const removeContact = (id) => {
    setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
  };

  // Handle filter input change
  const handleFilter = ({ target }) => {
    setFilter(target.value);
  };

  // Check for duplicate contacts
  const isDuplicate = (name, number) => {
    const normalizedName = name.toLowerCase();
    const normalizedNumber = number.toLowerCase();
    return contacts.some(
      (contact) =>
        contact.name.toLowerCase() === normalizedName &&
        contact.number.toLowerCase() === normalizedNumber
    );
  };

  // Get filtered contacts based on the filter input
  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }

    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();
  const hasContacts = Boolean(filteredContacts.length);

  return (
    <div className={styles.wrapper}>
      <div className={styles.block}>
        <h1>Phonebook</h1>
        <PhonebooksForm onSubmit={addContact} />
      </div>
      <div className={styles.block}>
        <PhonebooksFilter handleChange={handleFilter} />
        {hasContacts ? (
          <PhonebookList removeContact={removeContact} contacts={filteredContacts} />
        ) : (
          <p>No contacts in list</p>
        )}
      </div>
    </div>
  );
};

export default Phonebooks;
