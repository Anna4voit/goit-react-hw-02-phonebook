import css from './ContactList.module.css';

export const ContactList = ({ contacts, deleteContact }) => {
  const contact = contacts.map(({ id, name, number }) => (
    <li className={css.list} key={id}>
      <p>
        {name}: {number}
      </p>
      <button type="button" onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  ));
  return <ul>{contact}</ul>;
};
