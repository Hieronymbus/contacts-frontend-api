import React, { useState } from "react";
import ModalCreateInput from "./ModalCreateInput.jsx";

const EditModal = ({
  isEditModal,
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
    setRenderEditForm(false);

    console.log("contacts, ", contactsData);
  }

  return (
    <div className={`${isEditModal ? '' : 'hidden'} w-full`}>
      <h2 className="text-center font-semibold">Create New Contact</h2>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label htmlFor="modal-file-input" className="">
            Choose Profile Image:
          </label>
          <input
            type="file"
            className="border-2 border-stone-700 rounded-lg"
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
          value={firstName}
        />
        <p className="-mt-6 mb-5 text-lg text-red-500 pl-2">{nameTaken}</p>
        <ModalCreateInput
          id="lastName"
          type="text"
          label="Last name:"
          setValue={setLastName}
          value={lastName}
        />
        <ModalCreateInput
          id="userName"
          type="text"
          label="User name:"
          setValue={setUserName}
          value={userName}
        />
        <ModalCreateInput
          id="email"
          type="text"
          label="Email:"
          setValue={setEmail}
          value={email}
        />
        <ModalCreateInput
          id="dob"
          type="text"
          label="Birthday:"
          setValue={setDob}
          value={dob}
        />
        <ModalCreateInput
          id="event"
          type="text"
          label="Event:"
          setValue={setEvent}
          value={event}
        />

        <div className="flex justify-around gap-2">
          <button
            className="border-2 border-stone-700 rounded-lg p-2"
            onClick={() => setRenderEditForm(false)}
          >
            Cancel
          </button>
          <button
            className="border-2 border-stone-700 rounded-lg p-2"
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
