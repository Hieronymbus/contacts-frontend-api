import React from 'react';
import { useState, useEffect } from 'react';
import CardModal from './CardModal.jsx';

const ContactsList = (
  { 
    contactCount, 
    setContactCount, 
    setContacts,
    contacts, 
    setErrors,
    errors,
    image
  }) => {
  
  const [editModal, setEditModal] = useState(false);
  const [contactClicked, setContactClicked] = useState({
    isClicked: false,
    index: ""
  }); 

  useEffect(()=> {
    getContacts();
  },[contactCount]);

  async function getContacts () {

    const response = await fetch("http://localhost:3000/contacts");
    const data = await response.json();
    
    setContacts(data);
    setContactCount(contacts.length);

    // console.log('DATA ', await data);
  };

  const handleCardClick = (index) => {
    setContactClicked({
      isClicked: true,
      index: index 
    });
  };

  const handleCardClose = (index) => {
    setContactClicked({
      isClicked: false,
      index: index
    });
    setContactCount(prev => prev);
  };

  const border = 'border border-solid border-gray-500 rounded p-2.5 rounded';
  
  return (

    <div className='flex flex-col justify-start relative'>
      {contacts.map((contact, index) => {
            
        return (

          <div 
            onClick={() => handleCardClick(index)}
            className={`${border} text-xl flex justify-center items-center w-full border-none rounded mb-5 bg-gray-300`}
            key={contact.id}
          >
            <div id='list-col-1' className='flex justify-center w-1/2'>
              <img src={image} className='w-full rounded-full aspect-square' />
            </div>
            <div id='list-col-2' className='w-10/12 pl-5 text-base'>
              <p>{contact.firstName} {contact.lastName}</p>
              <p>{contact.dob}</p>
              <p>{contact.event}</p>
            </div>
          </div> 
          )
      })}

      {contactClicked.isClicked && 
        <CardModal 
          contact={contacts[contactClicked.index]}
          onHandleCardClose={handleCardClose}
          setContactCount={setContactCount}
          contacts={contacts}
          setEditModal={setEditModal}
          editModal={editModal}
          setErrors={setErrors}
          errors={errors}
        />
      }
    </div>


  )
}

export default ContactsList