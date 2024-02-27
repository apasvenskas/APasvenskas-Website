import React, { useState } from "react";
import axios from "axios";

function Contacts() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("first", name, email, phone);
    const newContact = {
      name,
      email,
      phone,
    };
    axios
      .post("http://localhost:3001/contacts", newContact)
      .then((res) => {
        console.log("second", res.data);
        setStatus("success");
        setName("");
        setEmail("");
        setPhone("");
      })
      .catch((err) => {
        console.error(err);
        setStatus("error");
      });
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Contacts</h1>
      <div className="contacts">
        <p>
          Please leave your contact information below name, email, and phone. I
          will contact you ass soon as posible.
        </p>
        <p className="note">
          (Please email me your contact info by clicking the Submit button below. 
          make sure all the inputs are filled)
        </p>
      </div>
      <input
        type="text"
        name="name"
        value={name}
        placeholder="First and Last Name"
        onChange={handleNameChange}
        required
      />
      <input
        type="text"
        name="email"
        value={email}
        placeholder="Email"
        onChange={handleEmailChange}
        required
      />
      <input
        type="text"
        name="phone"
        value={phone}
        placeholder="Phone #"
        onChange={handlePhoneChange}
      />
      {/* <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a> */}
      <button className="submit" type="submit">
        <a
          className="a-tag"
          href={`mailto:apasvenskas@outlook.com?body=Name: ${name}, \nEmail: ${email}, \nPhone: ${phone}`}
        >
          Submit & Email
        </a>
      </button>
      {status === "success" && (
        <p style={{ color: "green" }}>
          Your contacts have been added, I will contact you as soon posible.
        </p>
      )}
      {status === "error" && (
        <p>Thank you for the eamil I will contact you as soon as posible.</p>
      )}
    </form>
  );
}

export default Contacts;
