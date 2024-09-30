import React, { useState, useRef, useEffect } from "react";
import ModalCreateInput from "./ModalCreateInput.jsx";

const CreateModal = ({ setContactCount, isCreateModal, setState, errors, setErrors}) => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [number, setNumber] = useState(0);
  const [event, setEvent] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/300");

  const modalRef = useRef();
  

  async function handleSubmit(e) {
    e.preventDefault();

    setErrors({});

    //Error handling;

    let isError = false;// Chat.....

    if (firstName === '') {
      setErrors(prev => ({...prev, firstName: 'Enter a name'}));
      isError = true;
    };
    if (lastName === '') {
      setErrors(prev => ({...prev, lastName: 'Enter a name'}));
      isError = true;
    };
    if (userName === '') {
      setErrors(prev => ({...prev, userName: 'Enter a username'}));
      isError = true;
    };
    if (email === '') {
      setErrors(prev => ({...prev, email: 'Enter an email'}));
      isError = true;
    };

    if (isError) {
      console.log("fill out required fields");
      console.log(errors);
      return;
    };

    // Create an object that holds state values of user data for POSTing to the json server;
    const contacts = {
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      email: email,
      dob: dob,
      event: event,
      image: image,
      number: number,
    };


    const response = await fetch("http://localhost:3000/contacts", {

      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contacts),
    });
    setContactCount(prev => prev + 1);

      handleCloseModal();
  };

  useEffect(() => {
      function handleClickOutside(e) {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
          handleCloseModal();
        }
      }

      document.addEventListener('mousedown', handleClickOutside);

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      }
      
  }, []);

  function handleCloseModal() {
    setState(false);
  }

  return (
    <div 
      className={`${isCreateModal ? '' : 'hidden'} 
              overflow-y-scroll z-10 mx-auto h-full w-80 flex-col 
              bg-slate-100 px-5 py-5 rounded shadow-xl fixed top-0 
              left-0 right-0`}
      ref={modalRef}
    >   
        <h2 className="text-center text-gray-500 font-semibold text-2xl">Create New Contact</h2>
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
              onChange={setImage}
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
          />
          {errors.firstName && <p className="-mt-3 text-red-600 text-xs">{errors.firstName}</p>}
          <ModalCreateInput
            id="lastName"
            type="text"
            label="Last name:"
            setValue={setLastName}
            setErrors={setErrors}
          />
          {errors.lastName && <p className="-mt-3 text-red-600 text-xs">{errors.lastName}</p>}
          <ModalCreateInput
            id="userName"
            type="text"
            label="User name:"
            setValue={setUserName}
            setErrors={setErrors}
          />
          {errors.userName && <p className="-mt-3 text-red-600 text-xs">{errors.userName}</p>}
          <ModalCreateInput
            id="number"
            type="text"
            label="Phone number:"
            setValue={setNumber}
            setErrors={setErrors}
          />
          <ModalCreateInput
            id="email"
            type="text"
            label="Email  :"
            setValue={setEmail}
            setErrors={setErrors}
          />
          {errors.email && <p className="-mt-3 text-red-600 text-xs">{errors.email}</p>}
          <ModalCreateInput
            id="dob"
            type="text"
            label="Birthday:"
            setValue={setDob}
            setErrors={setErrors}
          />
          <ModalCreateInput
            id="event"
            type="text"
            label="Event:"
            setValue={setEvent}
            setErrors={setErrors}
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
export default CreateModal;