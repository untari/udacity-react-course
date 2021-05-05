import React, { Component } from 'react';

class ListContacs extends Component{
    render() {
        
        return(
            <ol className='contact-list'>
                {this.props.contacts.map((contact) => (
                    <li key={contact.id}>
                        {contact.name}
                    </li>
                ))}
            </ol>
        )
    }
}
export default ListContacs;
