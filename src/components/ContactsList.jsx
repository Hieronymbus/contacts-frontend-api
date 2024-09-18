import React from 'react'
import { useState,useEffect } from 'react'
import ContactCard from './ContactCard'

const ContactsList = ({ contactCount, setContactCount }) => {
  
  const [contacts, setContacts] = useState([]);
  const [contactClicked, setContactClicked] = useState({
    isClicked: false,
    contactId: ""
  }
  ); 

  async function getContacts () {
    const response = await fetch("http://localhost:3000/contacts")
    const data = await response.json()
    setContacts(data)
    setContactCount(contacts.length)
  };

  useEffect(()=> {
    getContacts()
  },[contactCount]);

  const handleCardClick = (id) => {
    setContactClicked({
      isClicked:true,
      contactId: id
    })
    
  }
  const handleCardClose = (id) => {
    setContactClicked({
      isClicked:false,
      contactId: id
    })
    setContactCount(prev => prev)
  }

  
  return (

    <div className='w-screen h-screen flex flex-col justify-center items-center '>
      {contacts.map((contact, index) => {

        return (
            <div 
              onClick={() => handleCardClick(index)}
              className='p-2 my-2 w-11/12 h-40 flex flex-col items-center border-solid border-2 border-indigo-600 text-4xl' 
              key={index}
            >
              <p>{contact.userName}</p>
              <p>{contact.dob}</p>
            </div> 
          )
      })}

      {contactClicked.isClicked && 
        <ContactCard 
          contact={contacts[contactClicked.contactId]}
          handleCardClose={handleCardClose}
          setContactCount={setContactCount}
        />
      }
      
    </div>


  )
}

export default ContactsList