import React, { useState } from "react";
import CreateContactForm from "./CreateContactForm.jsx";

const Header = () => {
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);

  function handleDisplayModal() {
    setIsModalDisplayed(true);
  }

  function handleCloseModal() {
    setIsModalDisplayed(false);
  }

  const noModal = (
    <button className="w-1/3 h-14 border-2 m-2 " onClick={handleDisplayModal}>
      Create Contact
    </button>
  );

  return (
    <>
      <header className="flex justify-between items-center">
        <h1 className="text-5xl m-2">Contacts</h1>
        {noModal}
      </header>

      {isModalDisplayed && (
        <div
          className="m-2 p-4 bg-white  flex flex-col 
    justify-center items-center gap-4 text-4xl border-2 border-stone-950 rounded-xl"
        >
          <CreateContactForm onHandleCloseModal={handleCloseModal} />
        </div>
      )}
    </>
  );
};

export default Header;
