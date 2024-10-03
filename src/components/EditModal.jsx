import React, { useState, useRef, useEffect } from "react";
import ModalCreateInput from "./ModalCreateInput.jsx";

const EditModal = ({
  editModal,
  setEditModal,
  setContactCount,
  contact,
  setErrors,
  errors
}) => {
  const [firstName, setFirstName] = useState(contact.firstName);
  const [lastName, setLastName] = useState(contact.lastName);
  const [userName, setUserName] = useState(contact.userName);
  const [email, setEmail] = useState(contact.email);
  const [dob, setDob] = useState(contact.dob);
  const [number, setNumber] = useState(contact.number);
  const [event, setEvent] = useState(contact.event);
  const [image, setImage] = useState(contact.image);

  const modalRef = useRef();
  const fileRef = useRef();

  useEffect(() => {

    function handleClickOutside(e) {

      if (modalRef.current && !modalRef.current.contains(e.target)) {
        handleCloseModal();
        console.log('clicked outside');
      };

    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };

  }, [])

  async function handleSubmit(e) {
    e.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      alert("nah");
      return;
    }

    const formData = new FormData();

    formData.append('image', fileRef.current);
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('userName', userName);
    formData.append('email', email);
    formData.append('dob', dob);
    formData.append('event', event);
    formData.append('number', number);

    const response = await fetch(
      `http://localhost:3000/contacts/${contact.id}`,
      {
        method: "PUT",
        body: formData,
      }
    );
    console.log(await response.json());
    
    setContactCount((prev) => prev + 1);
    setEditModal(false);
  };

  function handleCloseModal() {
    setEditModal(false);
  };

  return (
    <div ref={modalRef} className={`${editModal ? '' : 'hidden'} z-10 mx-auto w-80 flex-col bg-slate-100 px-5 py-5 rounded shadow-xl fixed top-0 left-0 right-0`}>
      <h2 className="text-center text-gray-500 font-semibold text-2xl">Edit Contact</h2>
      
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex justify-between items-center mt-5">
          <label
            htmlFor="modal-file-input"
            className="custom-input-label text-base text-gray-500 justify-between items-center 
              flex w-full ml-auto relative p-2.5 rounded border border-solid border-gray-500"
          >
            Choose Profile Image:
          </label>
          <input
            type="file"
            className="hidden relative"
            id="modal-file-input"
            name="image"
            onChange={(e) => fileRef.current = e.target.files[0]}
          />
        </div>
        {/* Place these components within another component? */}
        <ModalCreateInput
          id="firstName"
          type="text"
          label="First name:"
          setValue={setFirstName}
          setErrors={setErrors}
          errors={errors}
          value={firstName}
        />
        <ModalCreateInput
          id="lastName"
          type="text"
          label="Last name:"
          setValue={setLastName}
          setErrors={setErrors}
          errors={errors}
          value={lastName}
        />
        <ModalCreateInput
          id="userName"
          type="text"
          label="Phone number:"
          setValue={setNumber}
          setErrors={setErrors}
          errors={errors}
          value={number}
        />
        <ModalCreateInput
          id="number"
          type="text"
          label="User name:"
          setValue={setUserName}
          setErrors={setErrors}
          errors={errors}
          value={userName}
        />
        <ModalCreateInput
          id="email"
          type="text"
          label="Email:"
          setValue={setEmail}
          setErrors={setErrors}
          errors={errors}
          value={email}
        />
        <ModalCreateInput
          id="dob"
          type="text"
          label="Birthday:"
          setValue={setDob}
          setErrors={setErrors}
          errors={errors}
          value={dob}
        />
        <ModalCreateInput
          id="event"
          type="text"
          label="Event:"
          setValue={setEvent}
          setErrors={setErrors}
          errors={errors}
          value={event}
        />
        <div className="flex justify-end gap-2">
          <button
            className="text-base border-none rounded text-white bg-gray-400 hover:bg-gray-300 p-2.5"
            onClick={handleCloseModal}
          >
            Cancel
          </button>
          <button
            className="text-base border-none rounded text-white bg-gray-400 hover:bg-gray-300 p-2.5"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditModal;
