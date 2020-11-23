import React, { useState } from 'react'

const Form = () => {
  const [name, setName] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      name: name
    }

    const options = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }

    const response = await fetch('https://kevinrobertandrews.com/post-test', options)

    console.log(response);
  }

  return <form onSubmit={handleSubmit} className="form">
    <label htmlFor="name">
      Please enter your name:
      <input type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        required />
    </label>
    <input type="submit" value="Submit" />
  </form>
}

export default Form;