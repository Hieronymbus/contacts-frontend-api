import React, { useState } from 'react';
import CreateContactForm from './CreateContactForm.jsx';

const Header = ({  setContactCount }) => {

  const [isModalDisplayed, setIsModalDisplayed] = useState(false);

  function handleDisplayModal() {
    setIsModalDisplayed(true);
  }

  function handleCloseModal() {
    setIsModalDisplayed(false);
  }

  const noModal = (
    <button className="w-1/3 h-14 border-2 m-2 " onClick={handleDisplayModal}>Create Contact</button>
  )
  
  return (
    <>
    <header className="flex justify-between items-center">
      <h1 className="text-5xl m-2">Contacts</h1>
      {isModalDisplayed ? <CreateContactForm onHandleCloseModal={handleCloseModal} setContactCount={setContactCount}/> : noModal}
    </header>
    </>
  )
}

export default Header