import React from 'react'
import Header from './main-sections/Header';
import Main from './main-sections/Main.jsx';
import { useState } from 'react';




function App() {
  
  const [contactCount, setContactCount] = useState(null);
  const [contacts, setContacts] = useState([]);

  return (
    <div id='body' className='flex flex-col items-center min-w-screen relative'>
      <Header setContactCount={setContactCount} />
      <Main setContactCount={setContactCount} contactCount={contactCount} contacts={contacts} setContacts={setContacts} />
    </div>
  )
}

export default App
