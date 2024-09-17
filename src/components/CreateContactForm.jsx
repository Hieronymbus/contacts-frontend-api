import React from 'react';
import './createContact.css';
import ModalCreateInput from './ModalCreateInput.jsx';

async function handleSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);

  const response = await fetch('http://localhost:3000/contacts', {
    method: "POST",
    body: formData
  });

  let formObj = Object.fromEntries(formData);

  console.log(formObj);
}

const CreateContactForm = () => {

  return (
    <div className='modal-body'>
      <div className='modal-header'>
        <h2>Create New Contact</h2>
      </div>
      <form className='modal-form' onSubmit={handleSubmit}>
        <div className='modal-file-form'>
          <div className='custom-file'>
            <input type='file' className='custom-input' id='modal-file-input' />
            <label htmlFor='modal-file-input' className='custom-input-label'>Choose file</label>
          </div>
          {/* Place these components within another component? */}
          <ModalCreateInput id='firstName' type='text' label='First name' />
          <ModalCreateInput id='lastName' type='text' label='Last name' />
          <ModalCreateInput id='userName' type='text' label='User name' />
          <ModalCreateInput id='email' type='text' label='Email' />
          <ModalCreateInput id='dob' type='text' label='Birthday' />
          <ModalCreateInput id='event' type='text' label='Event' />
        </div>
        <div className='modal-footer'>
          <button className='form-action-button'>Cancel</button>
          <button className='form-action-button' type='submit'>submit</button>
        </div>
      </form>
    </div>
  )
}

export default CreateContactForm