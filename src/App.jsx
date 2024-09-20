import React from 'react'
import Header from './components/Header';
import ContactsList from './components/ContactsList';
import { useState } from 'react';
import CreateModal from './components/CreateModal';

function App() {
  
  const [contactCount, setContactCount] = useState(null);
  const [contacts, setContacts] = useState([]);
  const [isCreateModal, setIsCreateModal] = useState(false);
  // const [isCreateModal, setIsCreateModal] = useState(false);
  // const [isCardModal, setIsCardModal] = useState(false);

  function handleCloseModal() {
    setIsCreateModal(false);
    console.log(contactCount);
  }

  return (
    <>
      {isCreateModal && <CreateModal onHandleCloseModal={handleCloseModal} setContactCount={setContactCount} />}
      <Header setState={setIsCreateModal} />
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
