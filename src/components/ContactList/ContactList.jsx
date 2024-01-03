import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = ({ contacts }) => {
  return (
    <ol>
      {contacts.map(({ id, name }) => (
        <ContactItem key={id} name={name} />
      ))}
    </ol>
  );
};
