import React from 'react';
import ContactsList from '../components/ContactsList.jsx';

function Main({ setContactCount, contactCount, setContacts, contacts }) {
    return (
        <main className='max-w-96'>
            <ContactsList 
                setContactCount={setContactCount} 
                contactCount={contactCount} 
                setContacts={setContacts}  
                contacts={contacts}
            />
        </main>
    );
};

export default Main;