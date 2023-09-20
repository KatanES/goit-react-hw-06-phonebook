import { createSelector } from '@reduxjs/toolkit';

export const getContacts = store => store.contacts.items;

export const getFilter = store => store.filter;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
