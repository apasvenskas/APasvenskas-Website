import React, { useState } from "react";
import axios from "axios";

function Contacts(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const handleNameChange = e => {
    setName(e.target.value)
  }

  const handleEmailChange = e => {
    setEmail(e.target.value)
  }

  const handlePhoneChange = e => {
    setPhone(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log('first', name, email, phone)
    const newContact = {
      name,
      email,
      phone
    }
    axios.post('http://localhost:3001/contacts', newContact)
      .then(res => {
        console.log('second', res.data)
      })
      .catch(err => {
        console.error(err)
      })
  }
  return(
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        name="name"
        value={name}
        placeholder="Enter Your First and Last Name"
        onChange={handleNameChange}
      />
      <input 
        type="text"
        name="email"
        value={email}
        placeholder="Enter Your Email"
        onChange={handleEmailChange}
      />
      <input 
        type="text"
        name="phone"
        value={phone}
        placeholder="Enter Your Phone #"
        onChange={handlePhoneChange}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Contacts;


