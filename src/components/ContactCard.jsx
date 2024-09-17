import React from 'react'

const ContactCard = ({contact}) => {
  return (
    <div
      className='absolute z-10 bg-white h-3/4 w-5/6'
    >
      {  contact.id}
        {contact.name}
        {contact.email}
        {contact.phone}
        {contact.image}
        {contact.dob}
    </div>
  )
}

export default ContactCard