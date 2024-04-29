import React, { useState, useRef } from "react";
import "./Phonebook.css";
import { nanoid } from "nanoid";


export const Phonebook = () => {
  const [phonebook, setPhonebook] = useState([]);

  const inputRef = useRef('');
  const handleSubmit = (e) => {
    e.preventDefault();
    setPhonebook([...phonebook, {name: inputRef.current.value , id: nanoid()}]);
    inputRef.current.value = '';
  }

  return (
    <>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+((['\s\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            ref={inputRef} 
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
      <h2>Contacts</h2>
      <ul>
        {phonebook.map((el) => <li key={el.id}>{el.name}</li>)}
      </ul>
    </>
  )
}