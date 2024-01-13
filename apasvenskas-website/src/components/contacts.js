import React, { useState } from "react";
import axios from "axios";

// const ContactForm = (props) => {
//     const { newContact, setNewContact } = props;


// const handleInputChange = (e) => {
//   setNewContact({ ...newContact, [e.target.name]: e.target.value });
// };

// const handleSubmit = async (event) => {
//   event.preventDefault();
//   // create an object with the contact data
//   const contact = { name: newContact.name, email: newContact.email, phone: newContact.phone };
//     try {
//     // await for the response from the server
//     const response = await axios.post('http://localhost:3000/contacts', contact);
//     console.log(response.data);
//     alert('Contact created successfully.');
//   } catch (error) {
//     console.error(error);
//     alert('Something went wrong. Please try again later.');
//   }
// };


//   return (
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={newContact.name}
//             onChange={handleInputChange}
//             required
//           />
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={newContact.email}
//             onChange={handleInputChange}
//             required
//           />
//           <label htmlFor="phone">Phone:</label>
//           <input
//             type="tel"
//             id="phone"
//             name="phone"
//             value={newContact.phone}
//             onChange={handleInputChange}
//             required
//           />
//           <button type="submit">Send</button>
//         </form>
//       );
//     };
    
//     export default ContactForm 
    
//     export function Contacts() {
//         const [contacts, setContacts] = useState([]);
//         const [newContact, setNewContact] = useState({
//             name: "",
//             email: "",
//             phone: "",
//         });
//         return (
//             <>
//             <h1>Contacts</h1>
//             <ContactForm 
//                 contacts={contacts}
//                 setContacts={setContacts}
//                 newContact={newContact}
//                 setNewContact={setNewContact}
//             />
//             <h3>I will contact you as soon as possible..</h3>
//             </>
//         )
//     }

function Contacts() {
  // Initialize state variables for user inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Handle input changes
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a user object with the input values
    const user = {
      name: name,
      email: email,
      phone: phone,
    };
    // Make a POST request to the database endpoint with the user object
    axios
      .post("http://localhost:3000/website/contacts", user)
      .then((response) => {
        // Display a success message
        alert("User created successfully!");
      })
      .catch((error) => {
        // Display an error message
        alert(error.message);
      });
  };

  // Return the JSX code for the form
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={handleNameChange}
        required
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={handleEmailChange}
        required
      />
      <label htmlFor="phone">Phone:</label>
      <input
        type="tel"
        id="phone"
        value={phone}
        onChange={handlePhoneChange}
        required
      />
      <button type="submit">Create User</button>
    </form>
  );
}

export default Contacts;


