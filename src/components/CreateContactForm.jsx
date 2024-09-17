import React, { useState } from "react";
import "./createContact.css";
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
    <div className="modal-body">
      <div className="modal-header">
        <h2>Create New Contact</h2>
      </div>
      <form className="modal-form" onSubmit={handleSubmit}>
        <div className="modal-file-form">
          <div className="custom-file">
            <input
              type="file"
              className="custom-input"
              id="modal-file-input"
              name="image"
              onChange={setImage}
            />
            <label htmlFor="modal-file-input" className="custom-input-label">
              Choose file
            </label>
          </div>
          {/* Place these components within another component? */}
          <ModalCreateInput
            id="firstName"
            type="text"
            label="First name"
            setValue={setFirstName}
          />
          <ModalCreateInput
            id="lastName"
            type="text"
            label="Last name"
            setValue={setLastName}
          />
          <ModalCreateInput
            id="userName"
            type="text"
            label="User name"
            setValue={setUserName}
          />
          <ModalCreateInput
            id="email"
            type="text"
            label="Email"
            setValue={setEmail}
          />
          <ModalCreateInput
            id="dob"
            type="text"
            label="Birthday"
            setValue={setDob}
          />
          <ModalCreateInput
            id="event"
            type="text"
            label="Event"
            setValue={setEvent}
          />
        </div>
        <div className="modal-footer">
          <button className="form-action-button" onClick={onHandleCloseModal}>
            Cancel
          </button>
          <button className="form-action-button" type="submit">
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateContactForm;
