import React from 'react';
function ModalCreateInput(props) {
    return (
      <div className='w-full flex flex-col justify-center gap-2'>
        <label htmlFor={props.id} className='text-gray-500 text-base self-start'>{props.label}</label>
        <input className="
          text-base text-gray-500 border-none py-2.5 
          px-2.5 rounded focus:shadow-custom-hsl 
          focus:shadow-gray-300 focus:outline-none" 
          onChange={(e) => props.setValue(e.target.value)} 
          type={props.type} 
          id={props.id} 
          name={props.id} 
        />
      </div>
    )
}
export default ModalCreateInput;