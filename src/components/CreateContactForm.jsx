import React, { useState } from "react";
import ModalCreateInput from "./ModalCreateInput.jsx";

const CreateContactForm = ({ onHandleCloseModal }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [event, setEvent] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/300");

  async function handleSubmit(e) {
    const contacts = {
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      email: email,
      dob: dob,
      event: event,
      image: image,
    };

    e.preventDefault();

    const response = await fetch("http://localhost:3000/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contacts),
    });

    console.log(await response.json());

    onHandleCloseModal();
  }

  return (
    <div className="w-full">

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
  
        <div className="flex justify-around gap-2">
          <button className="border-2 border-stone-700 rounded-lg p-2" onClick={onHandleCloseModal}>
            Cancel
          </button>
          <button className="border-2 border-stone-700 rounded-lg p-2" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateContactForm;
