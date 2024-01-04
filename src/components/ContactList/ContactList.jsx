export const ContactList = ({ contacts, deleteContact }) => {
  const contact = contacts.map(({ id, name, number }) => (
    <li key={id}>
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
