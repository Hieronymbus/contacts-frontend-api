import React from 'react'
import Header from './main-sections/Header';
import Main from './main-sections/Main.jsx';
import { useState } from 'react';

function App() {
  
  const [contactCount, setContactCount] = useState(null);
  const [contacts, setContacts] = useState([]);
  const [createModal, setCreateModal] = useState(false);
  const [errors, setErrors] = useState({});

  return (
    <div 
        id='body' 
        className='
                flex 
                flex-col 
                items-center 
                min-w-screen 
                min-h-screen 
                relative 
                bg-slate-950
                md:px-10'
    >
      <Header 
        setContactCount={setContactCount}     
        setCreateModal={setCreateModal} 
        createModal={createModal} 
      />
      <Main 
        setContactCount={setContactCount} 
        contactCount={contactCount} 
        setContacts={setContacts} 
        contacts={contacts} 
        createModal={createModal}
        setCreateModal={setCreateModal}
        errors={errors}
        setErrors={setErrors}  
        />
    </div>
  );
};

export default App
