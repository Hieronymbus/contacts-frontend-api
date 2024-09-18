import React from 'react';

function ModalCreateInput(props) {


    return (
      <div className='modal-input-form-group'>
        <label htmlFor={props.id}>{props.label}</label>  
        <input onChange={(e) => props.setValue(e.target.value)} type={props.type} id={props.id} name={props.id} />
      </div>
    )
}

export default ModalCreateInput;