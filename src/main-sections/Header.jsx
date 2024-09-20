import React from "react";

const Header = ({setState, state}) => {

  function handleDisplayModal(e) {
    e.preventDefault();

    setState(true)
  }

  return (
      <header className="text-center mb-5 relative">
        <div> {/* remove element if a modal is being displayed */}
          <h1 className="text-5xl m-2">Contacts</h1>
          <button className="
            text-base border-none rounded text-white bg-gray-400 
            hover:bg-gray-300 p-2.5" 
            onClick={handleDisplayModal}
            disabled={state}
            >
              Create Contact
            </button>
        </div>
      </header>
  );
};

export default Header;
