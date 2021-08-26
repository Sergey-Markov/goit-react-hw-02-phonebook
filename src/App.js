import { Component } from 'react';
import shortid from 'shortid';
import './App.css';
import Contacts from './Components/Contacts/Contacts';
import Form from './Components/Form/Form';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addToDataContacts = data => {
    const newContact = {
      id: shortid.generate(),
      ...data,
    };
    console.log(newContact);
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <Form onSubmit={this.addToDataContacts} />
        <Contacts contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
