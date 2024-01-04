import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import css from '../components/App.module.css';

export class App extends Component {
  state = {
    contacts: [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' }],
    filter: '',
  };

  isDublicateName(name) {
    const normalizedName = name.toLowerCase();
    const { contacts } = this.state;
    const dublicateName = contacts.find(item => {
      const normalizedCurrentName = item.name.toLowerCase();
      return normalizedName === normalizedCurrentName;
    });
    return Boolean(dublicateName);
  }

  addContact = (name, number) => {
    if (this.isDublicateName(name)) {
      console.log(name);
      return alert(`${name} is alredy in contacts`);
    }

    const contact = {
      id: 'id-' + nanoid(),
      name,
      number,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  deleteContact = id => {
    this.setState(({ contacts }) => {
      const newContact = contacts.filter(item => item.id !== id);
      return { contacts: newContact };
    });
  };

  changeFilter = event => {
    this.setState({
      filter: event.target.value,
    });
  };

  getFilterContacts() {
    const { filter, contacts } = this.state;
    if (!filter) {
      return contacts;
    }

    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(({ name }) => {
      const normalizedName = name.toLowerCase();
      return normalizedName.includes(normalizedFilter);
    });
    return filteredContacts;
  }

  render() {
    const contactsList = this.getFilterContacts();
    const { addContact, changeFilter, deleteContact } = this;

    return (
      <div className={css.box}>
        <div>
          <h1 className={css.title}>Phonebook</h1>
          <ContactForm onSubmit={addContact} />
        </div>
        <div className={css.boxContacts}>
          <p>Find contacts by name</p>
          <input
            type="text"
            name="filter"
            value={this.state.filter}
            onChange={changeFilter}
            required
          />
          <h2 className={css.subtitle}>Contacts</h2>
          <ContactList contacts={contactsList} deleteContact={deleteContact} />
        </div>
      </div>
    );
  }
}
