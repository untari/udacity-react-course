import React, { Component } from 'react';
import ListContacts from './ListContacts';
import *as ContactsAPI from './utils/ContactsAPI';
import CreateContact from './CreateContact';

class App extends Component {
    state = {
       contacts: [],
       screen: 'create'
    };
    componentDidMount() {
        ContactsAPI.getAll()
        .then((contacts) => {
            this.setState(() => ({
                contacts
            }));
        });
    };
    removeContact = contact => {
        //method 1
//         this.setSate({
//             key: 'tyler'
//         })
        //method 2 functional state
       this.setState((currentState) => ({
            contacts: currentState.contacts.filter((c) => {
                return c.id !== contact.id
            })
       }))
        ContactsAPI.remove(contact)
    }
    render() {
        return (
        <div>
            {this.state.screen === 'list' && (
                <ListContacts 
                    contacts={this.state.contacts}
                    onDeleteContact={this.removeContact}
                    onNavigate = {() => {
                        this.setState(() => ({
                            screen: 'create'
                        }))
                    }}
                />
            )};
           {this.state.screen === 'create' && (
               <CreateContact />
            )}
        </div>
        );
    }
}

export default App;
