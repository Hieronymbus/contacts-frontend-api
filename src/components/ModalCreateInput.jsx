import React from 'react';

function ModalCreateInput(props) {


    return (
      <div className='w-full flex flex-col justify-center gap-2'>
        <label htmlFor={props.id}>{props.label}</label>  

        <input className="p-2 border-2 border-stone-700 rounded-lg" onChange={(e) => props.setValue(e.target.value)} type={props.type} id={props.id} name={props.id} />

      </div>
    )
}

export default ModalCreateInput;