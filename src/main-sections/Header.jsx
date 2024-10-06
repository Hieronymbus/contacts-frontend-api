import React from "react";

const Header = ({ setCreateModal, createModal }) => {

  function handleDisplayModal() {

    setCreateModal(true);
    console.log(createModal);
  }

  return (
      <header className="text-center mb-5 relative md:w-full">
        <div className='md:flex md:justify-between items-center'>
          <h1 className="text-5xl m-2 text-white my-10">Contacts</h1>
          <button className="
                            text-base border-none rounded 
                            text-white bg-gray-400 
                            hover:bg-gray-300 p-2.5
                            " 
            onClick={handleDisplayModal}
          >
              Create Contact
          </button>
        </div>
      </header>
  );
};

export default Header;
