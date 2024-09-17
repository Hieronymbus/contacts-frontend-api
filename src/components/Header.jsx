import React, { useState } from 'react';
import CreateContactForm from './CreateContactForm.jsx';

const Header = () => {

  const [isModalDisplayed, setIsModalDisplayed] = useState(false);

  function handleDisplayModal() {
    setIsModalDisplayed(true);
  }

  function handleCloseModal() {
    setIsModalDisplayed(false);
  }

  const noModal = (
    <button onClick={handleDisplayModal}>Create Contact</button>
  )
  
  return (
    <header>
      {isModalDisplayed ? <CreateContactForm onHandleCloseModal={handleCloseModal} /> : noModal}
    </header>
    
  )
}

export default Header