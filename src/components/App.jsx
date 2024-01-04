import { Component } from 'react';

import { SectionContactsBook } from './SectionContactsBook';
import { FormToAddContact } from './FormToAddContact';
import { ContactsList } from './ContactsList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  handleSubmit = e => {
    console.log(this.state);
    e.preventDefault();
    const { name, number } = e.currentTarget;
    this.setState(({ contacts }) => ({
      contacts: [...contacts, `${name.value} ${number.value}`],
      filter: '',
      name: `${name.value}`,
      number: `${number.value}`,
    }));
  };

  render() {
    return (
      <SectionContactsBook>
        <FormToAddContact onSubmit={this.handleSubmit} />
        <ContactsList items={this.state.contacts} />
      </SectionContactsBook>
    );
  }
}
