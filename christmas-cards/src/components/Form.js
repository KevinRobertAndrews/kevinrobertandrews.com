import React, { useState } from 'react'

const Form = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      name: name,
      address: address
    }

    const options = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }

    fetch('https://kevinrobertandrews.com/post-test', options).then(response => response.json())
      .then(data => console.log(data));
  }

  return <form onSubmit={handleSubmit} className="form">
    <label htmlFor="name" className="form__label">
      Please enter your name(s):
      <input type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        required />
    </label>
    <label htmlFor="address" className="form__label">
      Please enter your address:
      <input type="text"
        placeholder="Address"
        value={address}
        onChange={e => setAddress(e.target.value)}
        required />
    </label>
    <input type="submit" value="Submit" />
  </form>
}

export default Form;