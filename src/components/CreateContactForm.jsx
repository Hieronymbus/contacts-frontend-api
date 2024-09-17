import React from 'react';
import './createContact.css';

async function handleSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  
  const response = await fetch('http://localhost:3000/contacts', {
    method: "POST",
    body: formData
  });

  console.log(await response.json());
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
          <div className='modal-input-form-group'>
            <label htmlFor='first-name'>First Name</label>  
            <input type='text' id='first-name' name='firstName' />
          </div>
          <div className='modal-input-form-group'>
            <label htmlFor='last-name'>Last Name</label>
            <input type='text' id='last-name' name='lastName' />
          </div>
          <div className='modal-input-form-group'>
            <label htmlFor='user-name'>User Name</label>
            <input type='text' id='user-name' name='userName' />
          </div>
          <div className='modal-input-form-group'>
            <label htmlFor='email'>Email</label>
            <input type='text' id='email' name='email' />
          </div>
          <div className='modal-input-form-group'>
            <label htmlFor='dob'>Birthday</label>
            <input type='text' id='dob' name='dob' />
          </div>
          <div className='modal-input-form-group'>
            <label htmlFor='event' >Event</label>
            <input type='text' id='event' name='event' />
          </div>
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