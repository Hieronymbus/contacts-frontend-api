import React, { useState } from "react";
import FormModal from "./FormModal";

const CardModal = (
  { 
    onHandleCardClose, 
    contact, 
    contacts, 
    setContactCount,
    setErrors,
    errors,
    image
  }) => {

    const [editModal, setEditModal] = useState(false);
    
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
            <FormModal 
              contact={contact} 
              setContactCount={setContactCount} 
              setEditModal={setEditModal} 
              editModal={editModal} 
              setErrors={setErrors}
              errors={errors}
              image={image}
            /> 
          :       
            <div className={`fixed w-80 max-h-fit my-auto mx-auto bg-gray-100 rounded shadow-xl left-0 right-0 top-0`}>
              <div>
                <form className="flex justify-end relative">
                  <button className='m-2 absolute left-2' onClick={handleCloseModal}>X</button>
                  <button className="m-2" onClick={handleEditContact}>Edit</button>
                  <button className="m-2" onClick={handleDeleteContact}>Delete</button>
                </form>

                <div className="w-full min-h-80 flex justify-center items-center p-5">
                  <img src={contact.image} alt="Profile Pic" className="rounded-full aspect-square" onClick={onHandleCardClose} />
                </div>
                {/* place the stragglers within a div to make future styling easier */}
                <div className='p-5'>
                  <p className="font-bold text-3xl text-center">{contact.firstName} {contact.lastName}</p>
                  <p className="text-center">{contact.email}</p>
                  <p className="text-al">Phone number</p>
                  <p className="mb-2 text-slate-500">{contact.phoneNumber}</p>
                  <p className="text-xl">Event</p>
                  <p className="mb-2 text-slate-500">{contact.event}</p>
                  <p className="text-xl">Birthday</p>
                  <p className="mb-2 text-slate-500">{contact.dob}</p>
                </div>
              </div>
            </div>
        }
      </>
    );
};

export default CardModal;
