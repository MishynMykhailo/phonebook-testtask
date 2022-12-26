import React from "react";
import s from "./HomePage.module.css";
import ContactList from "../../components/ContactList/ContactList";
import Section from "../../components/Section/Section";
import Button from "../../components/Button/Button";
import { Link, Route, Routes } from "react-router-dom";
import ContactFormPage from "../ContactFormPage/ContactFormPage";

const Home = () => {
  return (
    <>
      <Section>
        <div className={s.div}>
          <h2>Contacts</h2>
          <Link to="/add">
            <Button type="button" name="Add contact" />
          </Link>
        </div>
        <ContactList />
      </Section>
    </>
  );
};

export default Home;
