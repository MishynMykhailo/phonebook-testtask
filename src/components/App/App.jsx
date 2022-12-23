import React from "react";
import s from "./App.module.css";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
const App = () => {
  return (
    <>
      <h1 className={s.div}>Phonebook</h1>
      <div className={s.div}>
        <h2>Contacts</h2>
        <ContactForm />
        <ContactList />
      </div>
    </>
  );
};

export default App;
