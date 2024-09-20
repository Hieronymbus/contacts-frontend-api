import React, { useState } from "react";
import CreateContactForm from "./CreateModal.jsx";


const Header = ({  setState }) => {


  function handleDisplayModal() {
    setState(true);
  }

  return (
    <>

      <header className="flex justify-between items-center">
        <h1 className="text-5xl m-2">Contacts</h1>
        <button className="w-1/3 h-14 border-2 m-2 " onClick={handleDisplayModal}>
          Create Contact
        </button>
      </header>

    </>
  );
};

export default Header;
