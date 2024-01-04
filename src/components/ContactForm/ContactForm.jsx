import { Component } from 'react';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  nameId = nanoid();
  phoneId = nanoid();

  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.name, this.state.number);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { handleSubmit, handleChange, nameId, phoneId } = this;
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor={nameId}>Name</label>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={handleChange}
          id={nameId}
          required
        />

        <label htmlFor={phoneId}>Number</label>
        <input
          type="tel"
          name="number"
          value={this.state.number}
          onChange={handleChange}
          id={phoneId}
          required
        />

        <button type="submit">Add contact</button>
      </form>
    );
  }
}
