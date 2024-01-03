import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';

export class App extends Component {
  state = {
    contacts: [{ id: 'id-1', name: 'Rosie Simpson' }],
  };
  // handleChange = event => {
  //   const { name, value } = event.currentTarget;
  //      this.setState({ [name]: value });
  // };
  // handleSubmit = event => {
  //   event.preventDefault();
  //   // console.log(this.state.name);
  //   const contact = {
  //     id: 'id-' + nanoid(),
  //     name: this.state.name,
  //   };
  //   console.log(contact);
  //   this.setState(prevState => ({
  //     contacts: [...prevState.contacts, contact],
  //   }));
  //   console.log(this.state);
  //   this.setState({ name: '' });
  // };
  addContact = name => {
    const contact = {
      id: 'id-' + nanoid(),
      name,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
    this.setState({ name: '' });
  };
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}
