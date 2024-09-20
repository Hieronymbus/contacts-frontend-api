import React, { useState } from "react";
import ModalCreateInput from "./ModalCreateInput.jsx";

const CreateModal = ({ setContactCount, isCreateModal, setState}) => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [event, setEvent] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/300");

  async function handleSubmit(e) {
    e.preventDefault();

    const contacts = {
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      email: email,
      dob: dob,
      event: event,
      image: image,
    };

    const response = await fetch("http://localhost:3000/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contacts),
    });
    console.log(await response.json());
    setContactCount(prev => prev + 1);

    handleCloseModal();
  }

  function handleCloseModal() {
    setState(false);
  }

  return (
    <div className={`${isCreateModal ? 'flex' : 'hidden'} z-10 mx-auto my-auto w-80 flex-col bg-slate-100 px-5 py-5 rounded shadow-xl fixed left-0 right-0`}>
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
export default CreateModal;