import React from 'react';
import { useState, useEffect } from 'react';
import CardModal from './CardModal.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faChartLine } from '@fortawesome/free-solid-svg-icons';

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

  function truncateText(text) {

    if (text.length > 16) {

      text = text.slice(0, 16) + ' ...';

      return text;
    };
  };

  useEffect(()=> {
    
    getContacts();
  },[contactCount]);

  async function getContacts () {

    const response = await fetch("http://localhost:3000/contacts");
    const data = await response.json();
    
    setContacts(data);
    setContactCount(contacts.length);
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

  const border = 'border border-solid border-gray-500 rounded';
  
  return (

    <div className='flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 relative'>

      {contacts.map((contact, index) => {
            
          const imageURL = contact.image;
          const everySecondContact = index % 2 === 0;

        return (

          <div 
            onClick={() => handleCardClick(index)}
            className={
                      `${border} text-xl flex justify-center items-center w-full
                        border-none rounded bg-gray-300 p-4`
            }
            key={contact.id}
          >
            <div id='list-col-1' className='flex justify-center align-start h-full w-1/2'>
              <img src={imageURL} className='w-full rounded aspect-square border border-slate-200 border-solid' />
            </div>
            <div id='list-col-2' className='w-10/12 pl-5 text-base flex flex-col justify-between h-full'>
              <p className='text-2xl mt-0 mb-2'>{contact.firstName} {contact.lastName}</p>
              <p className='flex items-center'><FontAwesomeIcon icon={faEnvelope} className='w-5  pr-2'/> {truncateText(contact.email)}</p>
              <p className='flex items-center'><FontAwesomeIcon icon={faPhone} className='w-5 pr-2'/>{contact.number}</p>
              <p className='flex items-center'><FontAwesomeIcon icon={faChartLine} className='w-5  pr-2'/> {contact.event}</p>
            </div>
          </div> 
        )
      })};

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
          image={image}
        />
      };
    </div>


  )
}

export default ContactsList