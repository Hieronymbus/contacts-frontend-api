import React from "react";

const ContactCard = ({ contact, handleCardClose }) => {
  return (
    <div className="p-4 absolute z-10 bg-white w-11/12 flex flex-col justify-center items-center gap-4 text-4xl border-2 border-stone-950 rounded-xl">
    <div className="min-w-80 min-h-80 flex justify-center items-center">
      <img src={ contact.image} alt="Profile Pic" className="rounded-full " onClick={handleCardClose}></img>
      </div>
      <p className="font-bold">{contact.firstName} {contact.lastName}</p>
      <p>Email Address</p>
      <p>{contact.email}</p>
      <p>Event</p>
      <p>{contact.event}</p>
      <p>Birthday</p>
      <p>{contact.dob}</p>
    </div>
  );
};

export default ContactCard;
