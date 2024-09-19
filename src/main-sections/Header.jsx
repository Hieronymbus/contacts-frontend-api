import React, { useState } from "react";
import CreateContactForm from "../components/CreateContactForm.jsx";


const Header = ({ setContactCount, setIsGlobalModal, isGlobalModal }) => {


  const [isCreateModalDisplayed, setIsCreateModalDisplayed] = useState(false);

  function handleDisplayModal() {
    setIsCreateModalDisplayed(true);  
  }

  function handleCloseModal() {
    setIsCreateModalDisplayed(false);
  }

  const headerContent = isCreateModalDisplayed ? (
      <CreateContactForm onHandleCloseModal={handleCloseModal} setContactCount={setContactCount} />
  ) : (
    <div className={isGlobalModal ? 'hidden' : ''}> {/* remove element if a modal is being displayed */}
      <h1 className="text-5xl m-2">Contacts</h1>
      <button className="text-base border-none rounded text-white bg-gray-400 hover:bg-gray-300 p-2.5" onClick={handleDisplayModal}>Create Contact</button>
    </div>
  );

  return (
      <header className="text-center mb-5 relative">
        {headerContent}
      </header>
  );
};

export default Header;
