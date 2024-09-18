import React from 'react'
import Header from './components/Header';
import ContactsList from './components/ContactsList';
import { useState } from 'react';




function App() {
  
  const [contactCount, setContactCount] = useState(null)

  return (
    <>

      <Header setContactCount={setContactCount} contactCount={contactCount}/>
      <ContactsList setContactCount={setContactCount} contactCount={contactCount}/>

    </>
  )
}

export default App
