import React, { useState } from "react";
import emailjs from "emailjs-com";
// import { init } from "emailjs-com";

emailjs.init("YOUR_USER_ID");

const ContactForm = (props) => {
    const { contacts, setContacts, newContact, setNewContact } = props;


const handleInputChange = (e) => {
  setNewContact({ ...newContact, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
    e.preventDefault();
  const newId = Math.floor(Math.random() * 1000000);
  const newContactWithId = { ...newContact, id: newId };
  setContacts([...contacts, newContactWithId]);
  setNewContact({ name: "", email: "", phone: "" });

  // send email using EmailJS
  emailjs
    .send(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      newContactWithId,
      "YOUR_USER_ID"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
};


  return (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newContact.name}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={newContact.email}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={newContact.phone}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Send</button>
        </form>
      );
    };
    
    export function Contacts() {
        const [contacts, setContacts] = useState([]);
        const [newContact, setNewContact] = useState({
            name: "",
            email: "",
            phone: "",
        });
        return (
            <>
            <h1>Contacts</h1>
            <ContactForm 
                contacts={contacts}
                setContacts={setContacts}
                newContact={newContact}
                setNewContact={setNewContact}
            />
            <h3>Contact List</h3>
            <ul>
                {contacts.map((contact) => {
                    return (
                    <li key={contact.id}>
                        {contact.name} - {contact.email} - {contact.phone}
                    </li>
                    )
                })}
            </ul>
            </>
        )
    }

