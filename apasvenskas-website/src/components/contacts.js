import React, { useState } from "react";
import axios from "axios";

const ContactForm = (props) => {
    const { newContact, setNewContact } = props;


const handleInputChange = (e) => {
  setNewContact({ ...newContact, [e.target.name]: e.target.value });
};

const handleSubmit = async (event) => {
  event.preventDefault();
  // create an object with the contact data
  const contact = { name: newContact.name, email: newContact.email, phone: newContact.phone };
    try {
    // await for the response from the server
    const response = await axios.post('http://localhost:3000/contacts', contact);
    console.log(response.data);
    alert('Contact created successfully.');
  } catch (error) {
    console.error(error);
    alert('Something went wrong. Please try again later.');
  }
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
    
    export default ContactForm 
    
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
            <h3>I will contact you as soon as posible..</h3>
            </>
        )
    }


