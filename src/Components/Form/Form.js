import { Component } from 'react';
import shortid from 'shortid';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };
  nameId = shortid.generate();
  numberId = shortid.generate();

  resetFormInput() {
    this.setState({ name: '', number: '' });
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.resetFormInput();
  };
  hadleAddValue = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameId}>Name</label>
        <input
          id={this.nameId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={this.state.name}
          onChange={this.hadleAddValue}
        />
        <label htmlFor={this.numberId}>Number</label>
        <input
          id={this.numberId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={this.state.number}
          onChange={this.hadleAddValue}
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default Form;
