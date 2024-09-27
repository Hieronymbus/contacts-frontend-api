import React, { useState } from "react";
import ModalCreateInput from "./ModalCreateInput.jsx";

const EditModal = ({
  isEditModal,
  setEditModal,
  setContactCount,
  contact,
  contacts,
}) => {
  const [firstName, setFirstName] = useState(contact.firstName);
  const [lastName, setLastName] = useState(contact.lastName);
  const [userName, setUserName] = useState(contact.userName);
  const [email, setEmail] = useState(contact.email);
  const [dob, setDob] = useState(contact.dob);
  const [event, setEvent] = useState(contact.event);
  const [image, setImage] = useState(contact.image);

  let existingFirstName;
  let nameTaken = "";

  contacts.forEach((contact) => {
    existingFirstName = contact.firstName;
  });

  if (firstName === existingFirstName) {
    nameTaken = "name already exists";
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (firstName === existingFirstName || !emailRegex.test(email)) {
      alert("nah");
      return;
    }

    const contacts = {
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      email: email,
      dob: dob,
      event: event,
      image: image,
    };

    const response = await fetch(
      `http://localhost:3000/contacts/${contact.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contacts),
      }
    );

    console.log(await response.json());
    setContactCount((prev) => prev + 1);
    setEditModal(false);
  };

  function handleCloseModal(e) {
    e.preventDefault();
    setEditModal(false);
  }

  return (
    <div className={`${isEditModal ? '' : 'hidden'} z-10 mx-auto w-80 flex-col bg-slate-100 px-5 py-5 rounded shadow-xl fixed top-0 left-0 right-0`}>
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
            onChange={setImage}
          />
        </div>
        {/* Place these components within another component? */}
        <ModalCreateInput
          id="firstName"
          type="text"
          label="First name:"
          setValue={setFirstName}
        />
        <ModalCreateInput
          id="lastName"
          type="text"
          label="Last name:"
          setValue={setLastName}
        />
        <ModalCreateInput
          id="userName"
          type="text"
          label="User name:"
          setValue={setUserName}
        />
        <ModalCreateInput
          id="email"
          type="text"
          label="Email:"
          setValue={setEmail}
        />
        <ModalCreateInput
          id="dob"
          type="text"
          label="Birthday:"
          setValue={setDob}
        />
        <ModalCreateInput
          id="event"
          type="text"
          label="Event:"
          setValue={setEvent}
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
