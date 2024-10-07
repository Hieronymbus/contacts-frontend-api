import React, { useState, useRef, useEffect } from "react";
import FormModal from "./FormModal";

const CardModal = (
  { 
    onHandleCardClose, 
    contact, 
    setContactCount,
    setErrors,
    errors,
    image
  }) => {

    const [editModal, setEditModal] = useState(false);

    const modalRef = useRef();

    useEffect(() => {

      function handleClickOutside(e) {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
          handleCloseModal();
        };
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

    window.addEventListener('resize', () => {
      const windowWidth = window.innerWidth;
      console.log(windowWidth);
    });
    
    const handleDeleteContact = async () => {
      const response = await fetch (`http://localhost:3000/contacts/${contact.id}`,{
        method: "DELETE"
      });

      onHandleCardClose();
      setContactCount(prev => prev - 1);
    };

    const handleEditContact = (e) => {

      e.preventDefault();

      setEditModal(true);
    };

    const handleCloseModal = (e) => {
      onHandleCardClose();
    };
    
    return (
      <>
        {
          editModal ? 
            <FormModal 
              contact={contact} 
              setContactCount={setContactCount} 
              setEditModal={setEditModal} 
              editModal={editModal} 
              setErrors={setErrors}
              errors={errors}
              image={image}
            /> 
          :       
            <div 
              className='fixed w-80 max-h-fit my-auto mx-auto bg-gray-100 rounded shadow-xl left-0 right-0 top-0
                        bottom-0 md:w-4/5 md:h-3/4 md:flex p-10'
              ref={modalRef}
            >
                <form className="flex justify-end relative md:absolute md:top-0 md:right-0">
                  <button className="m-2" onClick={handleDeleteContact}>Delete</button>
                  <button className='m-2' onClick={handleCloseModal}>X</button>
                </form>

                <div className="w-full md:w-1/2 min-h-80 flex flex-col justify-center self-start items-center">
                  <img src={contact.image} alt="Profile Pic" className="rounded-full aspect-square border-solid border border-slate-500" onClick={onHandleCardClose} />
                  <p className="font-bold text-3xl text-center my-5">{contact.userName}</p>
                  <p className="text-center text-xl mb-5">{contact.email}</p>
                  <button className="m-2" onClick={handleEditContact}>Edit</button>
                </div>

                <div className='ml-16 pt-0 md:min-h-80 self-start'>
                  <p className='text-2xl mb-5'>Contact Details</p>
                  {/* <p className='text-xl'>Email</p>
                  <p className='mb-2 text-slate-500'>{contact.email}</p> */}
                  <p className="text-xl">Phone number</p>
                  <p className="mb-2 text-slate-500">{contact.number}</p>
                  <p className="text-xl">Event</p>
                  <p className="mb-2 text-slate-500">{contact.event}</p>
                  <p className="text-xl">Birthday</p>
                  <p className="mb-2 text-slate-500">{contact.dob}</p>
                </div>
            </div>
        }
      </>
    );
};

export default CardModal;
