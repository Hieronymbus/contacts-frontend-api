import React from 'react'
import { useState,useEffect } from 'react'
import ContactCard from './ContactCard'

const ContactsList = ({ contactCount, setContactCount, setContacts, contacts }) => {
  
  const [contactClicked, setContactClicked] = useState({
    isClicked: false,
    contactId: ""
  }
  ); 

  async function getContacts () {
    const response = await fetch("http://localhost:3000/contacts");
    const data = await response.json();
    setContacts(data);
    setContactCount(contacts.length);
  };

  useEffect(()=> {
    getContacts()
  },[contactCount]);

  const handleCardClick = (id) => {
    setContactClicked({
      isClicked: true,
      index: id
    })
    
  }
  const handleCardClose = (id) => {
    setContactClicked({
      isClicked: false,
      index: id
    })
    setContactCount(prev => prev)
  }

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
                <img src={contact.image} className='w-full rounded-full' />
              </div>
              <div id='list-col-2' className='w-10/12 pl-5 text-base'>
                <p>User Name: {contact.userName}</p>
                <p>DOB: {contact.dob}</p>
                <p>Event: {contact.event}</p>
              </div>
            </div> 
          )
          
      })}

      {contactClicked.isClicked && 
        <ContactCard 
          contact={contacts[contactClicked.index]}
          handleCardClose={handleCardClose}
          setContactCount={setContactCount}
          contacts={contacts}
        />
      }
      
    </div>


  )
}

export default ContactsList