import React from 'react'
import Header from './main-sections/Header';
import Main from './main-sections/Main.jsx';
import { useState, useEffect } from 'react';

function App() {
  
  const [contactCount, setContactCount] = useState(null);
  const [contacts, setContacts] = useState([]);
  const [isCreateModal, setIsCreateModal] = useState(false);
  const [isEditModal, setIsEditModal] = useState(false);
  const [isCardModal, setIsCardModal] = useState(false);
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
                bg-slate-950'
    >
      <Header 
        setContactCount={setContactCount}     
        setState={setIsCreateModal} 
        state={isCreateModal} 
      />
      <Main 
        setContactCount={setContactCount} 
        contactCount={contactCount} 
        setContacts={setContacts} 
        contacts={contacts} 
        cardModal={isCardModal}
        setIsCardModal={setIsCardModal}
        createModal={isCreateModal} 
        setCreateModal={setIsCreateModal} 
        editModal={isEditModal} 
        setEditModal={setIsEditModal}
        errors={errors}
        setErrors={setErrors}  
        />
    </div>
  );
};

export default App
