import React, { useState } from "react";
import EditContactForm from "./EditContactForm";

const ContactCard = ({ contact, handleCardClose, setContactCount, contacts }) => {
  
  const [renderEditForm,setRenderEditForm] = useState(false)
  
  const handleDeleteContact = async () => {

    const response = await fetch (`http://localhost:3000/contacts/${contact.id}`,{
      method: "DELETE"

    })

    handleCardClose()
    setContactCount(prev => prev - 1)
  };
  const handleEditContact = async () => {
    setRenderEditForm(true)
  }
  
  return (
    <div className="p-4 absolute z-10 bg-white w-11/12 flex flex-col 
    justify-center items-center gap-4 text-4xl border-2 border-stone-950 rounded-xl">

      {renderEditForm == true ? 
      <EditContactForm contact={contact} onHandlecloseModal={handleCardClose} setRenderEditForm={setRenderEditForm} setContactCount={setContactCount} contactsData={contacts} /> 
      :
      
      <>
    <div className="flex justify-end">
        <button className="m-2" onClick={handleEditContact}>Edit</button>
        <button className="m-2" onClick={handleDeleteContact}>Delete</button>
      </div>
      <div className="min-w-80 min-h-80 flex justify-center items-center">
        <img src={ contact.image} alt="Profile Pic" className="rounded-full " onClick={handleCardClose} />
      </div>
      <p className="font-bold">{contact.firstName} {contact.lastName}</p>
      <p>Email Address</p>
      <p>{contact.email}</p>
      <p>Event</p>
      <p>{contact.event}</p>
      <p>Birthday</p>
      <p>{contact.dob}</p>
      </>}
    </div>
  );
};

export default ContactCard;
