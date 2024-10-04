import React, { useState, useRef, useEffect } from "react";
import ModalCreateInput from "./ModalCreateInput.jsx";

const CreateModal = ({ 
  setContactCount, 
  createModal, 
  setCreateModal, 
  errors, 
  setErrors,
  setImage
}) => {

  const [firstName, setFirstName] = useState("Freddy");
  const [lastName, setLastName] = useState("Lamb");
  const [userName, setUserName] = useState("FreeLamb");
  const [email, setEmail] = useState("Freelamb@gmail.com");
  const [dob, setDob] = useState("Nov 12, 2000");
  const [number, setNumber] = useState('021 089 06584');
  const [event, setEvent] = useState("Coding");

  const modalRef = useRef();
  const fileRef = useRef();

  useEffect(() => {

    function handleClickOutside(e) {

      if (modalRef.current && !modalRef.current.contains(e.target)) {
        handleCloseModal();
      };
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    
  }, []);

  function handleChangeImage(e) {

    fileRef.current = e.target.files[0];
  };

  async function handleSubmit(e) {

    e.preventDefault();
    
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const formData = new FormData();

    formData.append('image', fileRef.current);
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('userName', userName);
    formData.append('email', email);
    formData.append('dob', dob);
    formData.append('event', event);
    formData.append('number', number);

    const response = await fetch("http://localhost:3000/contacts", {
      method: "POST",
      headers: {
        "Accept": "application/json",
      },
      body: formData
    });
//TODO: Amalgamate a url path to static image folder and imagename. to display image through image src attribute. 
    const data = await response.json();
    const imageURL = data.image;
    //I HAVE THE URL RESPONSE. NOW WHAT DO I DO WITH IT?
    setImage(imageURL);
    console.log(data); 

    let isError = false;

    if (firstName === '') {
      setErrors(prev => ({...prev, firstName: 'Enter a name'}));
      isError = true;
    }
    if (number.length < 10) {
      setErrors(prev => ({...prev, number: 'Enter a valid number'}));
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
    } else if (!emailRegex.test(email)) {
      setErrors(prev => ({...prev, email: 'Please enter a valid email'}));
    };

    if (isError) {
      return;
    };

    setContactCount(prev => prev + 1);
    setErrors({});
    handleCloseModal();
  };

  function handleCloseModal() {

    setCreateModal(false);
    setErrors({});
  };

  return (
    <div 
      className={`${createModal ? '' : 'hidden'} 
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
              onChange={handleChangeImage}
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
          {errors.firstName && <p className="-mt-3 text-red-600 text-xs">{errors.firstName}</p>}
          <ModalCreateInput
            id="lastName"
            type="text"
            label="Last name:"
            setValue={setLastName}
            setErrors={setErrors}
            value={lastName}
          />
          {errors.lastName && <p className="-mt-3 text-red-600 text-xs">{errors.lastName}</p>}
          <ModalCreateInput
            id="userName"
            type="text"
            label="User name:"
            setValue={setUserName}
            setErrors={setErrors}
            value={userName}
          />
          {errors.userName && <p className="-mt-3 text-red-600 text-xs">{errors.userName}</p>}
          <ModalCreateInput
            id="number"
            type="text"
            label="Phone number:"
            setValue={setNumber}
            setErrors={setErrors}
            value={number}
          />
          {errors.number && <p className='-mt-3 text-red-600 text-xs'>{errors.number}</p>}
          <ModalCreateInput
            id="email"
            type="text"
            label="Email  :"
            setValue={setEmail}
            setErrors={setErrors}
            value={email}
          />
          {errors.email && <p className="-mt-3 text-red-600 text-xs">{errors.email}</p>}
          <ModalCreateInput
            id="dob"
            type="text"
            label="Birthday:"
            setValue={setDob}
            setErrors={setErrors}
            value={dob}
          />
          <ModalCreateInput
            id="event"
            type="text"
            label="Event:"
            setValue={setEvent}
            setErrors={setErrors}
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
export default CreateModal;