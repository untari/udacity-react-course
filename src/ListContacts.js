import React, { Component } from 'react';
import PropTypes from 'prop-types';

class  ListContacts extends Component {
    static propTypes = {
      contacts: PropTypes.array.isRequired,
      onDeleteContact: PropTypes.func.isRequired
    }
    state = {
        query: ''
    };
    updateQuery = e => {
        const query = e.target.value;
        this.setState(() => ({
            query: query.trim()
        }));
    };
    clearQuery = () => {
        this.setState(() => ({
            query:''
        }));
    };
    render() {
        const { query } = this.state
        const { contacts, onDeleteContact, onNavigate } = this.props
        
        const showingContacts = query === ''
        ? contacts : contacts.filter((c) => (
            c.name.toLowerCase().includes(query.toLowerCase())
        ))
        
        return (
            <div className="list-contacts">
                <div  className="list-contacts-top">
                    <input 
                        className='search-contacts'
                        type='text'
                        placeholder='Search Contacts'
                        value={query}
                        onChange={this.updateQuery}
                    />
                    <a
                    href="#create"
                    onClick={onNavigate}
                    className="add-contact"> 
                        Add Contact
                    </a>
                </div>
                
                {showingContacts.length !== contacts.length && (
                    <div className='showing-contacts'>
                        <span>Now showing {showingContacts.lenght} of {
                            contacts.lenght}
                        </span>
                        <button onClick={this.clearQuery}>Show all</button>
                    </div>
                )}
                <ol className="contact-list">
                    {showingContacts.map(contact => (
                        <li key={contact.id} className="contact-list-item">
                        <div
                            className="contact-avatar"
                            style={{
                            backgroundImage: `url(${contact.avatarURL})`
                            }}
                        />
                        <div className="contact-details">
                            <p>{contact.name}</p>
                            <p>{contact.handle}</p>
                        </div>
                        <button onClick={() => onDeleteContact(contact)}
                        className="contact-remove">Remove</button>
                        </li>
                    ))}
                </ol>
            </div>
        );
    }
}
export default ListContacts;
