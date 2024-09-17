import React from 'react'
import { useState } from 'react'

function CreateContact() {
  return (
    <form>  
      <h3> Create New Contact </h3>
      <fieldset>
        <div className='file-container'>
          <label htmlFor='file-input'>User image</label>
          <input type='file' id='file-input'/> 
        </div>
        <label htmlFor='first-name'>First name</label>
        <input type='text' id='first-name' />
        <label htmlFor='last-name'>Last name</label>
        <input type='text' id='last-name' />
        <label htmlFor='user-name'>User name</label>
        <input type='text' id='user-name' />
        <label htmlFor='email'>Email</label>
        <input type='text' id='email' />
        <label htmlFor='birthday'>Birthday</label>
        <input type='text' id='birthday' /> 
        <label htmlFor='event'>Event</label>
        <input type='text' id='event' />
      </fieldset>
    </form>
  )
}

export default CreateContact