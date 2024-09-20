import React from "react";

const CardModal = ({ isEditModal, onHandleCardClose, contact }) => {
  
  const handleDeleteContact = async () => {
    const response = await fetch (`http://localhost:3000/contacts/${contact.id}`,{
      method: "DELETE"
    });

    onHandleCardClose();
    setContactCount(prev => prev - 1);
  };

  const handleEditContact = async () => {
    isEditModal(true);
    onHandleCardClose();
  };
  
  return (
    <div className={`fixed w-80 p-5 max-h-fit my-auto mx-auto bg-gray-500 left-0 right-0 top-0 bottom-0`}>
        <div>
          <form className="flex justify-end">
            <button className="m-2" onClick={handleEditContact}>Edit</button>
            <button className="m-2" onClick={handleDeleteContact}>Delete</button>
          </form>

          <div className="min-w-80 min-h-80 flex justify-center items-center">
            <img src={contact.image} alt="Profile Pic" className="rounded-full" onClick={onHandleCardClose} />
          </div>
          {/* place the stragglers within a div to make future styling easier */}
          <p className="font-bold">{contact.firstName} {contact.lastName}</p>
          <p>Email Address</p>
          <p>{contact.email}</p>
          <p>Event</p>
          <p>{contact.event}</p>
          <p>Birthday</p>
          <p>{contact.dob}</p>
        </div>
    </div>
  );
};

export default CardModal;
