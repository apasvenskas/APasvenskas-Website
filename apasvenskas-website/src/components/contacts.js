import React, { useState } from "react";
import axios from "axios";

// function Contacts() {
//   // Initialize state variables for user inputs
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");

//   // Handle input changes
//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePhoneChange = (e) => {
//     setPhone(e.target.value);
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Create a user object with the input values
//     const user = {
//       name: name,
//       email: email,
//       phone: phone,
//     };
//     // Make a POST request to the database endpoint with the user object
//     axios
//       .post("http://localhost:3000/website/contacts", user)
//       .then((response) => {
//         // Display a success message
//         alert("User created successfully!");
//       })
//       .catch((error) => {
//         // Display an error message
//         alert(error.message);
//       });
//   };

//   // Return the JSX code for the form
//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="name">Name:</label>
//       <input
//         type="text"
//         id="name"
//         value={name}
//         onChange={handleNameChange}
//         required
//       />
//       <label htmlFor="email">Email:</label>
//       <input
//         type="email"
//         id="email"
//         value={email}
//         onChange={handleEmailChange}
//         required
//       />
//       <label htmlFor="phone">Phone:</label>
//       <input
//         type="tel"
//         id="phone"
//         value={phone}
//         onChange={handlePhoneChange}
//         required
//       />
//       <button type="submit">Create User</button>
//     </form>
//   );
// }

// export default Contacts;

function Contacts(){
  const [name, setName] = useState('')

  const handleChange = e => {
    setName(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(name)
  }
  return(
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        name="name"
        value={name}
        placeholder="Enter Your First and Last Name"
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Contacts;


