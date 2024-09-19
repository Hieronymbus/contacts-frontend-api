import React, { useState } from "react";
import CreateContactForm from "../components/CreateContactForm.jsx";


const Header = ({ setContactCount }) => {


  const [isModalDisplayed, setIsModalDisplayed] = useState(false);

  function handleDisplayModal() {
    setIsModalDisplayed(true);
  }

  function handleCloseModal() {
    setIsModalDisplayed(false);
  }

  const displayModal = isModalDisplayed ? (
      <CreateContactForm onHandleCloseModal={handleCloseModal} setContactCount={setContactCount} />
  ) : (
      <button className="text-base border-none rounded text-white bg-gray-400 hover:bg-gray-300 p-2.5" onClick={handleDisplayModal}>Create Contact</button>
  );

  return (
    <>
      <header className="text-center mb-5">
        <h1 className="text-5xl m-2">Contacts</h1>
        {displayModal}
      </header>
    </>
  );
};

export default Header;
