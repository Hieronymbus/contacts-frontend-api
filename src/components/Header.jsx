import React, { useState } from 'react';
import CreateContactForm from './CreateContactForm.jsx';

const Header = () => {

  const [isModalDisplayed, setIsModalDisplayed] = useState(false);

  function handleDisplayModal() {
    setIsModalDisplayed(true);
  }

  const noModal = (
    <button onClick={handleDisplayModal}>Create Contact</button>
  )
  
  return (
    <header>
      {isModalDisplayed ? <CreateContactForm /> : noModal}
    </header>
    
  )
}

export default Header