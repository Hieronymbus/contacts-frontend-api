import React from "react";
import EditModal from "./EditModal";

const CardModal = ({ setEditModal, onHandleCardClose, contact, contacts, editModal }) => {
  
  const handleDeleteContact = async () => {
    const response = await fetch (`http://localhost:3000/contacts/${contact.id}`,{
      method: "DELETE"
    });

    onHandleCardClose();
    setContactCount(prev => prev - 1);
  };

  const handleEditContact = (e) => {
    e.preventDefault();

    setEditModal(true);
  };

  const handleCloseModal = (e) => {
    onHandleCardClose();
  };
  
  return (
    <>
      {
        editModal ? 
          <EditModal contact={contact} contacts={contacts} setEditModal={setEditModal} isEditModal={editModal} /> 
        :       
          <div className={`fixed w-80 max-h-fit my-auto mx-auto bg-gray-100 rounded shadow-xl left-0 right-0 top-0`}>
            <div>
              <form className="flex justify-end relative">
                <button className='m-2 absolute left-2' onClick={handleCloseModal}>X</button>
                <button className="m-2" onClick={handleEditContact}>Edit</button>
                <button className="m-2" onClick={handleDeleteContact}>Delete</button>
              </form>

              <div className="w-full min-h-80 flex justify-center items-center">
                <img src={contact.image} alt="Profile Pic" className="rounded-full" onClick={onHandleCardClose} />
              </div>
              {/* place the stragglers within a div to make future styling easier */}
              <div className='p-5'>
                <p className="font-bold">{contact.firstName} {contact.lastName}</p>
                <p>Email Address</p>
                <p>{contact.email}</p>
                <p>Event</p>
                <p>{contact.event}</p>
                <p>Birthday</p>
                <p>{contact.dob}</p>
              </div>
            </div>
          </div>
      }
    </>
  );
};

export default CardModal;
