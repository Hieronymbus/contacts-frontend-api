import React from 'react';
import './CreateContact.css';

function ModalCreateInput(props) {
    return (
      <div className='modal-input-form-group'>
        <label htmlFor={props.id}>{props.label}</label>  
        <input type={props.type} id={props.id} name={props.id} />
      </div>
    )
}

export default ModalCreateInput;