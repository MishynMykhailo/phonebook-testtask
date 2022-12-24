import React from "react";
import s from "./HomePage.module.css";
import ContactList from "../../components/ContactList/ContactList";
import Section from "../../components/Section/Section";
import Button from "../../components/Button/Button";
const Home = () => {
  return (
    <>
      <Section>
        <div className={s.div}>
          <h2>Contacts</h2>
          <a href="/add">
            <Button type="button" name="Add contact" />
          </a>
        </div>
        <ContactList />
      </Section>
    </>
  );
};

export default Home;
