import React, { useState } from "react";
import "./Phonebook.css";
// import { nanoid } from "nanoid";

export const Phonebook = () => {
 const [phonebook, setPhonebook] = useState({contacts: [], name: ''})

 const handleSubmit = (e) => {
  e.preventDefault();
  const currentName = phonebook.name;
  const currentState = {
    ...phonebook,
    contacts: [...phonebook.contacts, currentName]
  }
  setPhonebook({...currentState})
  console.log(phonebook);
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
         value={phonebook.name || ""}
         pattern="^[a-zA-Zа-яА-Я]+((['\s\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
         required
         onChange={(e) => setPhonebook({...phonebook, name: e.target.value})}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
    <h2>Contacts</h2>
    <ul>
      {/* {phonebook.contacts.map((el) => <li key={el.id}>{el.name}</li>)} */}
    </ul>
  </>
 )
}