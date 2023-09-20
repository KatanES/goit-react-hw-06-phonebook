import { useDispatch, useSelector } from 'react-redux';
import { ContactFilter } from './ContactFilter';
import { getFilteredContacts } from 'redux/selectors';
import { deleteContact, resetDeletedContacts } from 'redux/contactsSlice';

export const FormList = ({}) => {
  const filteredContacts = useSelector(getFilteredContacts);
  console.log(filteredContacts);
  const dispatch = useDispatch();

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const resetChanges = () => {
    dispatch(resetDeletedContacts());
  };

  if (!Array.isArray(filteredContacts) || filteredContacts.length === 0) {
    console.log(filteredContacts);
    return null;
  }
  return (
    <div>
      <ContactFilter />
      <ul>
        {filteredContacts.map(({ name, number, id }) => (
          <li key={id}>
            <span>{name}:</span>
            <span>{number}</span>
            <button onClick={() => onDeleteContact(id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={resetChanges}>Reset</button>
    </div>
  );
};
