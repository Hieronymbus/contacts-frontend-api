
import { useState } from 'react';
import CreateContactForm from './components/CreateContactForm.jsx';
import Header from './components/Header';
import ContactsList from './components/ContactsList';




function App() {
  

  return (
    <>

     <CreateContactForm />

      <Header />
      <ContactsList />

    </>
  )
}

export default App
