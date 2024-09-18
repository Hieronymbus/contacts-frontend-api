import React from 'react'
import Header from './components/Header';
import ContactsList from './components/ContactsList';
import { useState } from 'react';




function App() {
  
  const [contactCount, setContactCount] = useState(null);
  const [contacts, setContacts] = useState([]);

  return (
    <>

      <Header setContactCount={setContactCount} />
      <ContactsList 
        setContactCount={setContactCount} 
        contactCount={contactCount} 
        setContacts={setContacts}  
        contacts={contacts}
      />

    </>
  )
}

export default App
